decryptor = () => {
    let plaintext = decrypt(document.getElementById("private").value , localStorage.getItem("N") , document.getElementById("cipher").value);
    document.getElementById("plain").value = plaintext;
}

decrypt = (d , n , message) => {
    plainmessage = Math.pow(message , d) % n;
    console.log(d)
    console.log(n)
    console.log(message)
    console.log(Math.pow(message,d));
    return plainmessage;
}