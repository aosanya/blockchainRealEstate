var SimbaToken = artifacts.require('SimbaToken');

contract('TestERC721Mintable', accounts => {

    const account_1 = accounts[0];
    const account_2 = accounts[1];
    const account_3 = accounts[2];
    const account_4 = accounts[3];
    const account_5 = accounts[4];
    const account_6 = accounts[5];
    const account_7 = accounts[6];
    const account_8 = accounts[7];
    const account_9 = accounts[8];
    const account_10 = accounts[9];



    describe('match erc721 spec', function () {
        beforeEach(async function () {
            this.contract = await SimbaToken.new({from: account_1});
            // Do : mint multiple tokens
            await this.contract.mint(account_2, 1, {from: account_1})
            await this.contract.mint(account_3, 2, {from: account_1})
            await this.contract.mint(account_4, 3, {from: account_1})
            await this.contract.mint(account_5, 4, {from: account_1})
            await this.contract.mint(account_6, 5, {from: account_1})
            await this.contract.mint(account_6, 6, {from: account_1})
        })

        it('should have token details', async function () {
            let name = await this.contract.name();
            assert.equal(name, "Simba", 'Error: Token Name is Wrong')
            let symbol = await this.contract.symbol();
            assert.equal(symbol, "sma", 'Error: Symbol is Wrong')
            let baseTokenURI = await this.contract.baseTokenURI();
            assert.equal(baseTokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/", 'Error: Token baseTokenURI is Wrong')
        })

        it('should return total supply', async function () {
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 6, 'Error: Total Supply is wrong')
        })

        it('should get token balance', async function () {
            let balanceOf2 = await this.contract.balanceOf(account_2, {from: account_1})
            assert.equal(balanceOf2, 1, 'Error: Wrong balance for account 2')

            let balanceOf6 = await this.contract.balanceOf(account_6, {from: account_1})
            assert.equal(balanceOf6, 2, 'Error: Wrong balance for account 6')
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let tokenURI1 = await this.contract.tokenURI(1, {from: account_1})
            assert.equal(tokenURI1, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", 'Error: Wrong Token uri')

            let tokenURI2 = await this.contract.tokenURI(1, {from: account_1})
            assert.equal(tokenURI2, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", 'Error: Wrong Token uri')
        })

        it('should transfer token from one owner to another', async function () {
            await this.contract.transferFrom(account_2, account_3, 1, {from: account_2})
            let balanceOf2 = await this.contract.balanceOf(account_2, {from: account_1})
            assert.equal(balanceOf2, 0, 'Error: Wrong balance for account 2')

            let balanceOf3 = await this.contract.balanceOf(account_3, {from: account_1})
            assert.equal(balanceOf3, 2, 'Error: Wrong balance for account 3')
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await SimbaToken.new({from: account_1});
        })

        it('should fail when minting when address is not contract owner', async function () {
            try{
                await this.contract.mint(account_2, 1, {from: account_2})
            }
            catch (error){
                console.log(error.toString())
                assert.isTrue(error.toString().includes("revert Is not Owner"), "Unexpected throw recieved")
                return
            }
        })

        it('should return contract owner', async function () {
            let owner = await this.contract.owner({from: account_1})
            assert.equal(owner, account_1, 'Error: Not account owner')
        })

    });
})