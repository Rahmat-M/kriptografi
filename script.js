document.getElementById('encryptForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let plainText = document.getElementById('plainText').value;
    let key = document.getElementById('key').value;
    let sBoxLength = parseInt(document.getElementById('sBoxLength').value); 
    console.log("Plain Text:", plainText);
    console.log("Key:", key);
    let rc4Instance = RC4(key, sBoxLength); 
    let encryptedText = rc4Instance(plainText);
    console.log("Encrypted Text:", encryptedText);
    document.getElementById('encryptedText').innerText = "Encrypted Text: " + encryptedText;
});

document.getElementById('decryptForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let cipherText = document.getElementById('cipherText').value;
    let decryptionKey = document.getElementById('decryptionKey').value;
    let sBoxLength = parseInt(document.getElementById('sBoxLength').value); 
    console.log("Cipher Text:", cipherText);
    console.log("Decryption Key:", decryptionKey);
    let rc4Instance = RC4(decryptionKey, sBoxLength); 
    let decryptedText = rc4Instance(cipherText);
    console.log("Decrypted Text:", decryptedText);
    document.getElementById('decryptedText').innerText = "Decrypted Text: " + decryptedText;
});
