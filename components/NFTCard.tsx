"use client";

import {
  useWriteContract
} from "wagmi";

import {
  NFT_ADDRESS
} from "@/lib/contracts";

const abi = [

  {
    name: "mint",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: []
  }

] as const;

export default function NFTCard() {

  const {
    writeContract
  } = useWriteContract();

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

      <div
        className="
        flex
        items-center
        justify-between
        "
      >

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Mint NFT
        </h2>

        <div
          className="
          bg-purple-500/20
          border
          border-purple-500/30
          rounded-full
          px-4
          py-2
          text-purple-300
          font-semibold
          "
        >
          Early Access
        </div>

      </div>


      <p
        className="
        text-zinc-400
        mt-4
        "
      >
        Mint your ARCora Early Access Badge and join the Genesis Collection.
      </p>


      <div
        className="
        mt-8
        space-y-4
        "
      >

        <div
          className="
          bg-zinc-800
          rounded-3xl
          p-5
          "
        >

          <p
            className="
            text-zinc-500
            text-sm
            "
          >
            Collection
          </p>

          <h3
            className="
            text-xl
            font-bold
            mt-2
            "
          >
            Genesis
          </h3>

        </div>


        <div
          className="
          bg-zinc-800
          rounded-3xl
          p-5
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
              text-sm
              "
            >
              Mint Progress
            </span>

            <span
              className="
              text-zinc-400
              "
            >
              1 / 1000
            </span>

          </div>

          <div
            className="
            h-3
            rounded-full
            bg-zinc-700
            mt-4
            overflow-hidden
            "
          >

            <div
              className="
              h-full
              w-[1%]
              bg-linear-to-r
              from-purple-500
              via-pink-500
              to-blue-500
              rounded-full
              "
            />

          </div>

        </div>

      </div>


      <button

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
        shadow-xl
        shadow-purple-500/20
        "

        onClick={() =>

          writeContract({

            address:
              NFT_ADDRESS as `0x${string}`,

            abi,

            functionName:
              "mint"

          })

        }

      >

        Mint ARCora NFT

      </button>

    </section>

  );

}