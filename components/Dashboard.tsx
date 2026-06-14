"use client";

import {
  useAccount,
  useChainId
} from "wagmi";

import {
  useEffect,
  useState
} from "react";

export default function Dashboard() {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  const {
    address,
    isConnected
  } = useAccount();

  const chainId =
    useChainId();

  if (!mounted)
    return null;

  if (!isConnected)

    return (

      <div
        className="
        bg-zinc-900/70
        border
        border-white/10
        rounded-[40px]
        p-10
        backdrop-blur-xl
        shadow-2xl
        "
      >

        <h2
          className="
          text-4xl
          font-black
          "
        >
          ARCora
        </h2>

        <p
          className="
          text-zinc-400
          mt-4
          "
        >
          Connect your wallet to access Swap, NFTs and Portfolio.
        </p>

      </div>

    );

  return (

    <div
      className="
      bg-zinc-900/70
      border
      border-white/10
      rounded-[40px]
      p-10
      backdrop-blur-xl
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

        <div>

          <h1
            className="
            text-5xl
            font-black
            bg-linear-to-r
            from-purple-400
            via-pink-500
            to-blue-500
            text-transparent
            bg-clip-text
            "
          >
            ARCora
          </h1>

          <p
            className="
            text-zinc-400
            text-lg
            mt-3
            "
          >
            All-In-One Web3 Dashboard
          </p>

        </div>

        <div
          className="
          text-green-400
          font-semibold
          "
        >
          Connected ✓
        </div>

      </div>


      <div
        className="
        grid
        lg:grid-cols-3
        gap-6
        mt-10
        "
      >

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
            Wallet Address
          </p>

          <p
            className="
            mt-3
            font-semibold
            break-all
            "
          >
            {address}
          </p>

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
            Network
          </p>

          <h3
            className="
            text-2xl
            font-bold
            mt-3
            "
          >
            Arc Testnet
          </h3>

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
            Chain ID
          </p>

          <h3
            className="
            text-2xl
            font-bold
            mt-3
            "
          >
            {chainId}
          </h3>

        </div>

      </div>

    </div>

  );

}