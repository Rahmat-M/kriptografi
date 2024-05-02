function RC4(key) {
    let s = [];
    let k = [];
    let keyLength = key.length;
    for (let i = 0; i < 256; i++) {
        s[i] = i;
        k[i] = key.charCodeAt(i % keyLength);
    }
    let j = 0;
    for (let i = 0; i < 256; i++) {
        j = (j + s[i] + k[i]) % 256;
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }

    return function(data) {
        let i = 0;
        let j = 0;
        let cipher = '';
        for (let x = 0; x < data.length; x++) {
            i = (i + 1) % 256;
            j = (j + s[i]) % 256;
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            let keyIndex = (s[i] + s[j]) % 256;
            let xor = s[keyIndex];
            cipher += String.fromCharCode(xor ^ data.charCodeAt(x));
        }
        return cipher;
    };
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = RC4;
}
