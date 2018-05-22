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

const sortNotes = notes => {
    notes.sort( (a, b) => {
        if (a.title.toLowerCase() < b.title.toLowerCase()){
            return -1;
        } else  if  (a.title.toLowerCase() >  b.title.toLowerCase())  {
            return 1;
        } else {
            return 0;
        }
    })
}

const findNote = function (notes, noteTitle){
     return notes.find(function (note, index){
        return note.title === noteTitle
     })
}

const findNotes = function (notes, query ) {
  return notes.filter((note, index) => {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}
// console.log(findNotes(notes, "serious"))

sortNotes(notes)
console.log(notes);
