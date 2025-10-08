// AutoRepo demo - C# (~70 lines)
using System;
using System.Collections.Generic;
using System.Linq;

class Program {
    static List<long> Fib(int n) {
        long a = 0, b = 1;
        var outList = new List<long>();
        for (int i = 0; i < n; i++) {
            outList.Add(a);
            long tmp = a + b; a = b; b = tmp;
        }
        return outList;
    }

    static (int len, long sum, double avg, long max) Stats(List<long> arr) {
        long sum = arr.Sum();
        int len = arr.Count;
        double avg = len > 0 ? (double)sum / len : 0;
        long max = arr.Count > 0 ? arr.Max() : 0;
        return (len, sum, avg, max);
    }

    static void Main() {
        var seq = Fib(30);
        var s = Stats(seq);
        Console.WriteLine($"C# len={s.len}, sum={s.sum}, avg={s.avg}, max={s.max}");
        for (int i=0;i<Math.Min(8, seq.Count); i++) Console.WriteLine($"{i:00}: {seq[i]}");
        Console.WriteLine("Hello NaldyXploit!");
    }
}
