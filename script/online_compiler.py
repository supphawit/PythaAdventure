# โจทย์คือให้หาคำตอบของทุกความเป็นไปได้ที่ทำให้วงเล็บเปิด-ปิดมีจำนวน n ทั้งเปิด-ปิด และต้องให้วงเล็บหันเข้าหากัน
def parentheses(n,start,close,string):
    if( n == close):
        print (string)
        return
    
    else:
        if (start > close):
            parentheses(n,start,close+1,string+(")"))
        if (start < n):
            parentheses(n,start+1,close,string+("("))

# วงเล็บเปิด 3 ตัว ปิด 3 ตัว
parentheses(4,0,0,'')