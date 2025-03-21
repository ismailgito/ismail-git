//another from offcial NodeDocumentation
import hashingAlgorithm from "node:crypto"
const hash = hashingAlgorithm.createHash("SHA256");
//Two methods for creating cryptoHasing
//1.hash.update()
//2.hash.digest("hex")
//3.hash.copy
var hUpdate=hash.update("ismail loves aasia");
var data2=hash.update("ismail is web3 devoloper")
var hCopy=hUpdate.copy();
var hDigest=hCopy.digest('hex');
    console.log(hDigest);
    console.log(data2.copy().digest('hex'));
