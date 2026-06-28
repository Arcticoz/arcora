"use client";

import { useState } from "react";

import { useSend } from "@/hooks/useSend";

export default function SendCard() {

  const [recipient, setRecipient] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const {

    status,

    estimate,

    send

  } = useSend();

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
      w-full
      max-w-4xl
      "
    >

      <div
        className="
        flex
        items-center
        justify-between
        mb-8
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Send
        </h2>

        <div
          className="
          bg-purple-500/20
          border
          border-purple-500/30
          rounded-full
          px-5
          py-2
          text-purple-300
          font-semibold
          "
        >
          USDC
        </div>

      </div>


      {/* Recipient */}

      <div className="space-y-3">

        <p
          className="
          text-zinc-500
          text-sm
          "
        >
          Recipient Address
        </p>

        <input

          value={recipient}

          onChange={(e) =>

            setRecipient(
              e.target.value
            )

          }

          placeholder="0x..."

          className="
          w-full
          bg-zinc-800
          rounded-3xl
          p-5
          outline-none
          "

        />

      </div>


      {/* Amount */}

      <div className="space-y-3 mt-8">

        <p
          className="
          text-zinc-500
          text-sm
          "
        >
          Amount
        </p>

        <input

          value={amount}

          onChange={(e) =>

            setAmount(
              e.target.value
            )

          }

          placeholder="1.00"

          className="
          w-full
          bg-zinc-800
          rounded-3xl
          p-5
          outline-none
          "

        />

      </div>


      {/* Estimate */}

      {

        estimate &&

        <div
          className="
          mt-8
          bg-zinc-800
          rounded-3xl
          p-6
          "
        >

          <div
            className="
            flex
            items-center
            justify-between
            "
          >

            <span
              className="
              text-zinc-500
              "
            >
              Estimated Fee
            </span>

            <span
              className="
              font-semibold
              "
            >
              {

                estimate.fee?.toString()

              }

            </span>

          </div>

        </div>

      }


      {/* Button */}

      <button

        className="
        w-full
        mt-10
        py-5
        rounded-full
        text-xl
        font-bold
        bg-linear-to-r
        from-purple-600
        via-pink-500
        to-blue-500
        shadow-xl
        shadow-purple-500/20
        hover:scale-[1.01]
        duration-300
        "

        onClick={() =>

          send(

            amount,

            recipient

          )

        }

      >

        {

          status === "estimating"

            ?

            "Estimating..."

            :

          status === "sending"

            ?

            "Sending..."

            :

            "Send"

        }

      </button>

    </section>

  );

}