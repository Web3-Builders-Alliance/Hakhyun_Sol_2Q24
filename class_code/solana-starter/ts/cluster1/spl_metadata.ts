import wallet from "../wba-wallet.json"
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults"
import { 
    createMetadataAccountV3, 
    CreateMetadataAccountV3InstructionAccounts, 
    CreateMetadataAccountV3InstructionArgs,
    DataV2Args
} from "@metaplex-foundation/mpl-token-metadata";
import { createSignerFromKeypair, signerIdentity, publicKey } from "@metaplex-foundation/umi";
import base58 from "bs58";

// Define our Mint address
const mint = publicKey("LnXVRKFGeHkmuT5EChL7z9tuoCBUEGp2mLzURCBNBeZ")

// Create a UMI connection
const umi = createUmi('https://api.devnet.solana.com');
const keypair = umi.eddsa.createKeypairFromSecretKey(new Uint8Array(wallet));
const signer = createSignerFromKeypair(umi, keypair);
umi.use(signerIdentity(createSignerFromKeypair(umi, keypair)));

(async () => {
    try {
        // Start here
        //const metadata = PublicKey.findProgramAddressSync()
        let accounts: CreateMetadataAccountV3InstructionAccounts = {
            mint: mint,
            mintAuthority: signer,
            payer: signer,
            updateAuthority: signer
        };

        let data: DataV2Args = {
            name: "hh token",
            symbol: "hh",
            uri: "",
            sellerFeeBasisPoints: 100,
            creators: [{ address: keypair.publicKey, verified: true, share: 100 }],
            collection: null,
            uses: null
        };

        let args: CreateMetadataAccountV3InstructionArgs = {
            data,
            isMutable: true,
            collectionDetails: null
            };

        let tx = createMetadataAccountV3(
             umi,
             {...accounts, ...args
             }
         )

        let result = (await tx.sendAndConfirm(umi));
        console.log( base58.encode(result.signature));
    } catch(e) {
        console.error(`Oops, something went wrong: ${e}`)
    }
})();