"use client";

import { useAccount, useBalance } from "wagmi";

export default function AssetBreakdown() {

  const { address } =
    useAccount();

  const { data: usdc } =
    useBalance({

      address,

      token:
"0x3600000000000000000000000000000000000000" as `0x${string}`

    });

  const { data: eurc } =
    useBalance({

      address,

      token:
        "0x89B50855Aa3bE2F677cD6303Cec089B5F319D72a" as `0x${string}`

    });

  return (

    <section
      className="
      bg-zinc-900/70
      border
      border-white/10
      rounded-3xl
      p-8
      shadow-2xl
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-8
        "
      >
        Asset
      </h2>

      <div
        className="
        space-y-6
        "
      >

        <div
          className="
          flex
          items-center
          justify-between
          "
        >
          <span>USDC</span>

          <span>

            {

              Number(
                usdc?.formatted ?? 0
              )

              .toFixed(2)

            }

          </span>

        </div>

        <div
          className="
          flex
          items-center
          justify-between
          "
        >
          <span>EURC</span>

          <span>

            {

              Number(
                eurc?.formatted ?? 0
              )

              .toFixed(2)

            }

          </span>

        </div>

      </div>

    </section>

  );

}