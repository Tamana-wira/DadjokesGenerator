let btnE=document.getElementById("btn");
let jokeE=document.getElementById("Jokes");
// console.log("jokeE")


const apiKey="8H4kW0jAAkNQjLP3/rfBQw==sJkUWjfKlUvALJU3";

const options={
    method:"GET",
    Headers:{
        'X-Api-Key':"apiKey/rfBQw==sJkUWjfKlUvALJU3",

    },
   
};
const apiUrl="https://api.api-ninjas.com/v1/dadjokes?limit=1";
getjoke=async()=>{
    const response= await fetch(apiUrl,options);
    const data=await response.json();
    console.log(data)
}


btnE.addEventListener("click",  getjoke());