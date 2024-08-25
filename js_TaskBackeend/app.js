const url = 'http://localhost:3005/notes'


function fetchNotes(){
    axios.get(url)
    .then(response=>{
        const notelist = document.querySelector('#notesList')
        notelist.innerHTML = ''
        response.data.forEach(note => {
            const li = document.createElement('li')
            li.innerHTML += `<strong>${note.title}</strong>
                            <p>${note.description}</p>
                            <button onclick="delete_note('${note.id}')">Delete</button>
                            `;
                            
                            notelist.appendChild(li)
        });
       
    })
    .catch(err => console.error('Error fetching notes:', err))
}

// create new notes 


document.getElementById('text-container').addEventListener('submit', (e) =>{
    e.preventDefault();
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value

    axios.post(url,{
        title,
        description

    })
    .then(()=>{
        document.getElementById('text-container').reset()
        fetchNotes()
    })
    .catch(err => console.error('Error creating note:', err));
   


})

function delete_note(id){
    console.log(`Deleting note with ID: ${id}`);
    axios.delete(`${url}/${id}`)
    .then(()=>{
        console.log('Note deleted successfully');
        fetchNotes()
    })
    .catch(err => console.error('Error deleting note:', err));

}


fetchNotes()