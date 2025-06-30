//promise
// const f1 = () => {
//   setTimeout(() => {
//     return 5;
//   }, 1000);
// };
// const f2 = (x) => {
//   console.log(x + 6);
// };
// const n = f1();
// f2(n);

// const f1 = () =>
// {
//   return new Promise((resolve,reject) =>{
//     // resolve(5);
//     reject("Somthing went wrong");
//   });
// };
// const f2 = (x) =>{
//   console.log(x+6);
// };
// // f1().then((n) => f2(n));
// f1()
//   .then((n) => f2(n))
//   .catch((err) => console.log(err));


fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) =>res.json())
  .then((data) =>{
    data.forEach((value)=> { //data.forEach() = data.map()
      console.log(value.name +"-" + value.email);
    });
  })
  .catch((err) => console.log(err));

//or
const fetchdata = async()  =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/users")   //awat likhna h to funcn must be async
  const data = await res.json();
   data.forEach((value)=> { //data.forEach() = data.map()
   console.log(value.name +"-" + value.email);
  });
};
fetchdata();