import { createConfig, http } from "wagmi";
import { injected } from "wagmi/connectors";

import {
  baseSepolia,
  sepolia,
  arbitrumSepolia
} from "wagmi/chains";

import { arcTestnet } from "./arc";

export const config = createConfig({
  chains: [
    arcTestnet,
    baseSepolia,
    sepolia,
    arbitrumSepolia
  ],

  connectors: [
    injected()
  ],

  transports: {
    [arcTestnet.id]: http(),
    [baseSepolia.id]: http(),
    [sepolia.id]: http(),
    [arbitrumSepolia.id]: http()
  }
});