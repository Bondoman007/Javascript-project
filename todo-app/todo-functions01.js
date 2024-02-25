'use strict'
//localStorage.clear()
function generateUUID() {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c==='x' ? r : (r&0x3|0x8)).toString(16);
    });
}
let getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try{
         return todosJSON?  JSON.parse(todosJSON) : []
        }catch(e){
            return []
        }

}
const remove = (id) => {
      const index = todos.findIndex((todo) => todo.id===id )
      if(index>-1){
        todos.splice(index,1)
      }

}
const toggleTodo = (id) => {
     const todo = todos.find((todo) => todo.id === id)
     if(todo){
        todo.completed = !todo.completed
     }
}

let saveTodos=(todos) => {
    localStorage.setItem('todos',JSON.stringify(todos))
}
const generateTodoDom = (todo) => {

    const list = document.createElement('span')
    const container = document.createElement('div')
    const button = document.createElement('button')
    const checkBox=document.createElement('input')
    checkBox.setAttribute('type','checkbox')
    checkBox.checked = todo.completed
    button.textContent='x'
    container.appendChild(checkBox)
    checkBox.addEventListener('change',() => {
        toggleTodo(todo.id)
        saveTodos(todos)
        rendertodos(todos,filters)
    })
    list.textContent = todo.text   

    container.appendChild(list)
    container.appendChild(button)
    button.addEventListener('click',() => {
        remove(todo.id)
        saveTodos(todos)
        rendertodos(todos,filters)
    })
    return container
}
const rendertodos=(todos,filters) => {
    let filtertodos = todos.filter((todo) => {
        const searchtodo = todo.text.toLowerCase().includes(filters.searchtext.toLowerCase())
        const checkbox = !filters.hidecompleted || !todo.completed
        return searchtodo && checkbox
    })
    //agar !filters.hidecompleted ture hai toh !todo.completed ye flw krega vice-versa
    const count= filtertodos.filter((todo) => !todo.completed
    )

    document.querySelector('#todos').innerHTML=''
 
    
    document.querySelector('#todos').appendChild(getSummary(count))

    filtertodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDom(todo))
        
    })
}

const getSummary = (count) => {
    const left = document.createElement('h2')
    left.textContent=`You have ${count.length} todo left`
    return left
}
