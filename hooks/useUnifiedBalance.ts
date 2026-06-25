"use client";

import { AppKit } from "@circle-fin/app-kit";
import { connectBrowserWallet } from "@/lib/send/browserWallet";
import { CHAINS } from "@/constants/chains";

const kit = new AppKit();


export function useUnifiedBalance() {

  async function deposit(
    amount: string
  ) {

    try {

      const {

        adapter,

        connectedAddress,

        walletName

      } = await connectBrowserWallet();

      const result =

        

        await kit.unifiedBalance.deposit({

          from: {

            adapter,

            chain:
              CHAINS.BASE_SEPOLIA

          },

          amount,

          token:
            "USDC"

        });

      return {

        success: true,

        result,

        connectedAddress,

        walletName

      };

    }

    catch (error: any) {

      console.error(error);

      return {

        success: false,

        message:

          error?.message ??

          "Deposit failed"

      };

    }

  }

  async function getBalances() {

    try {

      const {

        adapter

      } = await connectBrowserWallet();

      const balances =

        await kit.unifiedBalance.getBalances({

          sources: [

            {

              adapter

            }

          ],

          networkType:
            "testnet",

          includePending:
            true

        });

      console.log(balances);

      return {

        success: true,

        balances

      };

    }

    catch (error: any) {

      console.error(error);

      return {

        success: false,

        message:

          error?.message ??

          "Failed to load Unified Balance"

      };

    }

  }

  async function estimateSpend(
  amount: string
) {

  try {

    const {

      adapter

    } = await connectBrowserWallet();

    const estimate = await kit.unifiedBalance.estimateSpend({

        from: {

            adapter,

            allocations: [

            {

                amount,

                chain: CHAINS.BASE_SEPOLIA

            }

            ]

        },

        to: {

            adapter,

            chain: CHAINS.ARC_TESTNET

        },

        amount,

        token: "USDC"

        });

    console.log(
      "Estimate:",
      estimate
    );

    return {

      success: true,

      estimate

    };

  }

  catch (error: any) {

    console.error(error);

    return {

      success: false,

      message:

        error?.message ??

        "Estimate failed"

    };

  }

}

  async function getSupportedChains() {

    try {

      const chains =

        await kit.unifiedBalance.getSupportedChains();

      console.log(chains);

      return {

        success: true,

        chains

      };

    }

    catch (error: any) {

      console.error(error);

      return {

        success: false,

        message:

          error?.message ??

          "Failed to load supported chains"

      };

    }

  }

  

  return {

    deposit,

    getBalances,

    getSupportedChains,

    estimateSpend

  };

}
