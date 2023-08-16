function handleClick(event) {
  const slectedSection = event.target.id;
  let y = document.getElementsByClassName('option-click');
  let x = document.getElementsByClassName('tab-paragraph');
  let z = document.getElementById('partnersReviews');
  let f = document.getElementById('video-partners');
  for (let i = 0; i < x.length; i++) {
    if (x[i].id === slectedSection) {
      x[i].classList.add('active');
      y[i].classList.add('active');
      if (x[i].id === 'Partners') {
        z.style.display = 'block';
        f.style.display = 'none';
      } else {
        z.style.display = 'none';
        f.style.display = 'block';
      }
    } else {
      x[i].classList.remove('active');
      y[i].classList.remove('active');
    }
  }
}
