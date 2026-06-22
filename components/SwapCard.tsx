"use client";

import { useState } from "react";

import { useSwap } from "@/hooks/useSwap";
import { useTokens } from "@/hooks/useTokens";
import { useTokenBalance } from "@/hooks/useTokenBalance";
import { useSlippage } from "@/hooks/useSlippage";
import { useAmount } from "@/hooks/useAmount";
import { useBalances } from "@/hooks/useBalances";


import SwapInput from "./SwapInput";
import SwapOutput from "./SwapOutput";
import SwapInfo from "./SwapInfo";
import SlippageSelector from "./SlippageSelector";
import SwapButton from "./SwapButton";
import SwapDirectionButton from "./SwapDirectionButton";


export default function SwapCard() {

  const {

  amount,

  setAmount

} = useAmount();

  const {

  slippage,

  setSlippage

} = useSlippage();

  const {

    tokenIn,

    tokenOut,

    setTokenIn,

    reverseTokens

  } = useTokens();

  const {

    status,

    quote,

    swap

  } = useSwap();

  const {

  usdcBalance,

  eurcBalance

} = useBalances();

  return (

    <section
      className="
      bg-zinc-900/80
      backdrop-blur-xl
      border
      border-white/10
      rounded-[40px]
      p-8
      shadow-2xl
      "
    >

      <div
        className="
        flex
        items-center
        justify-between
        mb-5
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Swap
        </h2>

      </div>

      <SwapInput

        amount={amount}

        setAmount={setAmount}

        tokenIn={tokenIn}

        setTokenIn={setTokenIn}

        balance={

          tokenIn === "USDC"

            ?

            usdcBalance

            :

            eurcBalance

        }

      />

      <SwapDirectionButton

        onClick={reverseTokens}

      />

      <SwapOutput

        amount={amount}

        tokenOut={tokenOut}

        balance={

          tokenOut === "USDC"

            ?

            usdcBalance

            :

            eurcBalance

        }

      />

      <SlippageSelector

        slippage={slippage}

        setSlippage={setSlippage}

      />

      <SwapInfo

        quote={quote}

        tokenIn={tokenIn}

        tokenOut={tokenOut}

        slippage={slippage}

      />

      <SwapButton

        status={status}

        tokenIn={tokenIn}

        tokenOut={tokenOut}

        onClick={() =>

          swap(

            amount,

            tokenIn,

            tokenOut,

            slippage

          )

        }

      />

    </section>

  );

}