'use strict'

let todos=[]

todos=getSavedTodos()
let filters={
    searchtext:'',
    hidecompleted:false
}

rendertodos(todos,filters)

document.querySelector('#filtertodo').addEventListener('input',(e) => {
    filters.searchtext= e.target.value
    rendertodos(todos,filters)
})
document.querySelector('#addnew-todo').addEventListener('submit',(e) => {
    e.preventDefault()
    todos.push({
    id:generateUUID(),
    text: e.target.elements.addtodo.value,
    completed:false 
   })
   saveTodos(todos)
   rendertodos(todos,filters)
   e.target.elements.addtodo.value=''
})

document.querySelector('#hide-completed').addEventListener('change',(e) => {
   filters.hidecompleted = e.target.checked
   rendertodos(todos,filters)
})





