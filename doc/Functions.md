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

## tokenByIndex
Return the token index based on user balance

|Name|Type|Description|
|--- |---|---|
|index|uint256|The index of the token|

## tokenOfOwnerByIndex
Returns all the tokens owned by an address and given index

|Name|Type|Description|
|--- |---|---|
|owner|address|The token owner|
|index|uint256|The index of the token|

## tokenURI
Returns the uri of the metadata

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|

## supportsInterface
Returns a boolean that tells us if the contract supports royalties

|Name|Type|Description|
|--- |---|---|
|interfaceId|bytes4|The id of the interface|

## isValid
Returns the validation status of the token

|Name|Type|Description|
|--- |---|---|
|tokenId|uint256|The id of the token|

## holdersCount
Returns the number of holders

No arguments

## hasValid
Returns the validation status of the account

|Name|Type|Description|
|--- |---|---|
|owner|address|The address of the account which you are going to check the validation|

## emittedCount
Returns the total minted number

No arguments











