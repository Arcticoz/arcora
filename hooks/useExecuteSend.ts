"use client";

import { toast } from "sonner";

import {
  AppKit,
  type SendParams
}
from "@circle-fin/app-kit";

import {
  connectBrowserWallet
}
from "@/lib/send/browserWallet";

const kit =
  new AppKit();
  
export function useExecuteSend() {

  async function executeSend(

    amount: string,

    recipient: string

  ) {

    try {

      const {

        adapter,

        walletName,

        connectedAddress

      } =

        await connectBrowserWallet();

      const sendParams:

        SendParams = {

        from: {

          adapter,

          chain:
            "Arc_Testnet"

        },

        to:
          recipient,

        amount,

        token:
          "USDC"

      };

      const result =

        await kit.send(

          sendParams

        );

      toast.success(

        `${amount} USDC sent`

      );

      return {

        success:
          true,

        result,

        walletName,

        connectedAddress

      };

    }

    catch (error: any) {

      console.error(
        error
      );

      toast.error(

        error.message ??

        "Send failed"

      );

      return {

        success:
          false,

        message:

          error.message ??

          "Send failed"

      };

    }

  }

  return {

    executeSend

  };

}