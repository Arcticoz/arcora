"use client";

import { useWriteContract } from "wagmi";
import { NFT_ADDRESS } from "@/lib/contracts";

const abi = [
  {
    name: "mint",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: []
  }
];

export default function NFTCard() {

  const { writeContract } = useWriteContract();

  return (

    <div>

      <h2>
        ARCora NFT
      </h2>

      <button
        onClick={() =>
          writeContract({
            address: NFT_ADDRESS as `0x${string}`,
            abi,
            functionName: "mint"
          })
        }
      >
        Mint NFT
      </button>

    </div>

  );
}