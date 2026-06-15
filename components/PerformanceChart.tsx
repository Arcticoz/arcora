"use client";

import { useState } from "react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip
}
from "recharts";

const datasets = {

  "1D": [
    { value: 210 },
    { value: 215 },
    { value: 213 },
    { value: 218 },
    { value: 220 }
  ],

  "7D": [
    { value: 180 },
    { value: 190 },
    { value: 205 },
    { value: 220 },
    { value: 215 },
    { value: 225 },
    { value: 230 }
  ],

  "30D": [
    { value: 120 },
    { value: 135 },
    { value: 150 },
    { value: 180 },
    { value: 220 },
    { value: 260 },
    { value: 300 }
  ],

  "ALL": [
    { value: 60 },
    { value: 90 },
    { value: 130 },
    { value: 170 },
    { value: 220 },
    { value: 280 },
    { value: 350 }
  ]

};

export default function PerformanceChart() {

  const [period, setPeriod] =
    useState<keyof typeof datasets>("7D");

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

      <div
        className="
        flex
        items-center
        justify-between
        mb-8
        "
      >

        <h2
          className="
          text-2xl
          font-bold
          "
        >
          Performance
        </h2>

        <div
          className="
          flex
          gap-3
          "
        >

          {

            Object.keys(
              datasets
            )

            .map(

              (item) => (

                <button

                  key={item}

                  onClick={() =>
                    setPeriod(
                      item as keyof typeof datasets
                    )
                  }

                  className={`
                  px-4
                  py-2
                  rounded-full
                  duration-300

                  ${
                    period === item

                    ?

                    "bg-purple-600"

                    :

                    "bg-zinc-800"
                  }
                  `}
                >

                  {item}

                </button>

              )

            )

          }

        </div>

      </div>

      <div
        className="
        h-72
        "
      >

        <ResponsiveContainer>

          <LineChart
            data={
              datasets[
                period
              ]
            }
          >

            <Tooltip />

            <Line

              dataKey="value"

              stroke="#a855f7"

              strokeWidth={4}

              dot={false}

            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </section>

  );

}