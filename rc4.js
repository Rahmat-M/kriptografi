function RC4(key, sBoxLength) {
    let s = [];
    let k = [];
    let keyLength = key.length;
    for (let i = 0; i < sBoxLength; i++) {
        s[i] = i;
        k[i] = key.charCodeAt(i % keyLength);
    }
    let j = 0;
    for (let i = 0; i < sBoxLength; i++) {
        j = (j + s[i] + k[i]) % sBoxLength;
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    return function(data) {
        let i = 0;
        let j = 0;
        let cipher = '';
        for (let x = 0; x < data.length; x++) {
            i = (i + 1) % sBoxLength;
            j = (j + s[i]) % sBoxLength;
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            let keyIndex = (s[i] + s[j]) % sBoxLength;
            let xor = s[keyIndex];
            cipher += String.fromCharCode(xor ^ data.charCodeAt(x));
        }
        return cipher;
    };
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = RC4;
}
