"use client";

import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Card from "./ui/Card";

export default function WalletCard() {

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  const {
    address,
    isConnected
  } = useAccount();

  if (!mounted)
    return null;

  return (

    <Card>

      <div
        className="
        flex
        items-center
        justify-between
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Wallet
        </h2>

        <div
          className="
          text-green-400
          text-sm
          font-semibold
          "
        >
          Connected ✓
        </div>

      </div>


      <div
        className="
        mt-8
        space-y-5
        "
      >

        <div
          className="
          bg-zinc-800
          rounded-2xl
          p-4
          "
        >

          <p
            className="
            text-zinc-500
            text-sm
            "
          >
            Address
          </p>

          <p
            className="
            mt-2
            font-semibold
            break-all
            "
          >
            {

              address

              ??

              "Wallet is not connected.."

            }

          </p>

        </div>


        <div
          className="
          grid
          md:grid-cols-2
          gap-4
          "
        >

          <div
            className="
            bg-zinc-800
            rounded-2xl
            p-4
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

            <p
              className="
              mt-2
              font-semibold
              "
            >
              Arc Testnet
            </p>

          </div>


          <div
            className="
            bg-zinc-800
            rounded-2xl
            p-4
            "
          >

            <p
              className="
              text-zinc-500
              text-sm
              "
            >
              Wallet Type
            </p>

            <p
              className="
              mt-2
              font-semibold
              "
            >
              EVM Wallet
            </p>

          </div>

        </div>

      </div>

    </Card>

  );

}