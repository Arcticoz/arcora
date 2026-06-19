"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useTokenBalance } from "@/hooks/useTokenBalance";

export default function SwapCard() {

  const [amount, setAmount] = useState("1");
  const [loading, setLoading] = useState(false);
  const [tokenIn, setTokenIn] = useState("USDC");

  const tokenOut =
    tokenIn === "USDC"
      ? "EURC"
      : "USDC";

  const USDC_ADDRESS =
  "0x3600000000000000000000000000000000000000";

  const EURC_ADDRESS =
  "0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a";

  const usdcBalance =
  useTokenBalance(
    USDC_ADDRESS
  );

  const eurcBalance =
  useTokenBalance(
    EURC_ADDRESS
  );

  function reverseTokens() {

    setTokenIn(
      tokenOut
    );

  }

  async function swap() {

    try {

      setLoading(true);

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
              tokenOut
            })
          }
        );

      const data =
        await response.json();

      if (data.success) {

        const history =
          JSON.parse(
            localStorage.getItem(
              "swapHistory"
            ) ?? "[]"
          );

        history.unshift({

          amount,

          tokenIn,

          tokenOut,

          date:
            new Date().toLocaleString(),

          explorerUrl:
            data.result?.explorerUrl,

          txHash:
            data.result?.txHash

        });

        localStorage.setItem(
          "swapHistory",
          JSON.stringify(history)
        );

        toast.success(
          `${amount} ${tokenIn} → ${tokenOut}`
        );

      }

      else {

        toast.error(
          data.message ??
          "Swap failed"
        );

      }

    }

    catch (error) {

      console.error(error);

      toast.error(
        "Swap failed"
      );

    }

    finally {

      setLoading(false);

    }

  }

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


      {/* You Pay */}

      <div
        className="
        bg-zinc-800
        rounded-[28px]
        p-5
        hover:bg-zinc-800/80
        duration-300
        "
      >

        <div
          className="
          flex
          justify-between
          items-center
          "
        >

          <p
            className="
            text-zinc-500
            text-sm
            "
          >
            You Pay
          </p>

        <p
          className="
          text-xs
          text-zinc-400
          "
        >
          Balance: {
            tokenIn === "USDC"
              ? usdcBalance.toFixed(4)
              : eurcBalance.toFixed(4)
          } {tokenIn}
        </p>

        </div>

        <div
          className="
          flex
          items-center
          justify-between
          mt-4
          "
        >

          <input
            type="number"
            value={amount}
            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
            className="
            bg-transparent
            outline-none
            text-4xl
            font-black
            w-40
            "
          />

          <select
            value={tokenIn}
            onChange={(e) =>
              setTokenIn(
                e.target.value
              )
            }
            className="
            bg-zinc-700
            rounded-full
            px-5
            py-3
            font-semibold
            cursor-pointer
            "
          >

            <option>
              USDC
            </option>

            <option>
              EURC
            </option>

          </select>

        </div>

      </div>


      {/* Switch */}

      <div
        className="
        flex
        justify-center
        -my-3
        relative
        z-10
        "
      >

        <button
          onClick={reverseTokens}
          className="
          w-12
          h-12
          rounded-full
          bg-zinc-900
          border
          border-white/10
          text-xl
          hover:rotate-180
          hover:scale-110
          duration-300
          "
        >
          ⇅
        </button>

      </div>


      {/* You Receive */}

      <div
        className="
        bg-zinc-800
        rounded-[28px]
        p-5
        hover:bg-zinc-800/80
        duration-300
        "
      >

        <div
          className="
          flex
          justify-between
          items-center
          "
        >

          <p
            className="
            text-zinc-500
            text-sm
            "
          >
            You Receive
          </p>

          <p
            className="
            text-xs
            text-zinc-400
            "
          >
            Balance: {
              tokenOut === "USDC"
                ? usdcBalance.toFixed(4)
                : eurcBalance.toFixed(4)
            } {tokenOut}
          </p>
      

        </div>

        <div
          className="
          flex
          items-center
          justify-between
          mt-4
          "
        >

          <div
            className="
            text-4xl
            font-black
            "
          >
            {amount}
          </div>

          <div
            className="
            bg-zinc-700
            rounded-full
            px-5
            py-3
            font-semibold
            "
          >
            {tokenOut}
          </div>

        </div>

      </div>


      {/* Info */}

      <div
        className="
        mt-5
        space-y-2
        text-sm
        text-zinc-400
        px-1
        "
      >

        <div
          className="
          flex
          justify-between
          "
        >

          <span>
            Rate
          </span>

          <span>
            1 {tokenIn} = 1 {tokenOut}
          </span>

        </div>

        <div
          className="
          flex
          justify-between
          "
        >

          <span>
            Network
          </span>

          <span>
            Arc Testnet
          </span>

        </div>

      </div>


      {/* Swap Button */}

      <button

        onClick={swap}

        disabled={loading}

        className="
        w-full
        h-16
        mt-6
        rounded-2xl
        text-lg
        font-bold
        bg-linear-to-r
        from-purple-600
        via-pink-500
        to-blue-500
        hover:opacity-90
        hover:scale-[1.01]
        duration-300
        "

      >

        {

          loading

          ?

          "Swapping..."

          :

          `Swap ${tokenIn} → ${tokenOut}`

        }

      </button>

    </section>

  );

}