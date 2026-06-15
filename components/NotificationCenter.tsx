"use client";

export default function NotificationCenter() {

  const notifications = [

    {
      title: "Swap Successful",
      description: "1 USDC → EURC",
      time: "2 min ago"
    },

    {
      title: "NFT Minted",
      description: "Genesis NFT #8",
      time: "10 min ago"
    },

    {
      title: "Portfolio Updated",
      description: "Asset values refreshed",
      time: "1 hour ago"
    }

  ];

  return (

    <section
      className="
      bg-zinc-900/70
      border
      border-white/10
      rounded-3xl
      p-8
      shadow-2xl
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        mb-8
        "
      >
        Notifications
      </h2>

      <div
        className="
        space-y-5
        "
      >

        {

          notifications.map(

            (
              item,
              index
            ) => (

              <div

                key={index}

                className="
                bg-zinc-800
                rounded-2xl
                p-5
                "

              >

                <div
                  className="
                  font-bold
                  "
                >
                  {item.title}
                </div>

                <div
                  className="
                  text-zinc-400
                  mt-1
                  "
                >
                  {item.description}
                </div>

                <div
                  className="
                  text-zinc-500
                  text-sm
                  mt-3
                  "
                >
                  {item.time}
                </div>

              </div>

            )

          )

        }

      </div>

    </section>

  );

}