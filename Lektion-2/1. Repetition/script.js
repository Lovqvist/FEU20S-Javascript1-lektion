// CONSOLE

// console.log('Vanligt meddelande');
// console.warn('varningsmeddelande');
// console.error('felmeddelande');


// VARIABLER
// name = 'Joakim';         //Deklarerar någonting globalt. GÖR INTE SÅHÄR
// var name = 'Joakim';     //Deklarerar någontiong globalt. UNDVIK DET HÄR
// let name = 'Joakim';     // Deklarerar någonting lokalt i ett scope. GÖR SÅHÄR
// const name = 'Joakim';   // Deklarerar någpnting lokalt som är skrivskyddat. GÖR SÅHÄR

// let rosaBoll = 100;
// rosaBoll = 50;              // För att ändra ett värde anvbäder vi bara variabelnamnet utan let/const
// console.log(rosaBoll);

// let name = 'Joakim';
// name = 'Jeanette';
// console.log(name);

// let name1 = 'Hans';         // Man kan bara ha en variabel av samma namn i samma scope

//  let number = Number('hej');
//  console.log(number);         // NaN (Not a Number)

// let firstName = 'Joakim';       // variabler ska deklareras med camelCase
// let _private = 'Joakim';        // undantag om vi vill ha en privat variabel som bara lever i ett visst scope


// DATA TYPES
// string, number, boolean, null, undefined, object, array(object)

    // string - till för texter
    // let name = "Joakim";
    let name = 'Joakim';
    // let name = `Joakim`;        //används när vi vill göra en template string och använda placeholders

    // let text = "Använder \"citat\" och 'enkel' fnuttar och variablen " + name + ".";
    // let text = 'Använder "citat" och \'enkel\' fnuttar och variabeln ' + name + '.';
    let text = ` Anväder "citat" och 'enkel' fnuttar och variablen ${name}.`;
    let email = 'joakim.wahlstrom@utb.ecutbildning.se';
    let number = 52;
    let nrString = '35';

    // console.log(text.length);
    // console.log(text.indexOf('och'));
    // console.log(text.lastIndexOf('och'));
    // console.log(text.replace('och', '&'));
    // console.log(text.replaceAll('och', '&'));
    // console.log(text.toLocaleUpperCase());
    // console.log(text.toUpperCase());
    // console.log(text.toLowerCase());
    // console.log(text.concat(name));
    // console.log(text.trim());
    // console.log(text.split(' '));
    // console.log(email.split('@'));
    // console.log(number.toString());




// NUMBER - till för alla typer av nummer, heltal, decimaltal och stora tal.

    // console.log(Number(nrString));

    // number = 1          //GÖR INTE SÅHÄR
    // var number = 1      //UNDVIK
    // let number = 1      // GÖR SÅHÄR
    // const number = 1    //GÖR SÅHÄR

    // let value = null;

    // value = 1;
    // value = 'hej';

    // if(value) {
    //   console.log('hej hej')
    // }

    // console.log(value);

    let value1 = 11;
    let value2 = 5;
    let result;

    // Math operators

    // result = 1 + 3;
    // result = value1 + value2;
    // result = value1 - value2;
    // result = value1 * value2;
    // result = value1 / value2;
    // result = value1 % value2;

    // result += value1;
    // result = result + value1;
    // result -= value1;
    // result *= value1;
    // result /= value1;
    // result %= value1;

    // console.log(result);

    // console.log(Number(true));
    // console.log(Number(false));
    // console.log(Number('123'));
    // console.log(Number('      123'));
    // console.log(Number('123     '));
    // console.log(Number('10.12455'));
    // console.log(Number('1   23     ')); //NaN
    // console.log(Number('10,12455'));    //NaN
    // console.log(Number('joakim'));      //Nan


// BOOLEAN
  // sant eller falskt (true/false) (1/0)
  // let status = true;
  // console.log(status);
  // status = false;
  // console.log(status);

  // if(true) {
  //   console.log('sant')
  // }

// UNDEFINED - när den inte vet vad den är för typ
// returneras av en funktion som inte har en specifik return med ett värde

// let value;
// console.log(typeof value);

// NULL -saknar värde men är definierad
// let value = null;
// console.log(typeof value); // BUGG



//  OBJECT - håller olika typer av data/attribut på en sak

const car = {
  märke: 'Volvo',
  modelName: 'V70',
  ramNummer: 1232345346,
  växellåda: {
    växel: 0,
    växlaUpp() {
      this.växellåda.växel + 1;
    }
  }
}

const user = {
  id: 1,
  firstName: 'Joakim',
  lastName: 'Wahlström',
  email: 'joakim@mail.com',
  status: true
}

const jsonUser = {
  "id": 1,
  "firstName": "Joakim",
  "lastName": "Wahlström",
  "email": "joakim@mail.com",
  "status": true
}

const json = JSON.stringify(user);
// console.log(JSON.parse(json));

// console.log(user.firstName);

let hej = user.firstName;
// console.log(hej);

// destructure
// const { firstName, lastName, status } = user;
// console.log(firstName, lastName, status);

// const { status: isLoggedIn } = user;
// console.log(isLoggedIn);


user.firstName = 'Hans'
// user.address = 'gatan i västerås'
user.address = {
  street: 'gatan',
  nr: 23,
  zip: 72345,
  city: 'västerås'
}

console.log(user)

console.log(`Användaren heter ${user.firstName}, eller kanske ${hej}`);