var book=document.getElementById('bookName')
var url=document.getElementById('bookUrl')
var bookBox=[]
if(localStorage.getItem('allbook')==null){
    var bookBox=[]
}else{
    bookBox=JSON.parse(localStorage.getItem('allbook')) 
    display()
}
function addBook(){
    var bookMark={
        bookName:book.value,
        bookUrl:url.value
    }
    bookBox.push(bookMark);
    localStorage.setItem('allbook',JSON.stringify(bookBox))
    console.log(bookBox)
    display();
    reset();
}
function display(){
    trs=``
    for(var i=0;i<bookBox.length;i++){
        trs +=`
        <tr>
           <td class="me-5" class="text-muted h3">${bookBox[i].bookName}</td>
           <td><button class="btn btn-primary"><a href="http://${bookBox[i].bookUrl}" target="_blank">visit</a></button></td>
           <td><button class="btn btn-danger" onclick="del(${i})">Delete</button></td>               
        </tr>
        `
    }
      document.getElementById('tableurl').innerHTML=trs;
}
function del(index){
    bookBox.splice(index,1)
    localStorage.setItem('allbook',JSON.stringify(bookBox))
    display()
}
function reset(){
    book.value=''
    url.value=''
}
