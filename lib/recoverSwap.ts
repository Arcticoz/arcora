export async function recoverSwap(

  execute: () => Promise<any>

) {

  const MAX_RETRIES = 3;

  let lastError;

  for (

    let attempt = 1;

    attempt <= MAX_RETRIES;

    attempt++

  ) {

    try {

      console.log(
        `SWAP ATTEMPT ${attempt}`
      );

      return await execute();

    }

    catch (error) {

      lastError = error;

      console.log(

        `ATTEMPT ${attempt} FAILED`

      );

      if (

        attempt < MAX_RETRIES

      ) {

        console.log(

          "Retrying in 3 seconds..."

        );

        await new Promise(

          resolve =>

            setTimeout(

              resolve,

              3000

            )

        );

      }

    }

  }

  throw lastError;

}