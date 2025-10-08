/**
 * AutoRepo demo - JavaScript (~70 lines)
 * Functions, utils, small class-like pattern
 */
function fib(n) {
  let a = 0, b = 1;
  const out = [];
  for (let i = 0; i < n; i++) {
    out.push(a);
    [a, b] = [b, a + b];
  }
  return out;
}

function stats(arr) {
  const sum = arr.reduce((s, x) => s + x, 0);
  return {
    len: arr.length,
    sum: sum,
    avg: arr.length ? sum / arr.length : 0,
    max: Math.max(...arr)
  };
}

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}

class Analyzer {
  constructor(data) { this.data = data; }
  primes() { return this.data.filter(isPrime); }
  summary() { return stats(this.data); }
}

const seq = fib(40);
const a = new Analyzer(seq);
console.log("JS summary:", a.summary());
console.log("Primes:", a.primes());
console.log("End of demo.");
