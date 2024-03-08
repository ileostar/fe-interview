const imgs = document.getElementsByTagName('img');
const viewHeight = window.innerHeight || document.documentElement.clientHeight;

let num = 0;

function lazyLoad() {
  for (let i = 0; i < imgs.length; i++) {
    let distance = viewHeight - imgs[i].getBoundingClientRect().top;
    if(distance >= 0) {
      imgs[i].src = imgs[i].getAttribute('data-src');
      num = i+1;
    }
  }
}
window.addEventListener('scroll', lazyLoad, false);