let btnE = document.getElementById("btn");
let jokeE = document.getElementById("Jokes");
// console.log("jokeE")


const apiKey = "8H4kW0jAAkNQjLP3/rfBQw==sJkUWjfKlUvALJU3";

const options = {
    method: "GET",
    headers: {
        'X-Api-Key': apiKey,
    },
    contentType: 'application/json',
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=" + 4;

getjoke = async () => {
    try {
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        console.log("fourth", data)
    } catch (e) {
        console.log(e)
    }
}

btnE.addEventListener("click", getjoke());






// 1: call back functions
// const firstCall = (fn) => {
//     fn()
// }

// const secondCall = (fn) => {
//     fn()
// }

// const thirdCall = (fn) => {
//     fn()
// }


// firstCall(() => {
//     console.log("Task1: Taking shower")
//     secondCall(() => {
//         console.log("Task2: Wearing Clothes")
//         thirdCall(() => {
//             console.log("Task3: Wearing Perfume")
//         })
//     })
// })






//2: ......................................Promises...................................
const firstCall = (fn) => {
    return new Promise((resolve, reject) => {
        try {
            // resolve()
        } catch (err) {
            reject()
        }
    })
}

const secondCall = (fn) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(() => {
                fn()
            })
        } catch (err) {
            reject()
        }
    })
}

const thirdCall = (fn) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(() => {
                fn()
            })
        } catch (err) {
            reject()
        }
    })
}

// // firstCall()
// //     .then(() => {
// //         console.log("Taking shower")
// //     }).then(() => {
// //         console.log("Wearing clothes")
// //     }).then(() => {
// //         console.log("Wearing perfumes")
// //     }).catch(e => console.log(e))





// // 3: Async..................................................................................

// const morningRoutine = async () => {
//     try {
//         await firstCall(
//             console.log("Taking Shower")
//         )
//         await secondCall(console.log("Wearing clothes"))
//         await thirdCall(console.log("Wearing Perfumes"))
//     } catch (err) {
//         console.log(err)
//     }
// }

// morningRoutine()

// // const promise = new Promise((resolver, reject)=>{
// //     try{
// //         function resolver () {
// //             console.log("This is Promise")
// //         }
// //         resolver()
// //     }catch(error){
// //         reject()
// //     }
// // })

// // console.log(typeof promise)





// const second = setTimeout(async () => {
//     await console.log("Second")
// }, 3000)



// const syncFunc = async ()=>{
//     console.log("first");
//     console.log(second)

//     const response=  await fetch(apiUrl,options);
//     console.log("response", response)

//     const data=  await response.json();
//     console.log("fourth", data)

//     await console.log("Third");
// }

// syncFunc()