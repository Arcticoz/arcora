import ConnectWallet from "@/components/ConnectWallet";
import SendCard from "@/components/SendCard";
import Footer from "@/components/Footer";

export default function SendPage() {

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
            Send Stablecoins
          </h1>

          <p
            className="
            text-zinc-400
            text-xl
            mt-5
            "
          >
            Fast, secure and seamless transfers powered by Arc and Circle.
          </p>

        </section>


        {/* Send Card */}

        <section
          className="
          flex
          justify-center
          "
        >

          <SendCard />

        </section>

      </div>

      <Footer />

    </main>

  );

}