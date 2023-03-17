function findPrimes(nStart, nEnd) {
    for (let i = nStart; i <= nEnd; i++) {
        if (! isPrimeNumber(i)) {
            document.write(i + " ");
        }
    }
}

findPrimes(2, 24);