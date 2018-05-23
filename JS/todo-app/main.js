const todos = [{
    task: 'more js',
    completed: false
 }, {
    task: 'play tennis',
    completed: true
  },{
      task: 'watch tennis', 
      completed: true
  },{
      task: 'apply for GG job',
      completed: true
   }, {
       task:  'go to Le Wagon?',
       completed: false
   }]

   const textFilter = {
       param: ''
   }
   
   const renderToDos = (list, filter) => {
    //    clear div where todos are listed by filter
       document.querySelector("#todos").innerHTML = '';
    //    filter todos against search parameter
       const filteredTodos = list.filter(todo => todo.task.toLowerCase().includes(filter.param.toLowerCase()))
    //    filter these search-filtered todos by whether they are completed or not
       const incompleteTodos = filteredTodos.filter(todo => !todo.completed )
       const summary = document.createElement('h2')
       summary.textContent = `You have ${incompleteTodos.length} tasks left:`
       document.querySelector('#todos').appendChild(summary)
    // Add list of todos to div 
       incompleteTodos.forEach(todo => {
            const p = document.createElement('p')
            p.textContent = todo.task
            document.querySelector('#todos').appendChild(p)
       })
    }

    renderToDos(todos, textFilter)
        
document.getElementById('to-do').addEventListener('click', (e) => {
    e.target.textContent = "Todo Added"
})

document.getElementById('filter').addEventListener("input", e => {
    textFilter.param = e.target.value
    renderToDos(todos, textFilter)  
})