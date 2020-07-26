var list = document.getElementById("list")

function add(){

    var todo_item = document.getElementById('todo-item')

    var li =document.createElement('li');
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)

    list.appendChild(li)


    var dltbtn = document.createElement('button')
    var dlt = document.createTextNode("Delete")
    dltbtn.appendChild(dlt)
    dltbtn.setAttribute("onclick" , "deleteitem(this)")

    li.appendChild( dltbtn)




    var editbtn = document.createElement('button')
    var edittext = document.createTextNode("Edit")
    editbtn.setAttribute("onclick" , "edititem(this)")
    editbtn.appendChild(edittext)
    li.appendChild(editbtn)


    
    
    todo_item.value = "";
    
}


function deleteitem(e){
    e.parentNode.remove()
}

function edititem(e){
    console.log(e.parentNode.firstChild)
    var a = prompt("Enter Edit Value" , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
   
}


function deleteall(){
    list.innerHTML = ""
}