const fs = require("fs");

for (let i = 0; i < 1000; i++) {

    const metadata = {

        name:
            `ARCora Early Access Badge #${i}`,

        description:
            "Exclusive badge for early ARCora users.",

        image:
            "https://gateway.pinata.cloud/ipfs/bafybeidn35bgjvbbss7vwcu6hfwibumgvkd46uonkiq53eqwbs4hmcdo24",

        attributes: [

            {
                trait_type: "Tier",
                value: "Early Access"
            },

            {
                trait_type: "Collection",
                value: "Genesis"
            },

            {
                trait_type: "Edition",
                value: i
            }

        ]

    };

    fs.writeFileSync(

        `metadata/${i}.json`,

        JSON.stringify(
            metadata,
            null,
            2
        )

    );

}

console.log(
    "1000 metadata berhasil dibuat!"
);