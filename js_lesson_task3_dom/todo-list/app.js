const todos = [
    {id:0,todo:'Football like',complated:true},
    {id:1,todo:'paintball like',complated:true},
    {id:2,todo:'Bowling like',complated:false},
    {id:3,todo:'basketball like',complated:true},
    {id:4,todo:'NFL like',complated:false},
    {id:5,todo:'Swimming like',complated:false},
    {id:6,todo:'Formula 1 like',complated:true}
]

let tbody = document.querySelector('.tbody')

let searchInput = document.createElement('input')
let searchparent=document.getElementById('search')
searchparent.className='d-flex bg-danger'
searchparent.style.position = 'relative'
searchInput.setAttribute('type','search')
searchInput.className='w-50 form-control no-outline m-auto mb-5 mt-5'
const i_3 = document.createElement('i')
i_3.className='fa-solid fa-plus fs-1'
i_3.setAttribute('role','button')
searchparent.append(searchInput,i_3)
i_3.style.position ='absolute'
i_3.style.right='330px'
i_3.style.top='45px'


i_3.addEventListener('click',(e)=>{
    const addTodo=prompt('add todo')

    if(addTodo){
        const newTodo={
            id:todos.length,
            todo:addTodo,
            complated:false
        }
        todos.push(newTodo)
        writeData(todos)
    }


})
searchInput.addEventListener('input',(e)=>{

    const filterData = todos.filter(item=>item.todo.toLowerCase().includes(e.target.value.toLowerCase()))
    if(filterData.length===0){
        showNoteDfinedMesage()
          
        
    }else{
      writeData(filterData);
    }
    
    
})

searchparent.appendChild(searchInput)

const writeData = (todos)=>{
    tbody.innerText=''
    todos.forEach((item,index,arr)=>{
        const tr = document.createElement('tr')
        const td1 = document.createElement('td')
        const td2 = document.createElement('td')
        const td3 = document.createElement('td')
        const Input = document.createElement('input')
        const label = document.createElement('label')
        const span = document.createElement('span')
        const i_1 = document.createElement('i')
        const i_2 = document.createElement('i')
        


        tr.className =item.complated ? 'table-success' : 'table-warning'

        td1.className='text-center'
        td2.className-'text-center pe-5'
        td1.innerText = item.todo


        Input.setAttribute('type','checkbox')
        item.complated ? Input.setAttribute('checked',''):null
        label.innerText=item.complated 
        label.appendChild(Input,span)

        td2.appendChild(label)
        td3.setAttribute('role','button')

        i_1.className='fa-solid fa-trash-can me-3'
        i_2.className='fa-regular fa-pen-to-square me-3'


        td3.append(i_1,i_2)

        tr.append(td1,td2,td3)
        

        tbody.appendChild(tr)

        Input.addEventListener('change',(e)=>{
           todos[index].complated=e.target.checked
           writeData(todos)


            
            
        })

        i_1.addEventListener('click',(e)=>{
            const isAgree=confirm('Silmek isdediynze emisniz? ')
            if(isAgree){
                const filterData=todos.filter((todo=>todo.id!==item.id))
                writeData(filterData)
            }else{
                console.log('todo silinmedi');
                
            }
        })

        i_2.addEventListener('click', (e) => {
            const isFix = prompt('update todo', item.todo);
        
            // Prompt null değilse güncellemeyi yap
            if (isFix !== null) {
                todos = todos.map(t => {
                    if (t.id === item.id) {
                        t.todo = isFix;
                    }
                    return t;
                });
                writeData(todos);
            }
        });
        
    })

    
}


const showNoteDfinedMesage = ()=>{
    
    tbody.innerText = '';

    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.className = 'text-center m-auto'
    td.innerText='Not Defined!!'

    tr.appendChild(td)
    tbody.appendChild(tr)

}
writeData(todos)





