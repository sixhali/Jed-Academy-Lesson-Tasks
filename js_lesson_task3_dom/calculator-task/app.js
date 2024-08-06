const display=document.querySelector('.calculator_input')
const calculatorkeys=document.querySelectorAll('.calculator-keys')


let displayShow = '0'
let firstValue=null
let operator=null
let waitingforsecond=false

updateDisplay()

function updateDisplay(){
    display.value=displayShow
}


let operatorButton=()=>{
        calculatorkeys.forEach(button=>{
            button.addEventListener('click',(e)=>{
               let element= e.target
               if (!element.matches('button')){
                return
               }

               if(element.classList.contains('operator')){

                handleOperator(element.value)

                console.log('operator',element.value);
                return
               }

               if(element.classList.contains('decimal')){
                inputDecimal(element.value)
                updateDisplay()
                return
               }

               if(element.classList.contains('clear')){
                clear()
                updateDisplay()
                return
               }



               inputDisplayValueShow(element.value)
               updateDisplay()

                
            })
        })

}

operatorButton()

let handleOperator=nextoperator=>{
    const value = parseFloat(displayShow)

    if(firstValue === null){
        firstValue = value
    }else if(operator){
        const result = calculator(firstValue,operator,value)
        displayShow =`${parseFloat(result.toFixed(5))}`
        firstValue = result
    }

    waitingforsecond=true

    operator=nextoperator
    updateDisplay()

}

let calculator=(first,operator,second)=>{
    let result
    switch (operator) {
        case '+':
            result = first + second
        break
        case '-':
            result = first - second
        break    
            
        case '*':
            result = first * second
        break
        case '/':
            result = first / second
        break
            
        default:

         result = second;

         
    }
  return result

    
}

let inputDisplayValueShow=(num)=>{
    if(displayShow.length >= 10){
        return

    }

    if(waitingforsecond){
        displayShow=num
        waitingforsecond=false
    }else{
        displayShow = displayShow === '0'? num : displayShow+num
    }

    console.log(displayShow,firstValue,operator,waitingforsecond);

    if (operator === '=') {
        operator = null;
    }
    
    
  

}


let inputDecimal=()=>{
    if(!displayShow.includes('.')){
        displayShow+='.'
    }
    
}



let clear=()=>{
    displayShow= '0'
}

