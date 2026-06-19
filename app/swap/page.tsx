import ConnectWallet from "@/components/ConnectWallet";
import SwapCard from "@/components/SwapCard";
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
        max-w-7xl
        mx-auto
        px-6
        py-10
        "
      >

        {/* Hero */}

        <section
          className="
          max-w-5xl
          mx-auto
          bg-zinc-900/70
          border
          border-white/10
          rounded-4xl
          p-8
          backdrop-blur-xl
          shadow-2xl
          "
        >

          <h1
            className="
            text-5xl
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
            mt-3
            "
          >
            Instantly swap USDC and EURC on Arc Testnet.
          </p>

        </section>


        {/* Swap Card */}

<section
  className="
  max-w-5xl
  mx-auto
  mt-10
  "
>

  <SwapCard />

</section>


        {/* History + Activity */}

        <section
          className="
          max-w-5xl
          mx-auto
          mt-20
          space-y-8
          "
        >

          <SwapHistory />

          <RecentActivity />

        </section>

      </div>

      <Footer />

    </main>

  );

}