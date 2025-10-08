/**
 * AutoRepo demo - TypeScript (~70 lines)
 */
function fib(n: number): number[] {
  let a = 0, b = 1;
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(a);
    [a, b] = [b, a + b];
  }
  return out;
}

interface Stats { len: number; sum: number; avg: number; max: number; }

function stats(arr: number[]): Stats {
  const sum = arr.reduce((s, x) => s + x, 0);
  return { len: arr.length, sum, avg: arr.length ? sum / arr.length : 0, max: Math.max(...arr) };
}

class Analyzer {
  data: number[];
  constructor(data: number[]) { this.data = data; }
  primes(): number[] { return this.data.filter(n => {
      if (n < 2) return false;
      for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
      return true;
  }); }
  summary(): Stats { return stats(this.data); }
}

const seq = fib(35);
const a = new Analyzer(seq);
console.log("TS summary:", a.summary());
console.log("TS done.");
