const NodeRSA = require('node-rsa');

// Generate a new RSA key pair
const key = new NodeRSA({ b: 512 });
key.setOptions({ encryptionScheme: 'pkcs1_oaep' });

// Encrypt the data using the public key
const encrypted = (dataToEncrypt, keyIn) => {
  const publicKey = new NodeRSA(keyIn);
  publicKey.setOptions({ encryptionScheme: 'pkcs1_oaep' });
  return publicKey.encrypt(dataToEncrypt, 'base64');
}

// Decrypt the data using the private key
const decrypted = (dataToDecrypt, keyIn) => {
  const privarKey = new NodeRSA(keyIn);
  return privarKey.decrypt(dataToDecrypt, 'utf8');
}

module.exports = { encrypted, decrypted, key };
