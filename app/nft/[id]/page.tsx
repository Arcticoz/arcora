"use client";

import { NFT_ADDRESS } from "@/lib/contracts";
import { useAccount } from "wagmi";

type Props = {
  params: {
    id: string;
  };
};

export default function NFTDetailPage({
  params
}: Props) {

  const tokenId = params.id;

  const { address } =
    useAccount();

  const mintDate =
  new Date().toLocaleDateString();

  function copyContract() {

    navigator.clipboard.writeText(
      NFT_ADDRESS
    );

    alert(
      "Contract copied!"
    );

  }

  return (

    <div
      className="
      max-w-4xl
      mx-auto
      p-8
      "
    >

      <div
        className="
        grid
        md:grid-cols-2
        gap-8
        "
      >

        <img
          src="https://gateway.pinata.cloud/ipfs/bafybeidn35bgjvbbss7vwcu6hfwibumgvkd46uonkiq53eqwbs4hmcdo24"
          className="rounded-2xl"
        />

        <div>

          <h1
            className="
            text-4xl
            font-bold
            "
          >
            ARCora Early Access Badge
          </h1>

          <p className="mt-4">

            NFT #{tokenId}

          </p>

          <div
            className="
            grid
            grid-cols-2
            gap-4
            mt-8
            "
          >

            <div
              className="
              border
              rounded-xl
              p-4
              "
            >

              <p
                className="
                text-gray-500
                text-sm
                "
              >
                Tier
              </p>

              <h3
                className="
                font-bold
                text-lg
                mt-2
                "
              >
                Early Access
              </h3>

            </div>

            <div
              className="
              border
              rounded-xl
              p-4
              "
            >

              <p
                className="
                text-gray-500
                text-sm
                "
              >
                Collection
              </p>

              <h3
                className="
                font-bold
                text-lg
                mt-2
                "
              >
                Genesis
              </h3>

            </div>

            <div
              className="
              border
              rounded-xl
              p-4
              "
            >

              <p
                className="
                text-gray-500
                text-sm
                "
              >
                Edition
              </p>

              <h3
                className="
                font-bold
                text-lg
                mt-2
                "
              >
                #{tokenId}
              </h3>

            </div>

            <div
              className="
              border
              rounded-xl
              p-4
              "
            >

              <p
                className="
                text-gray-500
                text-sm
                "
              >
                Status
              </p>

              <h3
                className="
                font-bold
                text-lg
                mt-2
                text-green-600
                "
              >
                Owned ✓
              </h3>

            </div>

          </div>

          <div
            className="
            border
            rounded-xl
            p-4
            mt-6
            "
          >

            <p
              className="
              text-gray-500
              text-sm
              "
            >
              Contract
            </p>

            <h3
              className="
              font-bold
              mt-2
              "
            >
              {NFT_ADDRESS.slice(0, 6)}
              ...
              {NFT_ADDRESS.slice(-4)}
            </h3>

          </div>
          <div
className="
border
rounded-xl
p-4
mt-6
"
>

<p
className="
text-gray-500
text-sm
"
>

Owner

</p>

<h3
className="
font-bold
mt-2
"
>

{
address

?

`${address.slice(0,6)}...${address.slice(-4)}`

:

"-"

}

</h3>

</div>
<div
className="
border
rounded-xl
p-4
mt-6
"
>

<p
className="
text-gray-500
text-sm
"
>

Mint Date

</p>

<h3
className="
font-bold
mt-2
"
>

{mintDate}

</h3>

</div>
          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-6
            "
          >

            <button

              onClick={copyContract}

              className="
              bg-blue-600
              text-white
              px-4
              py-2
              rounded-xl
              "

            >

              Copy Contract

            </button>

                <a

                href={`https://testnet.arcscan.app/address/${NFT_ADDRESS}`}

                target="_blank"

                className="
                bg-gray-800
                text-white
                px-4
                py-2
                rounded-xl
                "

                >

                View Explorer

                </a>
            <a

              href="https://gateway.pinata.cloud/ipfs/bafybeidn35bgjvbbss7vwcu6hfwibumgvkd46uonkiq53eqwbs4hmcdo24"

              download

              className="
              bg-green-600
              text-white
              px-4
              py-2
              rounded-xl
              "

            >

              Download Badge

            </a>

            <button

              onClick={() =>

                navigator.share({

                  title:
                    `ARCora NFT #${tokenId}`,

                  text:
                    "Check out my ARCora NFT!",

                  url:
                    window.location.href

                })

              }

              className="
              bg-purple-600
              text-white
              px-4
              py-2
              rounded-xl
              "

            >

              Share NFT

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}