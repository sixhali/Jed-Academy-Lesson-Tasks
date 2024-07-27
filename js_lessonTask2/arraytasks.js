// let arr = [10, 5, 0, 12, -1, 11];

// arr.forEach(element => {
//     if(element<0){
//         console.log(`this negative number is ${element}`);
//     }else if (element==0){
//         console.log(`this number zero equal ${element}`);
//     }else{
//         console.log(`this number pozitive  ${element}`);

//     }
// });

// task 1

// let arr_1 = [12,13,15,5,6,8,9,10]
// let arr_2 = [12,13,3,0,4,1,9,2]

// let arr_unification =  arr_1.concat(arr_2)

// let uniqueElments=new Set()

// let arr=[]
// arr_unification.forEach(element => {
//     if(!uniqueElments.has(element)){
//         uniqueElments.add(element);
//     }
//     arr.push(element);

// })

// console.log(arr);

// task 2

// let arr_1 = [12,13,15,5,6,8,9,10]
// let arr_2 = [12,13,3,0,4,1,9,2]

// let arr_2Set=new Set(arr_2)

// let uniqueElmentsfilter=arr_1.filter(element => !arr_2Set.has(element))

// console.log(uniqueElmentsfilter);

// task 3

// let array = [1, 6, 34, 5, 1, -4, 54, 76, 23, 65, 3, 50, 45, 100, 2346, -52, 6545, 0, 45, 22,];

// let arr=[]

// let sortArray=()=>{
//     let data = array.sort((a,b)=>a-b)

//     data.map(element=>{
//         arr.push(element)
//         return arr
//     })
// }

// sortArray()

// console.log(arr);

// task 4

// let arr = [10, -5, -0, 12, -1, 11];

// arr.map(element=>{
//     if(element<0){
//         console.log("negative: ",element);
//     }else{
//         console.log("poztive",element);
//     }
// })

// task 5

// let kebabToUpper =(Kebabcase)=>{

//    return Kebabcase.split(' ').join('-').toUpperCase()

// }

// console.log(kebabToUpper('zaman alici ile mesguldur'))

// task 6

// let orginalArray = [1, 5, -7, 3, -9, 4, -6, 2]

// let output = orginalArray.map(a=>{
//     if(a<0){
//        return Math.abs(a)
//     }else{
//       return a *= 2
//     }
// })

// console.log(output);

// task 7

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

// let Names = (names)=>{
//     let filtername=names.filter(names=>names.startsWith('A'))

//     if(filtername.length===0){
//         console.log(`not found a name with start `);
//     }else{
//         console.log((filtername));
//     }
// }

// Names(namesArray)

// class task 1

// let arr= [1 , 2 , 3 , 4 , 5]

// let arsymbol=[]

// arr.forEach(element=>{
//     let data=element*=2
//     arsymbol.push(data)
// })

// console.log(arsymbol);

//task 2

// let arr = [1 , 2 , 3 , 4, 5 , 6]

// let allarray=(sum)=>{
//     sum = 0
//     arr.map(element=>{
//         sum += element

//     })
//     console.log(sum);

// }

// allarray(arr)

// task 3

// let arr = [1,2,3,4,5,6]

// let mostbig_mostSmall=(arr)=>{
//     let  mostBigArrnum = Math.max(...arr)
//     console.log(mostBigArrnum);
//     let  mostSmallArrnum = Math.min(...arr)
//     console.log(mostSmallArrnum);

// }

// mostbig_mostSmall(arr)

// task 4

// let arr = [1,2,3,4,5,6]

// let reversedArr=(reversed)=>{
//     let arrsymbol=[]
//     for (let i = reversed.length-1;i>=0;i--){
//         arrsymbol.push(reversed[i])

//     }

//     console.log(arrsymbol);

// }

// reversedArr(arr)

// task 5

// let arr_1 = [12,13,15,5,6,8,9,10]
// let arr_2 = [12,13,3,0,4,1,9,2]

// let arr_2Set=new Set(arr_2)

// let uniqueElmentsfilter=arr_1.filter(element => arr_2Set.has(element))

// console.log(uniqueElmentsfilter);

// task 7

// let arr =[1,5,7,2,6,-1,-5]

// let increasing_decreasing=(arr)=>{

//     let increasing = arr.sort((a,b)=>a-b)
//     console.log(`artan sıra: ${increasing}`);

