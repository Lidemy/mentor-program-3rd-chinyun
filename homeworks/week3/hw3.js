function isPrime(n) {
  if (n >= 1 && n <= 100000) {
    if (n === 1) return false;
    for (let i = 2; i < n; i += 1) {
      if (n % i === 0) return false;
    }
    return true;
  }
  return 'n should be >=1, <= 100000';
}

module.exports = isPrime;
