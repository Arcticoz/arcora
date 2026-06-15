"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function SwapCard() {

  const [amount, setAmount] = useState("1");
  const [loading, setLoading] = useState(false);
  const [tokenIn, setTokenIn] = useState("USDC");

  const tokenOut =
    tokenIn === "USDC"
      ? "EURC"
      : "USDC";

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
          tokenIn: "EURC",
          tokenOut: "USDC"
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
            )

            ?? "[]"

          );
          console.log(data.result);
history.unshift({
  amount,
  tokenIn,
  tokenOut,
  date: new Date().toLocaleString(),
  explorerUrl: data.result.explorerUrl,
  txHash: data.result.txHash
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
        "An error occurred"
      );
      }

    }

    finally {

      setLoading(false);

    }

  }

  return (

    <section
      className="
      bg-zinc-900/70
      backdrop-blur-xl
      border
      border-white/10
      rounded-4xl
      p-8
      shadow-2xl
      "
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Swap
      </h2>

      <div
        className="
        bg-zinc-800
        rounded-3xl
        p-6
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
            font-bold
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

      <div
        className="
        flex
        justify-center
        my-5
        text-3xl
        "
      >
        ↓
      </div>

      <div
        className="
        bg-zinc-800
        rounded-3xl
        p-6
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

        <div
          className="
          text-4xl
          font-black
          mt-4
          "
        >
          {tokenOut}
        </div>

      </div>

      <button

        onClick={swap}

        disabled={loading}

        className="
        w-full
        mt-8
        py-4
        rounded-full
        text-lg
        font-bold
        bg-linear-to-r
        from-purple-600
        via-pink-500
        to-blue-500
        hover:scale-[1.02]
        duration-300
        "

      >

        {

          loading

            ?

            "Swapping..."

            :

            "Swap"

        }

      </button>

    </section>

  );

}