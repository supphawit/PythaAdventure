# Quick Sort ก็คือแบ่งข้อมูลออกเป็นสองส่วนแล้วเรียกตัวเองขึ้นมา sort ข้อมูลสองส่วนนี้ Quick sort จะเลือกข้อมูลหนึ่งตัว (pivot)  
# สำหรับใช้ในการแบ่งข้อมูล ถ้าข้อมูลตัวหนึ่งซึ่งเมื่อนำมาเปรียบเทียบข้อมูลที่เลือกไว้นี้มีค่าน้อยกว่าเราจะเก็บข้อมูลนี้ไว้ใน sub-array ตัวหนึ่ง (left)
# แต่ถ้ามากกว่าเราก็เก็บไว้อีกตัวหนึ่ง (right) แล้วก็ sort ข้อมูลเหล่านี้จนกว่าข้อมูลใน sub-array ทุกตัวอยู่ในตำแหน่งที่เหมาะสม
def quickSort(alist,low,high):
    if low < high:
        
        pivot = partition(alist,low,high)

        quickSort(alist,low,pivot-1)
        quickSort(alist,pivot+1,high)

    return alist    

def partition(alist,low,high):
    i = -1
    pivot = alist[high]
    for j in range(0,len(alist)):
        if alist[j] <= pivot:
            i += 1
            # swap
            alist[i],alist[j] =  alist[j],alist[i]
            # initial new pivot
            new_pivot = alist.index(pivot) 
    return new_pivot

listNumber = [10,80,30,90,40,50,70]
lengthList = len(listNumber)

print (quickSort(listNumber,0,lengthList-1))
