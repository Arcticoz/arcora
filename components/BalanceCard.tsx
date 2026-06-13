"use client";

import { useAccount, useBalance } from "wagmi";

export default function BalanceCard() {

    const { address, isConnected } = useAccount();

    const usdcBalance = useBalance({
        address,
    });

    if (!isConnected)
        return null;

    return (

        <div>

            <h2>
                Balance
            </h2>

            <p>

                Token:

                {" "}

                {usdcBalance.data?.symbol}

            </p>

            <p>

                Balance:

                {" "}

                {usdcBalance.data?.formatted}

            </p>

        </div>

    );
}