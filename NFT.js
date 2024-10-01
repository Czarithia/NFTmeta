// Create an array to hold your NFTs
let nftCollection = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata,
// and store it in the array above.
function mintNFT(name, description, rarity) {
    const nft = {
        name: name,
        description: description,
        rarity: rarity
    };
    nftCollection.push(nft);
    console.log("Minted NFT: " + name);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Rarity: " + nft.rarity);
        console.log("----------------------");
    });
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs Minted: " + nftCollection.length);
}

// Call your functions below this line
mintNFT("CryptoKitty", "A rare cat", "Rare");
mintNFT("CryptoPunk", "A pixel punk style character", "Legendary");
mintNFT("BoredApe", "An ape that is bored with glasses", "Epic");
listNFTs();
getTotalSupply();
