pragma solidity ^0.5.2;
import "./ERC721Mintable.sol";
import "./verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>

// DO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is SimbaToken {
    Verifier verifier;

    // DO define a solutions struct that can hold an index & an address
    struct Solution {
        uint    index;
        address solver;
        bool    exists;
    }

    // DO define a mapping to store unique solutions submitted
    mapping (bytes32 => Solution) Solutions;

    // DO  Create an event to emit when a solution is added
    event AddedSolution(uint Index);

    // DO Create a function to add the solutions to the array and emit the event
    function AddSolution(uint index) internal{
       //solutions.push(Solution(index, msg.sender));
    }

     constructor
    ()
    public
    {
        verifier = new Verifier();
    }

    // DO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function proveAndMint(
            address to,
            uint256 tokenId,
            uint[2] memory a,
            uint[2] memory a_p,
            uint[2][2] memory b,
            uint[2] memory b_p,
            uint[2] memory c,
            uint[2] memory c_p,
            uint[2] memory h,
            uint[2] memory k,
            uint[2] memory input)
        public onlyOwner returns (bool){

        require (verifier.verifyTx(
            a,
            a_p,
            b,
            b_p,
            c,
            c_p,
            h,
            k,
            input
        ) == true, "ERROR_UNABLE_TO_VERFY_TOKEN");

        bytes32 solutionHash_ = getSolutionHash(
            a,
            a_p,
            b,
            b_p,
            c,
            c_p,
            h,
            k,
            input);

        Solution storage solution_ = Solutions[solutionHash_];

        require(solution_.exists == false, "TOKEN_ALREADY_EXISTS");
        solution_.index = input[0];
        solution_.solver = msg.sender;
        solution_.exists = true;
        super._mint(to, tokenId);
        return true;
    }

    function getSolutionHash
    (
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
    )
    internal
    returns(bytes32)
    {
        bytes32 aHash = keccak256(abi.encodePacked(a[0], a[1]));
        bytes32 a_pHash = keccak256(abi.encodePacked(a_p[0], a_p[1]));
        bytes32 bHash = keccak256(abi.encodePacked([b[0][0], b[0][1]], [b[1][0], b[1][1]]));
        bytes32 b_pHash = keccak256(abi.encodePacked(b_p[0], b_p[1]));
        bytes32 cHash = keccak256(abi.encodePacked(c[0], c[1]));
        bytes32 c_pHash = keccak256(abi.encodePacked(c_p[0], c_p[1]));
        bytes32 hHash = keccak256(abi.encodePacked(h[0], h[1]));
        bytes32 kHash = keccak256(abi.encodePacked(k[0], k[1]));
        bytes32 inputHash = keccak256(abi.encodePacked(input[0], input[1]));

        return keccak256(abi.encodePacked(
            aHash, a_pHash, bHash, cHash, c_pHash, hHash, kHash, inputHash
        ));
    }
}

























