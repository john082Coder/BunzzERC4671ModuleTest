# WRITE(main)

## mint
Can only be called by the contract owner to mint new token. Needs to provide the address that will receive the NFT. Needs to provide a token ID for metadata

|Name|Type|Description|
|--- |---|---|
|owner|address|The address that will be the owner of the token|

## revoke
This function will be called by the owner to revoke token.

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The token id which will be revoked|




# READ(main)


## ownerOf
Returns the owner of the token specified by tokenId

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token you want to check its owner of|

## symbol
Retrieves token symbol

No arguments

## name
Retrieves token name

No arguments

## listings
Returns the listing info structure

|Name|Type|Description|
|--- |---|---|
|id|uint256|Listing id|



