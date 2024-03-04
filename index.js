console.log('bobbyhadz.com');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const box = document.getElementsByClassName('box')[0];
  // 👇️ hides element (still takes up space on the page)
  box.style.visibility = 'hidden';

  // 👇️ removes the element from the DOM
  // box.style.display = 'none';
});
