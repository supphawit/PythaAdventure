def fibo_re(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fibo_re(n-1) + fibo_re(n-2)

# ผลลัพธ์ของ Fibonacci ที่ n = 10ค่า factorial ของเลขจำนวน
print (fibo_re(10))
