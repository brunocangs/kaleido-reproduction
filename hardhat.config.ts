import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    kaleido: {
      url: "https://u0cjzink8m:fPA-tExlaAFKIpq7oZI6u85s4jofpgVT1dra5RzK24I@u0clemx0dk-u0otv882ab-rpc.us0-aws.kaleido.io/"
    }
  }
};

export default config;
