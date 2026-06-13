import ConnectWallet from "@/components/ConnectWallet";
import Dashboard from "@/components/Dashboard";
import WalletCard from "@/components/WalletCard";
import BalanceCard from "@/components/BalanceCard";
import NFTCard from "@/components/NFTCard";
import NFTInfo from "@/components/NFTInfo";
import MyNFTs from "@/components/MyNFTs";
import SwapCard from "@/components/SwapCard";
export default function Home() {

  return (

    <main>

      <h1>

        ARCora

      </h1>

      <ConnectWallet/>

      <hr/>

      <Dashboard/>

      <hr/>

      <WalletCard/>

<BalanceCard/>

<NFTInfo/>

<NFTCard/>

<MyNFTs/>
<SwapCard/>

    </main>

  );

}