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

