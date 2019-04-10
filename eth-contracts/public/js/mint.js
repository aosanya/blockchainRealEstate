function mint(){
    let account_1 = "0xb60ab9d5372C64f5f9056BA95Bb8AB93e036b4DD";
    let account_2 = "0xb4C7F8e169E134A984B9274b791fAda1C27d5691";
    let account_3 = web3.eth.accounts[2];
    let account_4 = web3.eth.accounts[3];
    let account_5 = web3.eth.accounts[4];

    var tx = solnSquareVerifier.proveAndMint(
        account_2,
        1,
        ["0x2afb699d0932bf1e5847ffc61bab41a850dba2b677dea4c7592f138a72b63e51", "0x4e4950aeb036b5a411deafd3780fa0c99d207f86738aa5cfc9a092eb506ca9f"],
        ["0x199ed11257b8ce53bf9b4e532454739248169b19bd1d4fe97916766d11e32b97", "0x24bbb9dbec3b097cd5674ee91bebe5a2a74f90935334cc072d2e3c2684186ac9"],
        [["0x2ea094b6ebc10f5b8d147fc56fbbc55e79b1c318777c08476f82b196d0cb6cb0", "0x28fb32244281051384b939ef853b011b2ee6b6327654b195c1470d14ac35f8ca"],["0x1ba40b23d5f85ff6f6ee1aecfa5369317ed772e8c1957eaf4fb4160f34814966", "0x30862d90292e68fef82df9450f68a5415a8c0e698d3b9e0bace5a839cabcf03"]],
        ["0x13b640b32806c0e6cc6004234479126da546eee932efaa05dda272e14ff2bd5f", "0x1af86936ae79949dc8b1dc02803ca335d4e187706b0375c30c669b4367a43821"],
        ["0x29e8d45708cb2512185d2817f1c9639055f9aeecd953c30d392394dc2ca8ae87", "0x1f5e226d99d98459a5d7b300a5222e86e7f123b0ac459c5bc3339138b5fe3967"],
        ["0xce54ff0cc77ed89037c0c995f8b0781ce1a6db0dce5ce7a7cfae76eeceaacd5", "0x19873bbceb71065e1d3f8f792f657f86172688d371b0ed502b593f3953777209"],
        ["0xb28f0322bc73ad40801f1f31cac9b151aaa6cf5bf5cb22c05e5fd0ab2d33a4e", "0x22705846c190e4cfdcd4d50d71fb6cea6d852b6d85779e3a8903621fcc49692a"],
        ["0x5b63428a5239722f33c6534c015e43296de011ebbe29f2185c345f63db7f3ea", "0x213fd40e65fc24cd6bc1af61afe08fc351d692035581314616b1b098a7178f1d"],
        [9,1], {from : account_1}, function(error, result){
        if(!error)
            console.log(JSON.stringify(result));
        else
            console.error(error);
        })
    }