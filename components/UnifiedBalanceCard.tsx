"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useUnifiedBalance } from "@/hooks/useUnifiedBalance";

export default function UnifiedBalanceCard() {

  const [amount, setAmount] =
    useState("1");

  const [loading, setLoading] =
    useState(false);

    const {

    deposit,

    getBalances,

    estimateSpend

    }= useUnifiedBalance();

  async function handleDeposit() {

    try {

      setLoading(true);

      const data =
        await deposit(amount);

      console.log(data);

      if (data.success) {

        toast.success(
          "Deposit success"
        );

      }

      else {

        toast.error(
          data.message
        );

      }

    }

    catch (error: any) {

      console.error(error);

      toast.error(

        error?.message ??

        "Deposit failed"

      );

    }

    finally {

      setLoading(false);

    }

  }

    async function handleGetBalances() {

    try {

        setLoading(true);

        const data =
        await getBalances();

        console.log(data);

        if (

        data.success &&

        data.balances

        ) {

        toast.success(

            `Confirmed: ${data.balances.totalConfirmedBalance}
    Pending: ${data.balances.totalPendingBalance}`

        );

        }

        else {

        toast.error(

            data.message ??

            "Failed to load balance"

        );

        }

    }

    catch (error: any) {

        console.error(error);

        toast.error(

        error?.message ??

        "Failed to load balance"

        );

    }

    finally {

        setLoading(false);

    }

    }

  async function handleEstimateSpend() {

  try {

    setLoading(true);

    const data =

      await estimateSpend(

        amount

      );

    console.log(data);

    if (

      data.success

    ) {

      toast.success(

        "Estimate Success"

      );

    }

    else {

      toast.error(

        data.message

      );

    }

  }

    catch (error: any) {

    console.error(error);

    toast.error(

        error?.message ??

        "Estimate failed"

    );

    }

  finally {

    setLoading(false);

  }

}

  return (

    <section
      className="
      bg-zinc-900/70
      backdrop-blur-xl
      border
      border-white/10
      rounded-4xl
      p-8
      shadow-2xl
      "
    >

      <h2
        className="
        text-3xl
        font-bold
        mb-8
        "
      >
        Unified Balance
      </h2>

      <div
        className="
        bg-zinc-800
        rounded-3xl
        p-6
        "
      >

        <p
          className="
          text-zinc-500
          text-sm
          mb-4
          "
        >
          Deposit Amount (USDC)
        </p>

        <input

          type="number"

          value={amount}

          onChange={(e) =>

            setAmount(
              e.target.value
            )

          }

          className="
          w-full
          bg-transparent
          outline-none
          text-4xl
          font-bold
          "

        />

      </div>

      <div
        className="
        mt-6
        text-zinc-400
        "
      >

        Source Chain:

        <span
          className="
          ml-2
          font-semibold
          text-white
          "
        >
          Base Sepolia
        </span>

      </div>

      <button

        onClick={handleDeposit}

        disabled={loading}

        className="
        w-full
        mt-8
        py-4
        rounded-full
        text-lg
        font-bold
        bg-linear-to-r
        from-purple-600
        via-pink-500
        to-blue-500
        hover:scale-[1.02]
        duration-300
        disabled:opacity-50
        "

      >

        {

          loading

            ?

            "Depositing..."

            :

            "Deposit to Unified Balance"

        }

      </button>

      <button

        onClick={handleGetBalances}

        disabled={loading}

        className="
        w-full
        mt-4
        py-4
        rounded-full
        text-lg
        font-bold
        bg-zinc-700
        hover:bg-zinc-600
        duration-300
        disabled:opacity-50
        "

      >

        Check Unified Balance

      </button>

      <button

  onClick={handleEstimateSpend}

  disabled={loading}

  className="
  w-full
  mt-4
  py-4
  rounded-full
  text-lg
  font-bold
  bg-emerald-600
  hover:bg-emerald-500
  duration-300
  disabled:opacity-50
  "

>

  Estimate Spend

</button>


    </section>

  );

}