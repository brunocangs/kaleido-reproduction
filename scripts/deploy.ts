import hre from "hardhat";
import MyErc20Json from "../artifacts/contracts/ERC20.sol/MyErc20.json"
import MyErc721Json from "../artifacts/contracts/ERC721.sol/MyErc721.json"

async function main() {
  // Deploy ERC20 with proxy
  const [signer] = await hre.ethers.getSigners()
  const ERC20Factory = await hre.ethers.getContractFactory("MyErc20")
  const erc20Instance = await hre.upgrades.deployProxy(ERC20Factory, [signer.address])

  console.log("ERC20 Bytecode", MyErc20Json.bytecode)
  console.log("ERC20 ABI", MyErc20Json.abi)

  console.log("Deployed ERC20 at", await erc20Instance.getAddress())

  // Deploy ERC721 with proxy

  console.log("ERC721 Bytecode", MyErc721Json.bytecode)
  console.log("ERC721 ABI", MyErc721Json.abi)

  const ERC721Factory = await hre.ethers.getContractFactory("MyErc721")
  const erc721Instance = await hre.upgrades.deployProxy(ERC721Factory, [signer.address])
  console.log("Deployed ERC721Proxy at", await erc721Instance.getAddress())
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err)
    return process.exit(1);
  })
