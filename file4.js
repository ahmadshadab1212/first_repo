// dailyActivities

// let DA = ['sleep', 'work', 'exercise']
// let newRoutine = ['eat'];
// DA.sort();
// console.log(DA); 

// const position = DA.indexOf('work');
// console.log(position); 

// const newDA = DA.slice(1);

// console.log(newDA);

// const routine = DA.concat(newRoutine);
// console.log(routine);

// let user ={
//     name : "shadab",
//     age : 20,
//     email : "test@test.com",

//     type : {
//         categary :"stdent",
//         course : "BCA", 
//         year : [2020 , 2023] ,

//         add : {
//             distric : "pilibhit",
//             state : "up",
//             country :" indai",
//         }
//     }
// }
// let check = user?.type?.add;
// console.log(check)

// let person = {
//     name :"mohd shazeb",
//     father : "mohd yasin",
//     degree : "BCA",
//     hobby : "cricket",
// }    
// let person2 = {
//     name : "arslan",
//     father : "rafeek",
//     degree : "MBBS",
//     hobby : "cricket",
// }
// let p ={...person, ...person2}
// console.log(p)

let a = {
    name : "shadab",
    age : "20",
    address :"neoria",
}
let b = {
    name :"haseeb",
    age :"20",
    address : "pilibhit",
}
let c = {...a, ...b}
console.log(c)