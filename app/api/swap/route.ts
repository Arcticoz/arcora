import { AppKit } from "@circle-fin/app-kit";
import { createViemAdapterFromPrivateKey }
from "@circle-fin/adapter-viem-v2";

export async function POST(){

const kit=new AppKit();

const adapter=
createViemAdapterFromPrivateKey({

privateKey:
process.env.PRIVATE_KEY!

});

const result=
await kit.swap({

from:{

adapter,

chain:"Arc_Testnet"

},

tokenIn:"USDC",

tokenOut:"EURC",

amountIn:"1.00",

config:{

kitKey:
process.env.KIT_KEY!

}

});

return Response.json(result);

}