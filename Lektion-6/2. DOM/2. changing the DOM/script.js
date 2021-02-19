const div = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const btn = document.querySelector('#btn');

// btn.innerText = 'En knapp'
// document.querySelector('#btn').innerText = 'hej hej'

const changeText = () => {
  div.innerText = 'Ny text!'
}

btn.addEventListener('click', () => {
  div2.style.backgroundColor = '#cecece';
  // div2.classList.add('upper');
  // div2.classList.remove('upper');

  // if(div2.classList.contains('upper')) {
  //   div2.classList.remove('upper');
  //   btn.innerText = 'Gör texten Stor';
  // } else {
  //   div2.classList.add('upper');
  //   btn.innerText = 'Gör texten Liten';
  // }

  // div2.classList.toggle('upper');


  // div2.innerText = `
  // <ul>
  //   <li>asd</li>
  //   <li>asdasf</li>
  //   <li>asasfd</li>
  // </ul>
  // `
  div2.innerHTML += `
  <ul>
    <li>asd</li>
    <li>asdasf</li>
    <li>asasfd</li>
  </ul>
  `

})
