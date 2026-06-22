type Props = {

  amount: string;

  setAmount:
    (
      value: string
    ) => void;

  tokenIn: string;

  setTokenIn:
    (
      value: string
    ) => void;

  balance: number;

};

export default function SwapInput({

  amount,

  setAmount,

  tokenIn,

  setTokenIn,

  balance

}: Props) {

  return (

    <div
      className="
      bg-zinc-800
      rounded-[28px]
      p-5
      hover:bg-zinc-800/80
      duration-300
      "
    >

      <div
        className="
        flex
        justify-between
        items-center
        "
      >

        <p
          className="
          text-zinc-500
          text-sm
          "
        >
          You Pay
        </p>

        <p
          className="
          text-xs
          text-zinc-400
          "
        >
          Balance: {

            balance.toFixed(4)

          } {tokenIn}
        </p>

      </div>

      <div
        className="
        flex
        items-center
        justify-between
        mt-4
        "
      >

        <input

          type="number"

          value={amount}

          onChange={(e) =>

            setAmount(
              e.target.value
            )

          }

          className="
          bg-transparent
          outline-none
          text-4xl
          font-black
          w-40
          "

        />

        <select

          value={tokenIn}

          onChange={(e) =>

            setTokenIn(
              e.target.value
            )

          }

          className="
          bg-zinc-700
          rounded-full
          px-5
          py-3
          font-semibold
          cursor-pointer
          "

        >

          <option>
            USDC
          </option>

          <option>
            EURC
          </option>

        </select>

      </div>

    </div>

  );

}