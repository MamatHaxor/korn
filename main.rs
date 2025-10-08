// AutoRepo demo - Rust (~60 lines)
fn fib(n: usize) -> Vec<u128> {
    let (mut a, mut b) = (0u128, 1u128);
    let mut v = Vec::new();
    for _ in 0..n {
        v.push(a);
        let tmp = a + b; a = b; b = tmp;
    }
    v
}

fn stats(v: &Vec<u128>) -> (usize, u128, f64, u128) {
    let sum: u128 = v.iter().sum();
    let len = v.len();
    let avg = sum as f64 / len as f64;
    let max = *v.iter().max().unwrap_or(&0);
    (len, sum, avg, max)
}

fn main() {
    let s = fib(30);
    let (l, sum, avg, max) = stats(&s);
    println!("Rust len={}, sum={}, avg={}, max={}", l, sum, avg, max);
    for (i, val) in s.iter().enumerate().take(8) { println!("{:02}: {}", i, val); }
    println!("Done.");
}
