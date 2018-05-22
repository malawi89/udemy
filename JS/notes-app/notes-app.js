const notes = [{
    title: 'charlie and the chocolate factory',
    body: 'seriously whatever'
}, {
    title: 'tides of war',
    body: 'seriously whatever I want'  
}, {
    title: 'gates of fire',
    body: 'generally whatever'
}]

document.querySelector('#create-note').addEventListener('click', (e) =>{
 e.target.textContent = 'The button was clicked'
 
})

document.querySelector('#delete-all').addEventListener('click', (e) =>{
    e.target.textContent = 'Notes were removed'
    document.querySelectorAll('.note').forEach(note => {
        note.remove()
    })
   })

document.querySelector('#search').addEventListener('input', (e) => {
   console.log(e.target.value)    
})
