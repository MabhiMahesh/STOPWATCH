// // // let skill = "html"
// // // for(let char of skill)
// // // {
// // //     console.log(char); 
// // // }

// // // let s = prompt('enter a string');
// // // let c = prompt('enter a character to know the count');
// // // let count = 0;
// // // for(temp of s){
// // //     if(temp == c)
// // //     {
// // //         count++;
// // //     }
// // // }
// // // console.log(count);


// // // let n = [10,20,3,4,6,7,8]
// // // (function (n){
// // // for(let num of n){
// // //     if(num%2 == 0){
// // //         console.log(num);
// // //     }
// // // }
// // // })(n);

// //  let skill = [1,2,4,5,6];
// // // for(let i=0;i<skill.length;i++)
// // // {
// // //     console.log(skill[i]);
    
// // // }


// // // let a = [1,2,3]
// // // let b = [4,5,6]
// // // let c = [7,8,9]
// // // let d = [...a,...b,...c]
// // // console.log(d);

// // function myfun(...x){
// //     for(let temp of x){
// //     if(temp%2 == 0){

// //         console.log(temp)
// //     }
// // }
// // }
// // myfun(1,2,3,4,5,36)

// function task1(){
//    return new Promise((resolve, reject) => { setTimeout(()=>{ 
//         resolve(" task1 success")},1000
//     );
// })
// }

    
// function task2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         resolve(" task2 success")},2000);
//     })
// }


// function task3(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{ reject( "error")},3000);
       
//     })
// }
// task1()
//     .then(result => {
//         console.log(result);
//         return task2();
//     })
//     .then(result => {
//         console.log(result);
//         return task3();
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error => {
//         console.log("%c" + error, "color: red; font-weight: bold;");
//     });

// const x = document.getElementById('xyz')
// let person = [
//     {name:"mahesh",DoY:2004},
//     {name:"Ramesh",DoY:2006},
//     {name:"Yogesh",DoY:1969}
// ]
// function showNames(){
// let result = "";
// let y = new Date().getFullYear()
// // console.log(y-person[0].DoY);
// // console.log(y-person[1].DoY)
// for (let p of person) {
//  result+=`<p>${p.name}  age is  ${(y - p.DoY)}`;
// }
// xyz.innerHTML = result;
// }

// let persons = [];

// function addName() {
//     let name = document.getElementById("nameInput").value;
//     let result = "";

//     if (name !== "") {
//         persons.push(name);
//     }

//     for (let p of persons) {
//         result += `<p>${p}</p>`;
//     }

//     document.getElementById("output").innerHTML = result;
//     document.getElementById("nameInput").value = "";
// }


let num = [12,36,56,89,26,45,23,56]
function even(){
    let res = "";
    for(let x of num){
        if(x%2==0){
            res += `<p>${x}</p>`;
        }
    }
    document.getElementById("output").innerHTML = res;
}



let t = 0;
let x;
function start(){
    x = setInterval(() => {
        t++;
        time.textContent = t
    }, 1000);
}

function stop(){
    clearInterval(x)
}

function reset(){
    setTimeout(() => {
        t = 0;
        time.textContent = 0;
        
    });
}




function task1(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("Task1 Completed")
        },1000)
    })
}


function task2(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("Task2 Completed")
        },3000)
    })
}

function task3(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        resolve("Task3 Completed")
        },2000)
    })
}

// task1()
// .then((output)=> console.log(output))
// .catch((error)=> console.log(error))

// task2()
// .then((output)=> console.log(output))
// .catch((error)=> console.log(error))

// task3()
// .then((output)=> console.log(output))
// .catch((error)=> console.log(error))


// task1()
//     .then((output) => {console.log(output)
//      return task2()
// })
// .then((output) => {console.log(output)
//      return task3()
// })
// .then((output) => {console.log(output)
     
// })


// async function hp(){
//     console.log(await task1());
//     console.log(await task2());
//     console.log(await task3());
// }
// hp()

(async ()=>{
    let x = await(await fetch("https://fakestoreapi.com/products")).json();
    console.log(x)
})()