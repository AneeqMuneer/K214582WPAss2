let N;

const readonlyfield = () => {
    document.getElementById("public").readOnly = true;
    document.getElementById("private").readOnly = true;
}

const checkprime = (num) => {    
    for (let i = 2; i <= num / 2 ; i++) {
        if (num % i === 0){
            return false;
        }
    }
    return true;
}

const generatePrime = () => {
    let prime = Math.floor(Math.random() * 100);
    
    while(!checkprime(prime)){
        prime++;
    }

    return prime;
}

const gcd = (a, b) => {
    let small = (a > b) ? b : a;
    let ans;
    for (let i = 1; i <= small; i++) {
        if (a % i === 0 && b % i === 0) {
            ans = i;
        }
    }

    return ans;
}

const modInverse = (a, m) => {
    for (let i = 1; i < m; i++) {
        if ((a * i) % m === 1) {
        return i;
        }
    }
    return 1;
};

const RSAgenerateKeys = () => {
    let p = generatePrime();
    let q = generatePrime();

    N = p * q;
    let euler = (p - 1) * (q - 1);

    localStorage.setItem("N" , N);

    let e;
    do{
        e = (Math.floor(Math.random() * 1000)) % euler;
        if(gcd(e , euler) == 1){
            break;
        }
    }while(true);

    let d = modInverse(e , euler);

    let publicKey = { e, N };
    let privateKey = { d, N };

    // only for debugging purposes
    console.log('p = ' , p);
    console.log('q = ' , q);
    console.log('N = ' , N);
    console.log('euler = ' , euler);
    console.log('e = ' , e);
    console.log('d = ' , d);
    console.log('Public Key:', publicKey);
    console.log('Private Key:', privateKey);

    displaykey(publicKey , privateKey);
}

displaykey = (pubk , privk) => {
    key1 = pubk.e;
    key2 = privk.d;

    document.getElementById("public").value = key1;
    document.getElementById("private").value = key2;
}