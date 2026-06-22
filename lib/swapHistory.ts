export function saveSwapHistory(

  amount: string,

  tokenIn: string,

  tokenOut: string,

  explorerUrl?: string,

  txHash?: string

) {

  const history =

    JSON.parse(

      localStorage.getItem(

        "swapHistory"

      ) ?? "[]"

    );

  history.unshift({

    amount,

    tokenIn,

    tokenOut,

    date:

      new Date()

        .toLocaleString(),

    explorerUrl,

    txHash

  });

  localStorage.setItem(

    "swapHistory",

    JSON.stringify(

      history

    )

  );

}