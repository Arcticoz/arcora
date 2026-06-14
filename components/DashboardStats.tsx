"use client";

import { useAccount } from "wagmi";

import StatsCard from "./StatsCard";
import USDCStats from "./USDCStats";
import EURCStats from "./EURCStats";
import NFTCount from "./NFTCount";
import TotalAssets from "./TotalAssets";

export default function DashboardStats() {

  const { address } =
    useAccount();

  return (

    <section
      className="
      space-y-6
      "
    >

      <div>

        <h2
          className="
          text-3xl
          font-bold
          "
        >
          Portfolio Overview
        </h2>

        <p
          className="
          text-zinc-400
          mt-2
          "
        >
          Assets, NFTs and balances across ARCora.
        </p>

      </div>


      <div
        className="
        grid
        sm:grid-cols-2
        xl:grid-cols-5
        gap-6
        "
      >

        <StatsCard

          title="Wallet"

          value={

            address

              ?

              `${address.slice(0, 6)}...${address.slice(-4)}`

              :

              "-"

          }

        />


        <StatsCard

          title="USDC"

          value={
            <USDCStats />
          }

        />


        <StatsCard

          title="EURC"

          value={
            <EURCStats />
          }

        />


        <StatsCard

          title="NFT Owned"

          value={
            <NFTCount />
          }

        />


        <StatsCard

          title="Total Assets"

          value={
            <TotalAssets />
          }

        />

      </div>

    </section>

  );

}