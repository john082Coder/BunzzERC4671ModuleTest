## About
> one line description ← What issue does this module solve?

A standard interface for non-tradable tokens, aka badges or souldbound NFTs.


## Features

The contract uses a struct called Token to hold the issuer, owner, and validity status of each token. Tokens are stored in a mapping from their unique ID to their Token struct. It also keeps track of each owner's tokens and their respective indexes in separate mappings. Moreover, the contract maintains a count of the total number of tokens and the total number of token holders. Functions are available for querying the balance of a particular address, owner of a specific token, whether a token is valid, and whether an owner has any valid tokens. The contract also supports minting and revoking tokens, both of which can only be performed by the contract creator. TokenURI is used for metadata handling.

## Use case

The ERC4671 contract provides features for token issuance, ownership tracking, token validity checking, and revocation of tokens


## Sample dApp
- github repo URL
    https://github.com/john082Coder/BunzzERC4671ModuleTest
- simple dapp URL
    https://bunzz-erc-4671-module-test.vercel.app/


---
## Review report
