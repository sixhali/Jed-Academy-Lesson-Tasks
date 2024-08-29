const form = document.querySelector(".addUserForm");
const usernameInput = document.getElementById("usernameInput");
const sumbitbutton = document.getElementById("button");
const search = document.getElementById("search");
const users = document.getElementById("users");
const checkbox = document.getElementById("checkbox")

const url = "http://localhost:3001";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
     username: usernameInput.value,
     checkbox:checkbox.checked
  };

  console.log(data);
  

  if (usernameInput.value) {
    axios
      .post(url + "/users", data)
      .then((res) => {
        if (res.status === 200 || res.status === 201 ) {
          form.reset();
          Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Eror!",
          text: "An error occurred while deleting the user.",
          icon: "eror",
        });
      });
  } else {

    Swal.fire({
      title: "something wrong happened!",
      text: "username empty don't leave blank!",
      icon: "eror",
    });
  }
});

function getAllUsers() {
  users.innerHTML = "";
  axios
    .get(url + "/users")
    .then(({ data }) => {
      data.forEach(({ id, checkbox, username }) => {
        users.innerHTML += `
                    <tr>
                      <td id="id">${id}</td>
                      <td id="name" onchange="editUser('${id}')">${username}</td>
                      <td><input type="checkbox" ${checkbox && 'checked'} onchange="editisHaveBrain('${id}')"></td>
                      <td>
                        <button value="delete" id="delete" onclick="deleteUser('${id}')">delete</button>
                        <button value="edit" id="edit" onclick="editUser('${id}')">edit</button>
                      </td>
                    </tr>
                            `;
      });
    })

    .catch((err) => {
      console.error("Error fetching users:", err);
    });
}



function deleteUser(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      axios
        .delete(`${url}/users/${id}`)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            }).then(getAllUsers());
          }
        })
        .catch((err) => {
          Swal.fire({
            title: "Eror!",
            text: "An error occurred while deleting the user.",
            icon: "eror",
          });
        });
    } else {
      Swal.fire({
        title: "rajected!",
        text: "user not deleted ",
        icon: "info",
      });
    }
  });
}


function editisHaveBrain(id){
  axios.get(`${url}/users/${id}`).then((res)=>{
    console.log(res);
    
    const newChackbox = {
      checkbox : !res.data.checkbox
    };
    
    axios.patch(`${url}/users/${id}`, newChackbox).then((data)=>{
      getAllUsers()
    })
    
  })
}



function editUser(id) {
    axios.get(`${url}/users/${id}`).then((res) => {
        const newUserName = prompt("enter new user name: ",res.data.username)
        if (newUserName){
            const newData = {
                username:newUserName,
                checkbox: res.data.checkbox 

            }
            axios.patch(`${url}/users/${id}`,newData).then((res)=>{
                if (res.status === 200) {
                    Swal.fire({
                        title: "Success!",
                        text: "User updated successfully.",
                        icon: "success"
                    });
                    
                }
                getAllUsers(); 
                
    
            })
            .catch((err) => {
                Swal.fire({
                    title: "Error!",
                    text: "An error occurred while updating the user.",
                    icon: "error"
                });
            });
        }

    })
    .catch((err) => {
        Swal.fire({
            title: "Error!",
            text: "An error occurred while updating the user.",
            icon: "error"
        });
    });
};

getAllUsers();
