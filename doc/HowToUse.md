## Preparation before deployment


## Get started(Operation)
1. Deploy the ERC4671 contract, providing the token name, symbol and baseURI.
2. The contract creator can mint new tokens by calling the mint(address owner) function and providing the address of the future owner of the token.
3. The contract creator can revoke tokens by calling the revoke(uint256 tokenId) function and providing the token's ID. Note that this function sets the token's valid property to false but doesn't remove the token from its owner.
4. Any user can check the number of tokens owned by an address by calling the balanceOf(address owner) function.
5. Any user can check the validity of a token by calling the isValid(uint256 tokenId) function.
6. To check the owner of a particular token, call the ownerOf(uint256 tokenId) function with the ID of the token.
7. The function hasValid(address owner) can be used to check if an address has any valid tokens.







