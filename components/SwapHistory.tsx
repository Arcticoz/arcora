"use client";

import { useEffect, useState } from "react";

export default function SwapHistory() {

  const [history, setHistory] =
    useState<string[]>([]);

  useEffect(() => {

    const data =
      localStorage.getItem(
        "swapHistory"
      );

    if (data) {

      setHistory(
        JSON.parse(data)
      );

    }

  }, []);

  return (

    <div
      className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-3xl
      p-6
      shadow-xl
      "
    >

      <div
        className="
        flex
        items-center
        justify-between
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Swap History
        </h2>

        <div
          className="
          text-zinc-400
          text-sm
          "
        >
          {history.length} Activities
        </div>

      </div>

      {

        history.length === 0

        ?

        <div
          className="
          text-zinc-500
          text-center
          py-12
          "
        >

          No swap history yet

        </div>

        :

        <div
          className="
          mt-6
          space-y-4
          "
        >

          {

            history.map(

              (
                item,
                index
              ) => (

                <div
                  key={index}
                  className="
                  bg-zinc-800
                  border
                  border-zinc-700
                  rounded-2xl
                  p-4
                  hover:border-purple-500
                  duration-300
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    justify-between
                    "
                  >

                    <div>

                      <p
                        className="
                        font-semibold
                        "
                      >
                        {item}
                      </p>

                      <p
                        className="
                        text-zinc-500
                        text-sm
                        mt-1
                        "
                      >
                        Completed
                      </p>

                    </div>

                    <div
                      className="
                      text-green-400
                      text-xl
                      "
                    >
                      ✓
                    </div>

                  </div>

                </div>

              )

            )

          }

        </div>

      }

    </div>

  );

}