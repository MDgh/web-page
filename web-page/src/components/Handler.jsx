const Hundler = function(e) {
  const event = e.target;
  const elemParent = event.closest('.product-container');

  if (!elemParent) return;
 
  elemParent.childNodes.forEach(i => {
    if (i.className === 'hidden') {
      
      document.querySelectorAll('.active').forEach(i => {
        i.lastChild.classList.remove('show');
        i.lastChild.classList.add('hidden');
        i.closest('.product-container').classList.remove('active')
      });

      i.classList.remove('hidden')
      elemParent.classList.add('active')
      i.classList.add('show')
    } else if (i.className === 'show') {
      i.classList.remove('show')
      elemParent.classList.remove('active')
      i.classList.add('hidden')
    }
  });
  
}

export default Hundler;