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

const filters = {
    searchText: ''
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    filteredNotes.forEach(note =>{
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

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
   filters.searchText = e.target.value  
   renderNotes(notes, filters)  
})
