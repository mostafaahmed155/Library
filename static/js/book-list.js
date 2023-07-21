document.addEventListener('DOMContentLoaded',function (e){
const list=document.querySelector('#book-list ul') 

list.addEventListener('click',function(e){
    if(e.target.className=="delete")
    {
        const li = e.target.parentElement;
         list.removeChild(li)
    }
})   

const add=document.getElementById('add-book')

add.addEventListener('click',function(e){
    e.preventDefault()

    let value=document.getElementsByClassName('hol')
    if(value!=''){
        let li=document.createElement('li')
        let name= document.createElement('span')
        let delet=document.createElement('span')

        li.appendChild(name)
        li.appendChild(delet)
        list.appendChild(li)

        name.textContent=add
        delet.textContent='Delete'

        name.setAttribute('class','name')
        delet.setAttribute('class','delete')
    }
})

let hideBox = document.querySelector('#hide')

hideBox.addEventListener('change' , function(e){
    if(hideBox.checked){

        list.style.display = "none";
    }
    else{

        list.style.display = 'block';
    }
})

})