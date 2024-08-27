const form = document.querySelector('.addUserForm')
const usernameInput= document.getElementById('usernameInput')
const ageInput= document.getElementById('ageInput')
const checkboxInput= document.getElementById('checkboxInput')
const users = document.getElementById('users')

const url = 'http://localhost:3000'





form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const data = {
        username: usernameInput.value,
        age: ageInput.value,
        checkboxInput:checkboxInput.checked
    }

    axios.post(url + '/users' , data).then((res)=>{
        if(res.status === 200 ){
            form.reset()
        }
        
    })

    
    
})
function gettAllUsers(){
    users.innerHTML = ""
    axios.get(url + '/users').then((res)=>{
        res.data.forEach(({username , age , checkboxInput , id}) => {
            users.innerHTML += `
                           <div class="user">
                              <p>username:${username}</p>
                              <p>age:${age}</p>
                              <p>brain:${checkboxInput ? 'yes':'no'}</p>
                              <button onclick="deleteUser('${id}')">delete</button>
                              </div>
                             `;
        });
        
    })
}


function deleteUser(id){
    const deleteAgree = confirm('are you sure you want to delete this user?')
    if (deleteAgree){
        axios.delete(url + `/users/${id}`).then((del)=>{
            if(del.status === 200 ){
                alert('success user deleted')
                gettAllUsers()
            }
        })
        .catch(err => console.error('Error deleting user:', err));

        

    }
}

gettAllUsers()




