import { SwapStatus } from "@/types/SwapStatus";

type Props = {

  status: SwapStatus;

  tokenIn: string;

  tokenOut: string;

  onClick: () => void;

};

export default function SwapButton({

  status,

  tokenIn,

  tokenOut,

  onClick

}: Props) {

  return (

    <button

      onClick={onClick}

      disabled={
        status !== "idle"
        &&
        status !== "success"
        &&
        status !== "failed"
      }

      className="
      w-full
      h-16
      mt-6
      rounded-2xl
      text-lg
      font-bold
      bg-linear-to-r
      from-purple-600
      via-pink-500
      to-blue-500
      hover:opacity-90
      hover:scale-[1.01]
      duration-300
      "

    >

      {

        status === "estimating"

          ?

          "Estimating..."

          :

        status === "swapping"

          ?

          "Swapping..."

          :

        status === "pending"

          ?

          "Pending..."

          :

          `Swap ${tokenIn} → ${tokenOut}`

      }

    </button>

  );

}