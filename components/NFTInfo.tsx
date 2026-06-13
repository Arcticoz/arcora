"use client";

import { useReadContract } from "wagmi";
import { NFT_ADDRESS } from "../lib/contracts";
const abi = [
  {
    type: "function",
    name: "totalSupply",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        type: "uint256",
      },
    ],
  },
] as const;

export default function NFTInfo() {
  const { data } = useReadContract({
    address: NFT_ADDRESS as `0x${string}`,
    abi,
    functionName: "totalSupply",
  });

  return (
    <div>
      <h2>ARCora NFT</h2>

      <p>
        Total Minted: {data ? data.toString() : "0"} / 1000
      </p>
    </div>
  );
}