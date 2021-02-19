// const getData = async () => {   // en async funktion ger oss alltid ett promise

// }

// const test = getData();
// console.log(test)


const getJson = async (url) => {
  const response = await fetch(url);
  // console.log(response);

  if(response.status !== 200) {
    throw new Error('cant fetch the data')
  }
  const data = await response.json();
  // console.log(data)
  // const response2 = await fetch('todos.json');
  // const data2 = await response2.json();

  // const response3 = await fetch('todos2.json');
  // const data3 = await response3.json();

  // console.log(data, data2, data3)

  return data;

}


// const test = getJson('user.json');
// console.log(test)

getJson('user.json')
  .then(data => console.log(data))
  .catch(err => console.log(err.message))