// let arr =[2,4,7,8,10,11]


// let evendivides = arr.map((even)=> even % 2 == 0)


// console.log(evendivides);


// let arr =[2,4,7,8,10,11]


// let evendivides = arr.filter((even)=> even % 2 == 0)


// console.log(evendivides);


// let a=[2,6,3,34,10,7,36]



// a.forEach(big=>{
//     if(big>=6){
//         console.log(big);
//     }
// })


// task 1


// let arr_1= [1,2,6,7,10,13,3]
// let arr_2= [1,2,3,0,19,13,3]



// let repeatingElementsdelete=(arr_1, arr_2)=>{

//     let result = []

//     arr_1.forEach(element=>{
//         if(!arr_2.includes(element)){
//           result.push(element);
        
//         }

//     })

//     arr_2.forEach(element=>{
//         if(!arr_1.includes(element)){
//          result.push(element);
        
//         }
   
      
//     })
    

//     console.log(result);
    




    
// }


// repeatingElementsdelete(arr_1,arr_2)


// task 2


// let arr_1= [1,2,6,7,10,13,3]
// let arr_2= [1,2,3,0,19,13,3]



// let arr_apart=(arr_1 , arr_2 )=>{
//     let justfirstarrwrite = []
    
//     arr_1.forEach(element=>{
//         if(!arr_2.includes(element)){
//             justfirstarrwrite.push(element);

//         }
//     })

//     return justfirstarrwrite

// }


// console.log(arr_apart(arr_1,arr_2));



// task 3 

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];

// function increasing_decreasing(){
//     let increasing = array.sort((a,b)=>(b-a))


//     return increasing
// }


// console.log(increasing_decreasing());


// task 4 


// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22];



// let negative_number=array.filter(element=>element<0)


// console.log(negative_number);



// task  5


// let textarr=['zaman ile yol ayri ayri bir yolculuqdur']


// function formatKababcase(text){

//     let format=text.split(' ').join('-').toUpperCase()

//     console.log(format);

// }


// formatKababcase(textarr[0])


// task 6


// let orginalarr = [1, 5, -7, 3, -9, 4, -6, 2];

// let Output=orginalarr.map(element=>{
//     if(element<0){
//      return -element

//     }
//     return element*=2
// })

// console.log(Output);


// let namesArray = [
//     "Alice",
//     "Bob",
//     "Catherine",
//     "David",
//     "Eva",
//     "Andrew",
//     "Frank",
//     "Anna",
//     "George",
//     "Alex",
// ];




// function isName(name){
//     let search
//     search=name.filter(firstlatter=>firstlatter.startsWith("A"))
    
//     return search
// }



 
// console.log(isName(namesArray))



// let search=namesArray.filter(firstlatter=>firstlatter.startsWith("A"))

// console.log(search);
   



// task 7


// let  arr = [1,3,5,6,8,11,5,8,90,0]

// let sumall=0

// let allsum=arr.map(element=>{

//     sumall+=element

//     return sumall
    
// })

// console.log(sumall);


// task 8


// let arr = [1,3,5,6,8,11,5,8,90,0,-8,-7]


// function bigSmall (big,small){
//     big=[]
//     small=[]

//     // big 
//     let most_big = Math.max(...arr)
//     big.push(most_big)

//     console.log('most big: ',big);

//     let most_small = Math.min(...arr)
//     small.push(most_small)

//     console.log('most small:',small);
// }


// bigSmall()


// task 9


// let arr = [1,3,5,6,8,10,11]

// let reversearr=arr.reverse()


// console.log(reversearr);





// let arr = [1,3,5,6,8,10,11]

// function reverseFunction (arr){
//     let reverseArr=[]

//     arr.forEach(element=>{
//         reverseArr.unshift(element)
//     });
//     return reverseArr ;
// }


// console.log(reverseFunction(arr));


// task 10

// let arr = [1,3,5,6,8,10,11]



// let search =arr.find(element=>element>10)

// console.log(`find number : ${search}`);




// task 11

// let arr = [1,3,5,6,8,10,11]

// let decrement=arr.map(element=>element *=2)



// console.log(decrement);


// task 12 


// let arr = [1,2,3,4,5,1,1,2,3,4,5,8,1,11,44,23,12,0]
// let newArr=[]


// let repeatedNumber=arr.forEach(element=>{
//     if(arr.indexOf(element) == arr.lastIndexOf(element)){
//         newArr.push(element)

//     }
// })

// console.log((newArr));



// task 13



// let arr = [1,3,5,6,8,10,11]

// let twoSquare = arr.map(element=>element*element)

// console.log(twoSquare);




// task 14 


// let Vowels_consonants=['a','b','c','d','f','r','y','o','l','m','ö']



// let vowels_consonantsSearch=(vowels)=>{
    
//     vowels=['a','e', 'ı', 'i', 'o', 'ö', 'u', 'ü']

//     let vowelsArr=[]
//     let consonantsArr=[]

//     let isvowels= Vowels_consonants.forEach(Character=>{
//         if(vowels.includes(Character.toLowerCase())){
//             vowelsArr.push(Character)
            
//         }else{
//             consonantsArr.push(Character)
            
//         }  
//     })
//     console.log("vowels: ",vowelsArr);

//     console.log('consonant:',consonantsArr);

//     return isvowels;


    
// }



// vowels_consonantsSearch()




// task 15

// let arr = [1,3,5,6,8,10,11]
// let indexpush=[]
// let indexsearch=arr.forEach((element , index)=>{

//     indexpush.push(index)

// })

// console.log(indexpush);


// let arr = ['a','b','c','d','f','r','y','o','l','m','ö']

// let indexpush=[]

// let index=arr.forEach((element,index)=>{
//      indexpush.push(index)
// })

// console.log(indexpush);


// let arr = ['a','b','c','d','f','r','y','o','l','m','ö']

// let index=arr.indexOf('a')
// console.log(index);





// task 16


// let arr =[1,4,6,8,12,45,78,98,34,100]



// let odd_even=arr.map(element=>{
//     if(element%2==0){
//         return `even num: ${element}`
//     }else{
//         return `odd num: ${element}`
//     }
// })


// console.log(odd_even);