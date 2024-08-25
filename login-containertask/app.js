const yearSelcet = document.getElementById('year') // year js wtih write 

const inputName = document.getElementById('Name')
const inputEmail=document.getElementById('Email')
const logInButton = document.querySelector('.loginForm')
const wrongIsEmail = document.querySelector('.input-Email')
const registerInputs = document.querySelector('.registerInput')
const wrongIsName = document.querySelector('.input-username')
const isDateMoon = document.getElementById('moon')
const isDateDay = document.getElementById('day')
const isDateYears = document.getElementById('year')


for (let year = 2024; year >= 1994; year--) {
    const option = document.createElement('option');
    option.value = year
    option.text = year
    yearSelcet.appendChild(option)
    
    
}


logInButton.addEventListener('submit',(e)=>{
    checkButton()
    e.preventDefault()

   
    if(!logInButton.disabled){
        const data = {
            name: inputName.value,
            email: inputEmail.value,
            month: isDateMoon.value,
            day: isDateDay.value,
            year: isDateYears.value
        };
        
        const url = `http://localhost:3000/users?email=${encodeURIComponent(data.email)}`;

        axios.get(url)
        .then((res)=>{
            if(res.data.length > 0 ){
                console.log('User already exists');
                wrongIsEmail.style.border='2px solid red'
                inputName.value=''
                inputEmail.value=''
            }else{
                const url = `http://localhost:3000/users`
        
                axios.post(url,data)
                .then((res)=>{
                    console.log('data successfuly sent',res.data);
                    
                })
                .catch((err)=>{
                    console.log('error sending data',err);
                    
                })    
            }
        })

        .catch((err) => {
            console.log('Error fetching users', err);
        });
        
       
    }else{
        console.log('form is disabled not sent please enter your name or email adress');
        wrongIsName.style.border='2px solid red'
        wrongIsEmail.style.border='2px solid red'
        isDateMoon.style.border='2px solid red'
        isDateDay.style.border='2px solid red'
        isDateYears.style.border='2px solid red'
    }
    

})


inputName.addEventListener('change',(e)=> {
    console.log(e.target.value);
    checkButton()
    
    

})

inputEmail.addEventListener('change',(e)=> {
    const spiltEmail = e.target.value.split('@')


    if(spiltEmail.length === 2){
        const ext = spiltEmail[1].split('.')
        if(ext.length === 2){
            console.log('email isvalid');
            wrongIsEmail.style.border='2px solid rgb(51, 54, 57)'

            
        }else{
            console.log('email isInvalid');
            wrongIsEmail.style.border='2px solid red'
            
        }

    }else{
        console.log('email isInvalid');
        wrongIsEmail.style.border='2px solid red'
    }
   checkButton()

})


function checkButton(){
    const isNameValid = inputName.value.trim() !== ''; 
    const isEmailValid = inputEmail.value.trim() !== ''; 
    const isMoonlValid = isDateMoon.value.trim() !== ''; 
    const isDaylValid = isDateDay.value.trim() !== ''; 
    const isYearlValid = isDateYears.value.trim() !== ''; 


    if(isNameValid && isEmailValid && isMoonlValid && isDaylValid && isYearlValid ){
        logInButton.disabled=false
    }else{
        logInButton.disabled=true
    }
}


// api send and get




checkButton()