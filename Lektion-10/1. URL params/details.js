const output = document.querySelector('#output');


const getPost = async () => {
  let url = 'https://jsonplaceholder.typicode.com/posts/1';

  const res = await fetch(url);
  const post = await res.json();

  output.innerHTML = `
  <div class="card p-3 mt-5">
    <div class="text-center mb-4">
      <h3>${post.title}</h3>
    </div>
      <p>${post.body}</p>
  </div>
  `
}

window.addEventListener('DOMContentLoaded', () => {
  getPost();
})