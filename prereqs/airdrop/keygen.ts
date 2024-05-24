import { Keypair } from "@solana/web3.js";
import base58 from "bs58";

//Generate a new keypair
//let kp = Keypair.generate()
//console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()} [${kp.secretKey}]`);

let kp = Keypair.fromSecretKey(base58.decode("5ofeAmudgyeY3i24P1nDy7nSekpMSnbJ7n8AYv9HMXE6crycj8wxaLksg4nwmLvzbyJes1NfMfa32e5Q5gu5qFhY"))
console.log(`You've generated a new Solana wallet: ${kp.publicKey.toBase58()} [${kp.secretKey}]`);

