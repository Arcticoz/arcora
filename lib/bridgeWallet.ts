import { createViemAdapterFromProvider }
from "@circle-fin/adapter-viem-v2";

export async function getBridgeAdapter() {

  const ethereum =
    (window as any).ethereum;

  if (!ethereum) {

    throw new Error(
      "Wallet not found"
    );

  }

  await ethereum.request({

    method:
      "eth_requestAccounts"

  });

  return await createViemAdapterFromProvider({

    provider:
      ethereum

  });

}