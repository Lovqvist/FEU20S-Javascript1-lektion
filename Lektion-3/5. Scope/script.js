// SCOPE

/* 
  global scope - accessbar överallt i koden

  local scope - accessbar inom det givna området, innanför ett kodblock {}

*/


let age = 34;     // global scope
// let age = 50;
// let age;

if(true) {
  let name = 'Joakim'     // local scope
  let age = 50;           //skapar en ny lokal age variabel
  // age = 2000;          // Ändrar på den globala age variabeln
  console.log('inne i första kodblocket ', age);
  console.log('inne i första kodblocket ', name);

  if(true) {
    let age = 100;
    let name = 'Hans';
    var globalt = 'var';
    console.log('inne i kodblock 1.2', age, name);
    console.log('inne i kodblock 1.2', globalt);
  }
}

if(true) {
  console.log('inne i kodblock 2', age)
}


console.log('utanför något block', age);
console.log('utanför något block', name);
console.log('utanför något block', globalt);
