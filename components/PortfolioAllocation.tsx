"use client";

import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip
}
from "recharts";

const data = [

  {
    name: "USDC",
    value: 60
  },

  {
    name: "EURC",
    value: 35
  },

  {
    name: "NFT",
    value: 5
  }

];

const COLORS = [
  "#a855f7",
  "#ec4899",
  "#3b82f6"
];

export default function PortfolioAllocation() {

  return (

    <section
      className="
      bg-zinc-900/70
      backdrop-blur-xl
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
        Portfolio Allocation
      </h2>

      <div
        className="
        h-80
        "
      >

        <ResponsiveContainer>

          <PieChart>

            <Pie

              data={data}

              dataKey="value"

              nameKey="name"

              outerRadius={110}

            >

              {

                data.map(
                  (
                    _,
                    index
                  ) => (

                    <Cell
                      key={index}
                      fill={
                        COLORS[index]
                      }
                    />

                  )

                )

              }

            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </section>

  );

}