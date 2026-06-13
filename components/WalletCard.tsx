"use client";

import { useAccount } from "wagmi";
import Card from "./ui/Card";

export default function WalletCard() {

    const { address } = useAccount();

    return (

        <Card>

            <h2 className="text-xl font-bold">

                Wallet

            </h2>

            <p>

                {address ?? "Wallet belum terhubung"}

            </p>

        </Card>

    );

}