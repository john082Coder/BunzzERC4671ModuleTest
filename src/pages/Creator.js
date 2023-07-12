import { Button, Col, Container, Row, Form, Spinner } from "react-bootstrap";
import React, { useState,  } from "react";

import useBunzz from '../hooks/useBunzz';

import { getERC4671Contract, mint, revoke,   } from '../contracts/utils'
import { useWeb3React } from "@web3-react/core";

import { bnToDec, isAddress } from "../utils";
const Creator = () => {
    const bunzz = useBunzz();
    const { account} = useWeb3React();
    const ERC4671Contract = getERC4671Contract(bunzz);

    const [mintAddress, setMintAddress] = useState("");
    const [revokeTokenId, setRevokeTokenId] = useState(0);

    

    const [pendingMint, setPendingMint] = useState(false);
    const [pendingRevoke, setPendingRevoke] = useState(false);
    
  
  
   
    return (
        <Container>
            <Row className="justify-content-center mt-5">
                <Col lg="4" md="4" xs="12">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input  Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter address" value={mintAddress} onChange={(val) => setMintAddress(val.target.value)} />
                        </Form.Group>
                            {!pendingMint ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingMint(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await mint(
                                        ERC4671Contract,
                                        mintAddress,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingMint(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingMint(false);
                                    
                                }
                            }}>
                                Mint
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Mint
                            </Button>
                        }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Input TokenId</Form.Label>
                            <Form.Control type="email" placeholder="Enter token id" value={revokeTokenId} onChange={(val) => setRevokeTokenId(val.target.value)} />
                        </Form.Group>
                        {!pendingRevoke ?
                                <Button className="mx-3 mt-2" variant="dark" onClick={async () => {
                                    setPendingRevoke(true);
                                try {
                                    let txHash;
                                    
                                    txHash = await revoke(
                                        ERC4671Contract,
                                        revokeTokenId,
                                        account,
                                    );
                                
                                    console.log(txHash);
                                    setPendingRevoke(false);
                                    
                                } catch (e) {
                                    console.log(e);
                                    setPendingRevoke(false);
                                    
                                }
                            }}>
                                Revoke
                            </Button>
                            :
                            <Button className="mx-3 mt-2" variant="dark">
                                 <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                    />{` `} Revoke
                            </Button>
                        }
                        
                       
                
                    </Form>
                    
                   


                </Col>
            </Row>
        </Container>
    )
}

export default Creator;