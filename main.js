window.addEventListener('load', function(e) {
  window.setInterval(keyloader, 2000);
});

let arr = ['GENRE', 'POPULARITY', 'RANKING', 'YEAR-BY'];
let i = 1;
function keyloader() {
  if (i >= arr.length) {
    i = 0;
  }
  let loader = document.querySelector('span.keyload');
  let val = loader.innerHTML;
  loader.innerHTML = arr[i];
  i++;
}