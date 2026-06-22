type Props = {

  quote: {

    amountOut: string;

    fee?: string;

    minimumReceived?: string;

    priceImpact?: string;

  } | null;

  tokenIn: string;

  tokenOut: string;

  slippage: string;

};

export default function SwapInfo({

  quote,

  tokenIn,

  tokenOut,

  slippage

}: Props) {

  return (

    <div
      className="
      mt-5
      space-y-2
      text-sm
      text-zinc-400
      px-1
      "
    >

      <div
        className="
        flex
        justify-between
        "
      >

        <span>
          Rate
        </span>

        <span>

          {

            quote

              ?

              `1 ${tokenIn} ≈ ${quote.amountOut} ${tokenOut}`

              :

              `1 ${tokenIn} = 1 ${tokenOut}`

          }

        </span>

      </div>


      <div
        className="
        flex
        justify-between
        "
      >

        <span>
          Fee
        </span>

        <span>

          {

            quote?.fee

            ??

            "-"

          }

        </span>

      </div>


      <div
        className="
        flex
        justify-between
        "
      >

        <span>
          Minimum Received
        </span>

        <span>

          {

            quote?.minimumReceived

            ??

            "-"

          }

        </span>

      </div>


      <div
        className="
        flex
        justify-between
        "
      >

        <span>
          Price Impact
        </span>

        <span>

          {

            quote?.priceImpact

            ??

            "-"

          }

        </span>

      </div>


      <div
        className="
        flex
        justify-between
        "
      >

        <span>
          Slippage
        </span>

        <span>
          {slippage}%
        </span>

      </div>


      <div
        className="
        flex
        justify-between
        "
      >

        <span>
          Network
        </span>

        <span>
          Arc Testnet
        </span>

      </div>

    </div>

  );

}