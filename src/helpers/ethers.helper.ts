//========= GET CONTRACT =========//
import {ethers} from "ethers";
import contractAddressDev from "../assets/contracts/dev/Contract-address.json";
import contractArtifactDev from "../assets/contracts/dev/Contract-artifact.json";

import contractAddressProd from "../assets/contracts/prod/Contract-address.json";
import contractArtifactProd from "../assets/contracts/prod/Contract-artifact.json";

//========= GET PROVIDER =========//
export const getProvider = () => new ethers.providers.Web3Provider(window.ethereum);

//========= GET CONTRACT =========//
export const getContract = (provider: ethers.providers.Web3Provider) => {
    // @ts-ignore
    return new ethers.Contract(
        process.env.NODE_ENV === "production" ? contractAddressProd.address : contractAddressDev.address,
        process.env.NODE_ENV === "production" ? contractArtifactProd.abi : contractArtifactDev.abi,
        provider
    );
};

//========= GET SHOP CONTRACT ADDRESS =========//
export const contractAddress = process.env.NODE_ENV === "production" ? contractAddressProd.address : contractAddressDev.address

//========= CHAIN ID =========//
export const chainIdDev = 31337;
export const chainIdProd = 11155111
export const chainId = process.env.NODE_ENV === "production" ? chainIdProd : chainIdDev;
