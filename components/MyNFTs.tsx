"use client";

import { useReadContract } from "wagmi";
import { NFT_ADDRESS } from "@/lib/contracts";

const abi = [
{
name:"myNFTs",
type:"function",
stateMutability:"view",
inputs:[],
outputs:[
{
type:"uint256[]"
}
]
}
];

export default function MyNFTs(){

const {data}=useReadContract({

address:NFT_ADDRESS as `0x${string}`,

abi,

functionName:"myNFTs"

});

return(

<div className="border rounded-xl p-6">

<h2 className="font-bold text-xl">

My NFTs

</h2>

{
Array.isArray(data)&&

data.map((id,index)=>(

<div key={index}>

NFT #{id.toString()}

</div>

))

}

</div>

);

}