const todo = [{
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

const deleteTodo = function(list, search){
    const index =  list.findIndex(function (todo){
        return (todo.task.toLowerCase() === search.toLowerCase())
    })

    list.splice(index, 1)
    list.forEach(item => {
    console.log(item.task)
    // console.log(item.completed);
    
    })
}
const getThingsToDo = (todo) =>  {
   return  todo.filter(thing => {
        return !thing.completed
    })
    
}
const sortTodos = todo => {
    todo.sort((a, b) => {
        if (!a.completed === false && b.completed ) {
            return -1
        } else if  (a.completed && !b.completed){
            return 1
        } else {
            return 0;
        }
    })
}
sortTodos(todo)
console.log(todo);


// console.log(getThingsToDo(todo));


// deleteTodo(todo, "watch tennis")
// deleteTodo(todo, 'Play Tennis')

