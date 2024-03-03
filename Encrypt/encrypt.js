encryptor = () => {
    let ciphertext = encrypt(document.getElementById("public").value , localStorage.getItem("N") , document.getElementById("plain").value);
    document.getElementById("cipher").value = ciphertext;
}

encrypt = (e , n , message) => {
    console.log(e)
    console.log(n)
    console.log(message)
    ciphermessage = Math.pow(message , e) % n;
    return ciphermessage;
}