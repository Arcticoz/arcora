import ConnectWallet from "@/components/ConnectWallet";
import Dashboard from "@/components/Dashboard";
import WalletCard from "@/components/WalletCard";
import BalanceCard from "@/components/BalanceCard";
import NFTCard from "@/components/NFTCard";
import NFTInfo from "@/components/NFTInfo";
import MyNFTs from "@/components/MyNFTs";
import SwapCard from "@/components/SwapCard";
import EURCBalance from "@/components/EURCBalance";
import SwapHistory from "@/components/SwapHistory";
import DashboardStats from "@/components/DashboardStats";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <main
      className="
      min-h-screen
      text-white
      "
    >

      <ConnectWallet />

      <div
        className="
        max-w-[1800px]
        mx-auto
        px-8
        xl:px-16
        py-10
        space-y-12
        "
      >

        {/* Hero */}

        <section
          className="
          bg-zinc-900/70
          border
          border-white/10
          rounded-[40px]
          p-10
          backdrop-blur-xl
          shadow-2xl
          "
        >

          <h1
            className="
            text-6xl
            xl:text-7xl
            font-black
            bg-linear-to-r
            from-purple-400
            via-pink-500
            to-blue-500
            text-transparent
            bg-clip-text
            "
          >
            Own. Swap. Explore.
          </h1>

          <p
            className="
            text-zinc-400
            text-xl
            mt-5
            "
          >
            Swap • NFTs • Portfolio • Arc Testnet
          </p>

        </section>


        {/* Dashboard */}

        <section
          className="
          space-y-6
          "
        >

          <Dashboard />

          <DashboardStats />

        </section>


        {/* Wallet + Balance */}

        <section
          className="
          grid
          xl:grid-cols-2
          gap-8
          "
        >

          <WalletCard />

          <BalanceCard />

        </section>


        {/* Main */}

        <section
          className="
          grid
          2xl:grid-cols-2
          gap-10
          items-start
          "
        >

          {/* Left */}

          <div
            className="
            space-y-10
            "
          >

            <section
              className="
              grid
              xl:grid-cols-2
              gap-8
              "
            >

              <NFTInfo />

              <NFTCard />

            </section>

            <MyNFTs />

          </div>


          {/* Right */}

          <div
            className="
            space-y-10
            "
          >

            <SwapCard />

            <section
              className="
              grid
              xl:grid-cols-2
              gap-8
              "
            >

              <EURCBalance />

              <SwapHistory />

              <Footer />
              
            </section>

          </div>

        </section>

      </div>

    </main>

  );

}