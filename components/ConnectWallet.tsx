"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ConnectWallet() {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  if (!mounted)
    return null;

  return (

    <header
      className="
      sticky
      top-5
      z-50
      "
    >

      <div
        className="
        max-w-[1800px]
        mx-auto
        px-6
        "
      >

        <div
          className="
          bg-zinc-900/60
          backdrop-blur-2xl
          border
          border-white/10
          rounded-full
          px-8
          py-4
          shadow-[0_10px_50px_rgba(0,0,0,.4)]
          flex
          items-center
          justify-between
          "
        >

          {/* Left */}

          <div
            className="
            flex
            items-center
            gap-12
            "
          >

            <Link
              href="/"
              className="
              text-3xl
              font-black
              bg-linear-to-r
              from-purple-400
              via-pink-500
              to-blue-500
              text-transparent
              bg-clip-text
              hover:scale-105
              duration-300
              "
            >
              ARCora
            </Link>

            <nav
              className="
              hidden
              lg:flex
              items-center
              gap-2
              "
            >

              <button
                className="
                px-5
                py-2
                rounded-full
                bg-zinc-800
                text-white
                font-medium
                "
              >
                Dashboard
              </button>

              <button
                className="
                px-5
                py-2
                rounded-full
                text-zinc-400
                hover:bg-zinc-800
                hover:text-white
                duration-300
                "
              >
                NFTs
              </button>

              <button
                className="
                px-5
                py-2
                rounded-full
                text-zinc-400
                hover:bg-zinc-800
                hover:text-white
                duration-300
                "
              >
                Swap
              </button>

              <button
                className="
                px-5
                py-2
                rounded-full
                text-zinc-400
                hover:bg-zinc-800
                hover:text-white
                duration-300
                "
              >
                Portfolio
              </button>

            </nav>

          </div>


          {/* Right */}

          <div
            className="
            scale-105
            "
          >

            <ConnectButton />

          </div>

        </div>

      </div>

    </header>

  );

}