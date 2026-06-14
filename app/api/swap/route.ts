import { createSwapKitContext, swap } from "@circle-fin/swap-kit";
import { createViemAdapterFromPrivateKey } from "@circle-fin/adapter-viem-v2";

export async function POST(
  request: Request
) {
  try {
    const body =
  await request.json();

const amount =
  body.amount;
    console.log("KIT_KEY =", process.env.KIT_KEY);
    const adapter =
      createViemAdapterFromPrivateKey({
        privateKey: process.env.PRIVATE_KEY!
      });

    const context =
      createSwapKitContext();
console.log("Testing internet...");
const tokenIn =
body.tokenIn;

const tokenOut =
body.tokenOut;
const response = await fetch(
  "https://api.circle.com"
);

console.log(
  "Circle status:",
  response.status
);
console.log(
"tokenIn =",
tokenIn
);

console.log(
"tokenOut =",
tokenOut
);

console.log(
"amountIn =",
amount
);
const result = await swap(
  context,
  {
    from: {
      adapter,
      chain: "Arc_Testnet"
    },

    tokenIn,

    tokenOut,

    amountIn: amount,

    config: {
      kitKey: process.env.KIT_KEY!
    }
  }
);
    return Response.json({
      success: true,
      result
    });
    

  } catch (error: any) {

  console.log("================================");
  console.log("NAME:");
  console.log(error?.name);

  console.log("MESSAGE:");
  console.log(error?.message);

  console.log("CODE:");
  console.log(error?.code);

  console.log("TYPE:");
  console.log(error?.type);

  console.log("CAUSE:");
  console.dir(
    error?.cause,
    {
      depth: null
    }
  );

  console.log("FULL ERROR:");
  console.dir(
    error,
    {
      depth: null
    }
  );

  return Response.json(
    {
      success: false
    },
    {
      status: 500
    }
  );

}
}