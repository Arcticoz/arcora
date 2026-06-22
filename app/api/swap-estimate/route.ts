import { NextResponse } from "next/server";
import { getSwapQuote } from "@/lib/getSwapQuote";

export async function POST(
  request: Request
) {

  try {

    const body =
      await request.json();

    const {

      amount,

      tokenIn,

      tokenOut,

      slippage

    } = body;

    if (

      !amount ||

      !tokenIn ||

      !tokenOut

    ) {

      return NextResponse.json(

        {

          success: false,

          message:
            "Missing parameters"

        },

        {

          status: 400

        }

      );

    }

    const quote =
      await getSwapQuote(

        amount,

        tokenIn,

        tokenOut,

        slippage

      );

    return NextResponse.json(

      {

        success: true,

        quote

      }

    );

  }

  catch (error) {

    console.error(
      error
    );

    return NextResponse.json(

      {

        success: false,

        message:
          "Estimate failed"

      },

      {

        status: 500

      }

    );

  }

}