"use client";

import { useAccount, useChainId } from "wagmi";

export default function Dashboard() {

    const { address, isConnected } = useAccount();

    const chainId = useChainId();

    if (!isConnected)
        return (
            <div>
                Wallet belum terhubung
            </div>
        );

    return (
        <div>

            <h2>Dashboard</h2>

            <p>
                Address:
                {" "}
                {address}
            </p>

            <p>
                Chain ID:
                {" "}
                {chainId}
            </p>

            <p>
                Network:
                {" "}
                Arc Testnet
            </p>

        </div>
    );
}