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
const todoButton = document.getElementById('to-do')
var counter = 0;
todos.forEach(todo => {
    if (!todo.completed){
        counter += 1;
        const newToDo = document.createElement('p')
        newToDo.textContent = `${todo.task}`
        document.querySelector("body").insertBefore(newToDo, todoButton)
    }
})
const counterElement = document.createElement('h2')
counterElement.textContent = `You have ${counter} tasks left:`
firstPara = document.querySelector('p')
document.querySelector("body").insertBefore(counterElement, firstPara)




document.getElementById('to-do').addEventListener('click', (e) => {
    e.target.textContent = "Todo Added"
    
})