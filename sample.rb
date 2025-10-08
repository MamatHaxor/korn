# AutoRepo demo - Ruby (~60 lines)
def fib(n)
  a, b = 0, 1
  out = []
  n.times do
    out << a
    a, b = b, a + b
  end
  out
end

def stats(arr)
  sum = arr.sum
  { len: arr.length, sum: sum, avg: arr.length > 0 ? sum.to_f/arr.length : 0 }
end

def primes(arr)
  arr.select { |x| x > 1 && (2..Math.sqrt(x)).none? { |i| x % i == 0 } }
end

seq = fib(35)
puts "Ruby stats: #{stats(seq)}"
puts "Primes: #{primes(seq).inspect}"
puts "Done."
