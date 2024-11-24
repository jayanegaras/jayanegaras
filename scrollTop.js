document.addEventListener("DOMContentLoaded", ()=>{
    const scrollTop = document.getElementById('scrollTop');
    scrollTop.addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scrolling effect
          });
    });

});