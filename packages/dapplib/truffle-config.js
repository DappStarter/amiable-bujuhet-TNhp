require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hero flame shadow shock note mean pull install drip fringe gift'; 
let testAccounts = [
"0x66132f86c3adbaeb3da326789f72b38f95dfa388c4280b78fe1654fe29a3e8e4",
"0xc77a7419304a539bde89347aad585c6247431de58d7342f415cd36b698e8dc30",
"0xfa28eb01d306a5afd208162eba2bebfe38beef9fd1f87a991bbbdb24c17c1648",
"0x9ec3d61081e8f79b00f1045818e8073f00504fa89355e6da4b719194948d4ed2",
"0xe35e7643a370bb27f6b4abf114895fe4e63a5e36e116afb489a34dfcfb6d1f64",
"0x2d067563efcc7108fa0cfc369ef6b4406a74855cafbe16d657151fca52cde2a6",
"0xee33167378eac27719b1c4595c3d1f741b325c1610059c4624a951a43463afc3",
"0xcf16d5dbe2178481278df5c4815f39b09a6796daef046a61a3c7d551434153a5",
"0x0fdaffb76eb4ba70ad1db60b72bad3d7d68b3768f1c13f4bf3192f788f39199a",
"0xb0001f58643a938eb2ba37fafab5925b60a3445795e011b320d4b132af9fdba9"
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


