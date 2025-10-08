#!/usr/bin/env python3
"""
AutoRepo demo - Python (~70 lines)
Demonstrates functions, classes, and small utilities.
"""
from typing import List, Dict

def fib(n: int) -> List[int]:
    a, b = 0, 1
    out = []
    for _ in range(n):
        out.append(a)
        a, b = b, a + b
    return out

def stats(arr: List[int]) -> Dict[str, float]:
    total = sum(arr)
    length = len(arr)
    avg = total / length if length else 0
    maximum = max(arr) if arr else 0
    return {"len": length, "sum": total, "avg": avg, "max": maximum}

class Analyzer:
    def __init__(self, data: List[int]):
        self.data = data

    def primes(self):
        out = []
        for x in self.data:
            if x > 1 and all(x % i for i in range(2, int(x**0.5)+1)):
                out.append(x)
        return out

    def summary(self):
        return stats(self.data)

if __name__ == "__main__":
    seq = fib(40)
    anal = Analyzer(seq)
    print("Summary:", anal.summary())
    print("Primes:", anal.primes())
    print("Done.")