//     let decreasing = arr.sort((a,b)=>b-a)
//     console.log(`azalan sıra: ${decreasing}`);
// }

// increasing_decreasing(arr)

// task 8

// let arr = [1 , 2 , 3 , 4, 5 , 6]

// let allarray=(square)=>{
//     let elementSquare
//     let arrsymbol=[]

//     arr.map(element=>{
//     elementSquare = element*element
//     arrsymbol.push(elementSquare)
//     })
//     console.log(arrsymbol);

// }

// allarray(arr)

// task 10

// let arr = [1, 2, 3, 4, 5];

// function arrtwo(arr) {
//   let arsymbol = [];

//   arr.forEach((element) => {
//     let data = (element *= 2);
//     arsymbol.push(data);
//   });
//   console.log(arsymbol);
// }

// arrtwo(arr)


// task 11 


// let Vowels_ConsonantsArrs=['a','b','c','d','e','f','g','h','j','k']


// function Vowels_Consonants(arr){

//     const Vowels =['a', 'e', 'ı', 'i', 'o', 'ö', 'u', 'ü']


//     let VowelArr=[]
//     let ConsonantArr=[]

//     arr.forEach(element => {
//         if(Vowels.includes(element)){
//             VowelArr.push(element)
//         }else{
//             ConsonantArr.push(element)
//         }
        
//     });
     
//     return {
//         Vowels : VowelArr,
//         Consonants : ConsonantArr
//     }
// }

// let result = Vowels_Consonants(Vowels_ConsonantsArrs);
// console.log('sait:', result.Vowels); 
// console.log('samit:', result.Consonants);



// task 12

// let arr = [12,'salam',0.23,true,null]


// function findindex(arr,value){
//     arr.indexOf(value)
//     if(arr.includes(value)){
//         return arr.indexOf(value)

//     }else{
//         return `not found array in ${value}`
//     }


// }


// console.log(findindex(arr,true));


// task 14



// let arr_1 = [12,13,15,5,6,8,9,10]
// let arr_2 = [12,13,3,0,4,1,9,2]

// let difrentsarrs=(arr_1Set,arr_2Set)=>{
//   arr_1Set=new Set(arr_1)
//   arr_2Set=new Set(arr_2)


//   let uniqueElmentsfilter=arr_1.filter(element => !arr_2Set.has(element))
//   let uniqueElmentsfilter2=arr_2.filter(element => !arr_1Set.has(element))
//   return uniqueElmentsfilter.concat(uniqueElmentsfilter2)
// }



// console.log(difrentsarrs(arr_1,arr_2));



// let number=[12,'str',13,89,'leol','cr',null,NaN]


// task 17


// function isNums(num){
//     return num.map(element=>{
//         if(typeof element == 'number' &&!isNaN(element)){
//           return `this number: ${element}`
//         }else{
//             return `not number: ${element}`
//         }

//     })
// }



// console.log(isNums(number));


// task 18

// Fisher-Yates

// let orginalarray=[1,2,5,7,9,22,34,64,76,98,20]


// let suffleArray=(array)=>{
//     for(let i = array.length-1;i>0;i--){
//         const j = Math.floor(Math.random() * (i + 1))
//         console.log(`${array[i],array[j]} ${array[j],array[i]} `);
//         [array[i], array [j]] = [array[j], array [i]]
//     }
//     return array ;


// }


// let suffleRandomArray=suffleArray(orginalarray)

// console.log(suffleRandomArray);

// task 19


// let oddandevenarr=[1,2,3,4,6,8,11,23,15,17,99]



// function oddAndEven(oddandeven){

//     return oddandeven.map(element=>{
//         if(element%2==0){
//             return `even number : ${element}`
//         }else{
//             return `odd number : ${element}`
//         }
//     })

// }


// console.log(oddAndEven(oddandevenarr));


//  2


// let oddandevenarr=[1,2,3,4,6,8,11,23,15,17,99]



// function oddAndEven(oddandeven){
//     let evennum=[]
//     let oddnum=[]

//     oddandeven.map(element=>{
//         if(element%2==0){
//              evennum.push(element)
//         }else{
//              oddnum.push(element)
//         }
//     })

//     return {'even number:':evennum,  'odd number:':oddnum}

// }


// console.log(oddAndEven(oddandevenarr));




