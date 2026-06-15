import ConnectWallet from "@/components/ConnectWallet";
import SwapCard from "@/components/SwapCard";
import EURCBalance from "@/components/EURCBalance";
import SwapHistory from "@/components/SwapHistory";
import RecentActivity from "@/components/RecentActivity";
import Footer from "@/components/Footer";

export default function SwapPage() {

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
        space-y-10
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
            font-black
            bg-linear-to-r
            from-purple-400
            via-pink-500
            to-blue-500
            text-transparent
            bg-clip-text
            "
          >
            Swap
          </h1>

          <p
            className="
            text-zinc-400
            text-xl
            mt-5
            "
          >
            Swap USDC and EURC instantly.
          </p>

        </section>


        <div
          className="
          grid
          xl:grid-cols-2
          gap-10
          items-start
          "
        >

          <SwapCard />

          <div
            className="
            space-y-10
            "
          >

            <EURCBalance />

            <SwapHistory />

            <RecentActivity />

          </div>

        </div>

      </div>

      <Footer />

    </main>

  );

}