import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";
import { arcTestnet } from "./arc";

export const config = createConfig({
    chains: [arcTestnet],

    connectors: [
        injected()
    ],

    transports: {
        [arcTestnet.id]: http()
    }
});