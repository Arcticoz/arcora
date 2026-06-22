import {
  SLIPPAGE_OPTIONS
}
from "@/constants/slippage";

type Props = {

  slippage: string;

  setSlippage:
    (
      value: string
    ) => void;

};

export default function SlippageSelector({

  slippage,

  setSlippage

}: Props) {

  return (

    <div
      className="
      mt-5
      flex
      items-center
      gap-2
      "
    >

      {

        SLIPPAGE_OPTIONS.map(

          (value) => (

            <button

              key={value}

              onClick={() =>

                setSlippage(

                  value

                )

              }

              className={`
                px-4
                py-2
                rounded-xl
                font-medium
                duration-300

                ${

                  slippage === value

                    ?

                    "bg-purple-600 text-white"

                    :

                    "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"

                }

              `}

            >

              {value}%

            </button>

          )

        )

      }

    </div>

  );

}