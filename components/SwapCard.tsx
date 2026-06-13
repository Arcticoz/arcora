"use client";

export default function SwapCard(){

async function swap(){

await fetch(

"/api/swap",

{

method:"POST"

}

);

}

return(

<div className="border rounded-xl p-6">

<h2 className="font-bold text-xl">

Swap

</h2>

<button

onClick={swap}

>

Swap USDC → EURC

</button>

</div>

);

}