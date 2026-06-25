import type { EIP1193Provider } from "viem";

import {
  createViemAdapterFromProvider
} from "@circle-fin/adapter-viem-v2";

import {
  BaseSepolia,
  ArcTestnet
} from "@circle-fin/app-kit/chains";

type EIP6963ProviderInfo = {

  uuid: string;

  name: string;

  icon: string;

  rdns: string;

};

type EIP6963ProviderDetail = {

  info: EIP6963ProviderInfo;

  provider: EIP1193Provider;

};

declare global {

  interface WindowEventMap {

    "eip6963:announceProvider":
      CustomEvent<EIP6963ProviderDetail>;

  }

}

export async function discoverBrowserWallets():

Promise<EIP6963ProviderDetail[]> {

  const providers =
    new Map<string, EIP6963ProviderDetail>();

  const handleProviderAnnouncement = (

    event:
      WindowEventMap["eip6963:announceProvider"]

  ) => {

    providers.set(

      event.detail.info.uuid,

      event.detail

    );

  };

  window.addEventListener(

    "eip6963:announceProvider",

    handleProviderAnnouncement

  );

  window.dispatchEvent(

    new Event(
      "eip6963:requestProvider"
    )

  );

  await new Promise(

    (resolve) =>

      window.setTimeout(

        resolve,

        250

      )

  );

  window.removeEventListener(

    "eip6963:announceProvider",

    handleProviderAnnouncement

  );

  return [

    ...providers.values()

  ];

}

async function connectWallet(

  provider: EIP1193Provider

) {

  await provider.request({

    method:
      "eth_requestAccounts",

    params:
      undefined

  });

  const accounts =

    await provider.request({

      method:
        "eth_accounts",

      params:
        undefined

    }) as string[];

  return {

    connectedAddress:

      accounts[0]

      ??

      null

  };

}

export async function connectBrowserWallet() {

  const providers =

    await discoverBrowserWallets();

  const selectedWallet =

    providers.find(

      ({ info }) =>

        info.rdns ===
          "io.metamask"

        ||

        info.name ===
          "MetaMask"

    )

    ??

    providers[0];

  if (!selectedWallet) {

    throw new Error(

      "No EIP-6963 browser wallet found"

    );

  }

  const {

    connectedAddress

  } = await connectWallet(

    selectedWallet.provider

  );

  const adapter =

    await createViemAdapterFromProvider({

      provider:
        selectedWallet.provider,

      capabilities: {

        supportedChains: [

          BaseSepolia,

          ArcTestnet

        ]

      }

    });

  return {

    adapter,

    connectedAddress,

    walletName:

      selectedWallet.info.name

  };

}