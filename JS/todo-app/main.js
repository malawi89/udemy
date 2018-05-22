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
        todoButton.insertAdjacentElement('afterend', newToDo)
    }
})

const counterElement = document.createElement('h2')
counterElement.textContent = `You have ${counter} tasks left:`
h1Title = document.querySelector('h1')
// document.querySelector("body").insertBefore(counterElement, firstPara)
todoButton.insertAdjacentElement('afterend', counterElement)


document.getElementById('to-do').addEventListener('click', (e) => {
    e.target.textContent = "Todo Added"
})

document.getElementById('new-todo').addEventListener("input", e => {
    console.log(e.target.value);  
})