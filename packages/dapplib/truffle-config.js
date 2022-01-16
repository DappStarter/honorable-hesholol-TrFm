require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net public grace opera bridge super'; 
let testAccounts = [
"0xa661930922ae67033f22fbe5352492ca7d3729473b6ffa0585f68280ad9365ef",
"0xda5875694ebcbef3d82c2ef645f3ac4bd750999c9750ebea3790e4bb36d6fa43",
"0x731fd2d00caee283db5d37c6995e7962553e8bbcafe96515c27381a176f1c37e",
"0x99704bdd16f2856d09b26f899a8892d20b2a8297046da51bf78757b8b306791d",
"0xcde2ac598e888174ac1ca6737d19bb7896b8fb335cb7d1b1cb898f0e2a0d3145",
"0x732d056b45d4bbdcaf037312985a5cb584a5c7e703fc19326fdc6f6fee58b5f5",
"0x156c0a62f58793746201247c7685640dcb1eb76120b333023251ec27c3191466",
"0x467fd74943b5db4c3779057f443b34336f2f7e55a985b3cce3780606e95e95dc",
"0x25aee29e2ee5e0b87625c66fbdf81602b922063d2d1e0350e75b6382a7cc6aa1",
"0x35925028d76f4b5d3fccb578f86efeffa2588b485fc88db1410a7deb6ae82852"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


