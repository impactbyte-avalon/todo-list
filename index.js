function list (list1,list2,list3){
    for(i=0;i<list1.length;i++){
        console.log(list1[i]+", "+list2[i]+", "+list3[i])
    }
}

const list1= ["bangun", "mandi", "makan"]

const list2= ["kerja", "belanja", "tidur"]

const list3= ["belajar", "istirahat", "makan"]

list (list1, list2, list3)
document.getElementById('list1').textContent=list1
document.getElementById('list2').textContent=list2
document.getElementById('list3').textContent=list3