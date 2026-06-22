"use client";

import { toast } from "sonner";
import { saveSwapHistory } from "@/lib/swapHistory";

export function useExecuteSwap() {

  async function executeSwap(

    amount: string,

    tokenIn: string,

    tokenOut: string,

    slippage: string

  ) {

    const response =
      await fetch(
        "/api/swap",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            amount,

            tokenIn,

            tokenOut,

            slippage

          })

        }
      );

    const data =
      await response.json();

    if (
      data.success
    ) {

      saveSwapHistory(

        amount,

        tokenIn,

        tokenOut,

        data.result?.explorerUrl,

        data.result?.txHash

      );

      toast.success(
        `${amount} ${tokenIn} → ${tokenOut}`
      );

    }

    else {

      toast.error(
        data.message
      );

    }

    return data;

  }

  return {

    executeSwap

  };

}