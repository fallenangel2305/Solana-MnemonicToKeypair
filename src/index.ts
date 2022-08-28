import nacl from "tweetnacl";
import * as bip39 from "bip39";
import { derivePath } from "ed25519-hd-key";

const web3 = require("@solana/web3.js");
(async () => {
  const mnemonic = "put your memonic phrase (12 words while creating wallet)";
  const seed = await bip39.mnemonicToSeed(mnemonic);
  const seedBuffer = Buffer.from(seed).toString("hex");
  const path44Change = `m/44'/501'/0'/0'`;
  const derivedSeed = derivePath(path44Change, seedBuffer).key;
  const keypair = new web3.Account(
    nacl.sign.keyPair.fromSeed(derivedSeed).secretKey
  );
  console.log(keypair);
})();
