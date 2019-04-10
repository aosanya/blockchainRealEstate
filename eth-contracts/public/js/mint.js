function mint(){
    let account_1 = "0xb60ab9d5372C64f5f9056BA95Bb8AB93e036b4DD";
    let account_2 = "0xb4C7F8e169E134A984B9274b791fAda1C27d5691";
    let account_3 = web3.eth.accounts[2];
    let account_4 = web3.eth.accounts[3];
    let account_5 = web3.eth.accounts[4];

   var tx1 = solnSquareVerifier.proveAndMint(
    account_2,
    3,
    ["0x203cd13fb85da88b9043be613b0769a52e5762d65f5fc824c88fc284a129de82", "0x2228088f1355720784a965c9958f77ad99a680449253cd59eb238fbecbda4681"],
    ["0x1c76b43005aa5f2e2010b64961d34340847da293eff595e391b1fb7af96df5e", "0x17193ab8a70cc7f8d18474130ef4c70899e02888c591a5437e1772bc858ecacd"],
    [["0x4bf30d8605d2925c75f0b805c7851e28eda0465881998a9f48e6e65fb694d02", "0x19bede0608c65b658b4cda78a5be619c77c2d34126bc58b3c9a32b23c772ce26"], ["0x3c4c8e2d528a177a5254e8d75d674c48c49d363de8cc6937da775a8cf03df57", "0x223db98f53a7d7bf8afcd4e0538014931cf59d83cc80302ccb3adaddbed61cf1"]],
    ["0x21b251c305a22751f51d8f4c2733b9e854418934d6c56c599bf182196f9ac163", "0x247a41496099fcf2c5b6c98a2b987b3f2381cf8d8526fb7d9b6d10252bd3322c"],
    ["0x2a8b55a30df18dd6f7abd890035901ceaade0a38986a89b0ee5b5d419a6fa461", "0x22a8f7c9ffbbcca4ddfb2a588791617ee57f0b2b3b54306dd3a47274d4c0858f"],
    ["0x2001f09c6413f5d8101d195cb8e435d360c1a8dcaec826ff992966909993d85a", "0x248fbfd26028ad703608920b280552fe43b6f21fd151ac6f73b6b46823a5ce81"],
    ["0x8f32e652dd0485008a907411c2b8e797ef8183f4115dc4c7c3140a66df42e06", "0x1ec3b9343d00a640671c9e62c2b8d28ad0556db863309defe75ab3158f794e3b"],
    ["0x174d300b7f415db723b3146667d024bc21e4937bf28794b1036aa01044e5fa09", "0xc3347fdae977e5360366afecd3f87f0fe33555d11e9309cfaa4b99839f221ca"],
    [1,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    var tx2 = solnSquareVerifier.proveAndMint(
    account_2,
    2,
    ["0x1dc04c3b4eb2587d9d8ad6c60105c49b1c74610c8c87c941e248e6871dfe60b0", "0x13bacb8ce97b8a432bab9b7da170096ea9249d5f0a9e00f070fba5e91d65e290"],
    ["0x22c1676d99b348140c276aa655c7b335d189dd53922d4b457b1f201011442792", "0x26ab0b9f3871b71cbd55b78df9fba4c34432d028be27129cb06754bc5ebfcdf"],
    [["0x1ecd25a92b029676f3b7aa622946305c4178d08bf618c8e4bc11d49943da0948", "0x2352301bcc5ba76e8256e498b16028f38dcaa8aa7d1b16f7397be2cee50aa280"], ["0x25e87deda75eb0585d1f847d2c36a28ad0d6fcfcd22f4445884c25d463e5c117", "0x234c2b05fd265b9ecb82603ec2b0354c3bae3dbb56e2b20bafcc5a9d0e93913d"]],
    ["0x1f332ee002d0c60779e3ee2469d1dfe3ff4f6c77ff2fba78c150ce0a55e59a3c", "0x2de195294fde1d2454dd788df833bfe492c3c22728f2abdde1360b168966eee9"],
    ["0xf6cd2aceb5cab22997227579b81278f48c80758062d50365a6b93e8f0659816", "0x2b6c2f02c93a968ca6d28708bc9900710e557e134554da344f5bf30208f1b027"],
    ["0x21fad69f44824011bc555209d160d712eca0df0004bfd1f5aa89d4128aef44e1", "0x1ba8f75e8e33196f13b788ffb0b0927236aebc76a66363352b4f1994544a86d9"],
    ["0xc88a47edd0679d5814a38b445f5963528876be71fcd9ba1aa8510d3f5b8cb92", "0x12580301075ea85487eaf930679b4e642bd552947f80d6a752b4707ea6ad568"],
    ["0x2e9a894988854c25c1762cdcfe06d65af9cabfe8c8dc0d710473ccda0a6e042c", "0x1b9410e7e97a5e26f8c851931fab86e6098b73359f633ff4441b45921dff0a1a"],
    [4,1], {from : account_1}, function(error, result){
        if(!error)
            console.log(JSON.stringify(result));
        else
            console.error(error);
        })

    // var tx3 = solnSquareVerifier.proveAndMint(
    // account_2,
    // 1,
    // ["0x2afb699d0932bf1e5847ffc61bab41a850dba2b677dea4c7592f138a72b63e51", "0x4e4950aeb036b5a411deafd3780fa0c99d207f86738aa5cfc9a092eb506ca9f"],
    // ["0x199ed11257b8ce53bf9b4e532454739248169b19bd1d4fe97916766d11e32b97", "0x24bbb9dbec3b097cd5674ee91bebe5a2a74f90935334cc072d2e3c2684186ac9"],
    // [["0x2ea094b6ebc10f5b8d147fc56fbbc55e79b1c318777c08476f82b196d0cb6cb0", "0x28fb32244281051384b939ef853b011b2ee6b6327654b195c1470d14ac35f8ca"], ["0x1ba40b23d5f85ff6f6ee1aecfa5369317ed772e8c1957eaf4fb4160f34814966", "0x30862d90292e68fef82df9450f68a5415a8c0e698d3b9e0bace5a839cabcf03"]],
    // ["0x13b640b32806c0e6cc6004234479126da546eee932efaa05dda272e14ff2bd5f", "0x1af86936ae79949dc8b1dc02803ca335d4e187706b0375c30c669b4367a43821"],
    // ["0x29e8d45708cb2512185d2817f1c9639055f9aeecd953c30d392394dc2ca8ae87", "0x1f5e226d99d98459a5d7b300a5222e86e7f123b0ac459c5bc3339138b5fe3967"],
    // ["0xce54ff0cc77ed89037c0c995f8b0781ce1a6db0dce5ce7a7cfae76eeceaacd5", "0x19873bbceb71065e1d3f8f792f657f86172688d371b0ed502b593f3953777209"],
    // ["0xb28f0322bc73ad40801f1f31cac9b151aaa6cf5bf5cb22c05e5fd0ab2d33a4e", "0x22705846c190e4cfdcd4d50d71fb6cea6d852b6d85779e3a8903621fcc49692a"],
    // ["0x5b63428a5239722f33c6534c015e43296de011ebbe29f2185c345f63db7f3ea", "0x213fd40e65fc24cd6bc1af61afe08fc351d692035581314616b1b098a7178f1d"]
    // [9,1], {from : account_1}, function(error, result){
    //     if(!error)
    //         console.log(JSON.stringify(result));
    //     else
    //         console.error(error);
    //     })

    var tx4 = solnSquareVerifier.proveAndMint(
    account_2,
    4,
    ["0x5e312fcbb6429a6f0c6006ecd736ca22e8ea062ae1899c945479c4fcecc1a8c", "0x1a06a5e9b92636b252808424a4941fc401fc5fe44941c509aceb30cf34120749"],
    ["0x1f61523fc826f74e3b1ec0e2d1852ae117568792d0524e77aea4eb1d61feef76", "0x10127d57ee13b725a4395816eddff765a4769822970c6770ad6152911fd253b0"],
    [["0xc7c4ae54514c0e3f38a15178f1b85cec5aaf6c241d17726f33de7620759aab1", "0x5fb17a702e94941986cd640e628bf19f09681cf48135a7661fcae432b2b252f"], ["0x2542561452405088b39a7273bd72b5008e833984eae9c54358b46289cd7c2e20", "0x21f25d37b906b04fa1c733510c71d0a31daca05f26a715fd13033da62b38d57a"]],
    ["0x23c4dfd92eff3c5d54481713f0af99f27333ef1d1321045f31b9ddebd58a7ade", "0x244f9da2d89150915bae9683c0e656980e00326503e302392bd5200e157da608"],
    ["0xa62107e77a441b24f67c9ede0364c0c1e7d5c91a8addbe16978512a31126d59", "0x1e8142bf35444d1086cc7d9260dc14c65f08185ee2348cf095c05d70d906cbb7"],
    ["0x252eb40e5222783757d8728d57ffa725261564af981bb07e42097dc936eafd4f", "0x27071f438568e96da918538d7c1e665895003ec4b52094e2952629d5c2c73bc1"],
    ["0x18940b0f54780bc76dcea556862a06cb98d134e97b1b4f7ccd9579f07797df5c", "0x269afe036c125a88a9d464f00691870c79eb85722d840b6c52c00f2af590e0d3"],
    ["0xe70628e88c562abdecab747a99bcc88784640749168b7a3104bf78d9b2b5eb3", "0x11285ddb8ea4d3b1b26489f6a183ae04247d7417487f449a14499bf3d71c497d"],
    [16,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    var tx5 = solnSquareVerifier.proveAndMint(
    account_2,
    5,
    ["0x12e24874854e4c2b4f44a7ba8df793c817d4d1fa2d189a8598b0925458c0861b", "0x6b8f0ede90d3088a1f89b7c2ab9670aa16b24b95662f9560682605079eefd20"],
    ["0x1c1db94c722c0865644f3862a2f7e0445b83dc16485c7b94c9fe53de1af102cd", "0x16826f913d63078ef520b5339aabdc4696f675c21cee19918e3ae5dc7e551eab"],
    [["0xf88b6c9f959b430e008a6787258d2ba5f33b2f87f46e5b1e4f7a792549b1bae", "0x1967297c3dbbc8a54f91dc87fbcaf165b7db6869a97244959ec802bb4fbd8aa7"], ["0x3ced57ec678c15877fdb7c7d178cf1e413ae52f7e4f08a4cdcafec941cb8031", "0xb57bbda8630cfe42c2cfab6d546139e9226b8e2bec5dbb90c2a704cd2fa9b75"]],
    ["0xcebb6360d9e650ced61d2a8668934721a0cbc6deb5ec24aa6b1c9d7715e5e7f", "0x1bf323e450a8adfc5c8e7c935384d01f2cc552dab6ed06618644920db0f3b595"],
    ["0x2c5082ea11b048bfd09c7bbaa4115bcdac8ea58aee52d6c52fedeb0d5344cc9b", "0x2534b12550bc722bcd4277c22807a12e46a57716ec28f1dd3d7788eb7394bb1c"],
    ["0xb739987080ab92ee8220d19f8584611de17c3453b4e072910ba37bdbc48a6e7", "0x31679dbce412e329a9c4219b8f5865259b36c6524c1473cc90ee9d9ee245454"],
    ["0x259f296a095a4e95bab7a5acfc072073d430af062abbf1f24a5385f7ca27b303", "0x16ad8bf37af6cef7d82db78a9e2060c2b16cdc79e63f708ce07fae03abbe67c8"],
    ["0xa423a6fd5328400a398aef4081b434ba73fb2867904f59569543921c050a435", "0x2d0e360b1b8310c70ea38ce036b419dadfd509d331906a65d6953467172ccc75"],
    [25,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    var tx6 = solnSquareVerifier.proveAndMint(
    account_2,
    6,
    ["0x2fe3c642b88c5ee00f25d0ed671264a3ca4b4a7f8b377dadcc9d976f00acd5b0", "0x2d76e81161282fff2146411aa25158d290e9ded4afcda05b65129883ab1fc07d"],
    ["0x1bc9e6493c4505f9b15e4c42ad94aad31fade502c0519e4f4b1bc1a503f7d776", "0x1d48654038e1ca037e0cb15ec67f00a7db3137bf1edab74c004d817d8f2b6d83"],
    [["0x6bf48216d91360548f4eb6afb728ee17fa58ee54988018423cf42cb0109883e", "0x1f67457d9753511d520c092001c246a1e7af6dbf6490ddc6274f1416d3bd7d13"], ["0x1ce53d9e1ec1473bb19f4596392e94c90b3a4916c016e8a87111757c6b340e9", "0x1f9ab3f6d1b8d2874b35920191d6cbb5f91cb3be83f4e93e8de07c057bde38cf"]],
    ["0x115241954450a00be6370653cb9470fff33205716de61c49be59b30673567054", "0x29ee8fcef9773df37280b50bb1cbada7b48422c7144756138fca894cfb9e4874"],
    ["0xa94751d3516e1cc7796afd8c22f75538208e8bb3d661fcd82e9eac3bdcc3193", "0x9c8757182126c21120852ce14e2bb126e9ec7621692ddb486477dce31422a5b"],
    ["0x26cd836ef0406cd12b8d56e10ea734195e4265de97a350269b93b6ed9b2a173c", "0x24d21b24d36d6c88cb08410bc38d9da2e7b16d015fda05193d5befb40c1cb34a"],
    ["0x18357956bfc79978d7af1d2bd2472f617041477036d3a7fb2a7424e0bad60f6f", "0x2910ddd3b7ccaecdc09a007f74e58cd0bc35b88e553e2bb8b48ef3882ac5fe68"],
    ["0xdd62ae162c7621e5d85ae4446962e5a7412d08bc5080f7ab701e6956e9c3fb7", "0x25d12f058e927c73a0d6ab99b64b408d1851e3b557554c5e0719c37b171712cb"],
    [36,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    var tx7 = solnSquareVerifier.proveAndMint(
    account_2,
    7,
    ["0x88f3a4c80fe50a12124134c2ea8073c665af1f78f2ab99ebf2ab9a30922a129", "0x85e6b29deb472642b46c85b7ca34bb2ed9103b17480589ba98437cf496b82c5"],
    ["0xf40382b66fc76a11a16bc570fcf80da88ee070c504c8324f36a8c36e84af415", "0x222c023b59f2783e01ff21a8511477d7b7029fe62edc3dba1c3e243d07098d20"],
    [["0xa1a1f3ca8912ecea4cbf7501d01048fa8ce529ddacbe4d0a348ce38747f1569", "0x2bf6d256e1f7a21776320cc7b3cf8abf49193ff2e777c50878eac9b6d2368447"], ["0x13b3530f524dda41ef946c7159f0339e812e658fde7d90bc1e5760e7866d8350", "0x250d44421cd7bb3e14a624cabb66dc3b9fc00030dec50178b0d61efcfc1a9cda"]],
    ["0x91ac101bcea6bc6830a9678e1feedf3baf6f387761a0bd8b33f34cd1f04f8f", "0xa87b2df1c294356d9450e593033f051c15f8c4c04e4668246669bff8701b21c"],
    ["0x26be50ca5bfe581bfbe6cb8bff5712ab4242e9001319f8c7e3f0733f01002a8f", "0x17fbffaf5dc0d1a5344d44d0860e8f6635922bf2d2126aff2061ae6ffa77d499"],
    ["0x225528c12e3524b07abb618d01f8bbedceb8e9e1057f9e3ee002c280a9533f", "0xc0853d684c6aa42f4fcbcf5d91af55dd3d9188605b89876da024e791356dacd"],
    ["0x2f1d32dc154258a8bcadf3fadd63750964fc3d93400016566cab16a09f0415cd", "0x1d4d407bbe6ff82b4e319998baa87e135aa78291375b214e2a539d18c882f580"],
    ["0x21363df2e05e629849383e931cd74f704810beaf62db96cd378c15e65206094a", "0x1e4bf12bf22edf271f05e15b5e402619d360862ae0f994564607faf0d2745f1b"],
    [49,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    var tx8 = solnSquareVerifier.proveAndMint(
    account_2,
    8,
    ["0xaef9169acb03324bb4a67fac82574691b3f3c6ba1974adf852c78f9879f8da8", "0xe100d83d17289c434f825cab23ba2570bd1d8583937d2ab76c421f666a246d4"],
    ["0x4d0a1e4b59ed7b65fd02ff11f0956b5af9baa2e8bdadff3ef0435153a598186", "0x24b16184ac96d5bea8c2a441a47d7fc4bff56515c6933413b213b658567c9bea"],
    [["0x28ff81d6730e24683ac3ce766ef8630040221f04eba733a1321bf292115889e0", "0x15732909a62cae64ad5cc237297ab525dd0907f830fd782a5e46cb9a5dd0661c"], ["0x2a74bb9ba3fee55b1a468eeead8090f07317cdb3114a44bcc1c613accdf24bbc", "0x2621edb5564e9ff9c647d220ca3673e2a9dff358bcc00588102d37fc7aa7ca90"]],
    ["0x12b7035cc907a67227f34747c4db038095a386a57a4b407b75f873f9e0890f7e", "0x134367a5b9b7d0c73c657775d3607e5a5fe42d5a73ce0afe56ca6f6ea9c5d6e"],
    ["0x17198736129d6feda433cb52b31ebacd44cd62d8eba56b51fec01c3668ab7d6a", "0x21a47f86b0e9154bb685f2618fffe26ab8c8ed1c1a4ff526271eae2975e5d5cb"],
    ["0x9e2ab3685e1d2ddde5ce89b7a49e42e43ab003c8c0849191add82cb250f071b", "0x2bb42e241788dff33a5b8d486f6f0cce5f625af74362a18dbbc1ebad45313db"],
    ["0x2d80f5565b0da89cbf778a52aa38d9d7359d7c3c3fd551325f154bdd5f881626", "0x2cedc0ec1bdd71fd50059249ac04d01b55d7014b9423f6c8f328d939b5e659ea"],
    ["0x2c32b6f5c2cb440dd92e08d60fdd4bc19f5facf2e29bc3f886da4ed9d1349911", "0x215eb102c3000d58b3f0fd461589e85dc604cde73ee95b8d3aa72368a53a8d83"],
    [64,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    var tx9 = solnSquareVerifier.proveAndMint(
    account_2,
    9,
    ["0x21056d2c26474aa626859309c45d4e03b5ab0effad791a4e6ef72c2948031c39", "0x19a694b0ab79541e3ac9cacf907ad16e92933fb1e1dcd7626a952a8a9df50c7c"],
    ["0x1b391c4c3f02ab3e641a198878ac6653b18c6c99773f7942884fbd23fbd1c85f", "0x15c188587e1263249e788f481b8a81a6cf3c86285b818f93dbb9fee289001101"],
    [["0x29f40bc0ee292eaee9cf7e59f233b0bc87cc456984a4f375bca45e8d60819923", "0xd58090168df4db5283d9fd452d9f67001fde2dc6331c020bc7ecdfa32d8f7ae"], ["0x18928479a52f01ff2a9e68409b25eb817f7a4069629af52e3e05075ed66eec84", "0x21e0a5f866e8464b1d2252254f1be13436fb60e75c1a58ef43f2f389dad714a2"]],
    ["0x9bc8eff264921cf64f57be5ad846b2037aa520524cf16f9f5ec03bca5be3f17", "0x13dadc24f0b85af0b96d8e08703a067fdc336fd6e0f4640acae60516618757bd"],
    ["0x464e3eccbc8a0d932315967fbfd5e0475aca6275385f3cca9c06b655ee8464b", "0x1a2408d34a0e72bcf1ddc0ee37f9d6f15bcbc7eb7d1b11c3ea228f58abd44994"],
    ["0x6921ec562548e45a893ea1bebf4d170f1e40b6b7aba96d70051190bc510e8f4", "0x1f7ae4ae13cfaa95ac217284a6908bba9e11041cf56725221aafb63b18106242"],
    ["0x4181abd75b1b3e0ea020f3533a743ef9cc285a19cf410587650630ac8a2a6f6", "0x1f8cce2cbae68fd7ba5c32c7d4526e514d6d55e0c5b0c06985161a1a2f74effd"],
    ["0x191b1ff233c1a0c169b6763d31358d6580fcc796a1a4f7511951c664e8418081", "0x16fc36ee1f6911e4b46b5889502df3e8f71e382616291a9932c4558b88a3eae8"],
    [81,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    var tx10 = solnSquareVerifier.proveAndMint(
    account_2,
    10,
    ["0x2a53512e8e07bc863820292728529e60b2f024dbd336d0b826d40029fd32b1f1", "0xc94b205b1768b8932a0e93c683b3413e98da03fa604f242490ac84e4d0d73de"],
    ["0xd529c3edc5fae8d05fe8b70469edcc32655a8a3550b7006ce28086644fca45d", "0x2e145ceeb281ce161ef721cceea328785083c1cc3c87933a12e8de31d8b3e45c"],
    [["0x2d48f9327667da3e09233b68b6039b4fa65db18f30582f3fc52029da0e737f0e", "0x82806aa27593e467ab70333b3d1ef18133fe95bfe21bf01f7ce90606fb8c8b3"], ["0x2db2c7cd1fac967ac210fbb8be599d00e7a13f5b5bc5c340b8537736db72e2e5", "0x229d418a8575bd88f94d38322ac338f16bc776f787f9bb3fc5b75684c341bd6d"]],
    ["0x28ce033000677c31ac189fb60af6fa5af60b78cce631c106b3c642efb032b4a1", "0x281f884cec885b05baa4a3317f6286e606f455ae7082d15a7c9e677a422c659a"],
    ["0xe03ccaba105e8aac9534c3691fa3aad3dcb72da6c9a3b193112d29f2b0c8959", "0x19d5d885f2cbce0b10027e73bacbe316149ddfd534469089e223745936818726"],
    ["0xe0adf90b0dd309e09061a00e545eeb928a9dd0a1731e2ca01ddf23b051d660b", "0x1eb90fe7993e190e44cea61ed5cc33a92b1005452d22a89ce73c55ed1d2a16d6"],
    ["0x1647c3274034e80bf2e37d047f153a94fb9d5fa540edc16d664a2e721947648a", "0x22e9d064ad5c276ae20da3502fb91ace5f83f7bb1655ed7fb42b8d5361a0ca4d"],
    ["0xe137ce6d7a1639e179f69cfbaba748e20de4bf10525082e739881ceb9e85f56", "0x1975487260eebd8f5567bd55c0e9c2bb11439215946d897efd54c6f199c13edd"],
    [100,1], {from : account_1}, function(error, result){
    if(!error)
        console.log(JSON.stringify(result));
    else
        console.error(error);
    })

    }