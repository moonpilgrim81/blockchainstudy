//blockchain utility 

//hash for block
const SHA256 = require('crypto-js/sha256');

//eclliptic module will help to generate new keys
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

//generate unique ID
const uuidV1 = require('uuid/V1');


class ChainUtil {
    static genKeyPair(){
        return ec.genKeyPair();
    }

    //generate uninque ID for transaction
    static genTranId(){
        return uuidV1();
    }

    static hash(data) {
        return SHA256(JSON.stringify(data)).toString();
    }
    //verify transaction siginature with publickey
    static verfiySignature(publicKey, signature, dataHash){
        return ec.keyFromPublic(publicKey, 'hex').verify(dataHash,signature);
    }

}


module.exports = ChainUtil;
