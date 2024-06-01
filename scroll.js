const bubble = document.querySelectorAll('.bubble');
const chatin = document.querySelectorAll('.chat');
chatin.forEach((chat) => {
    chat.classList.add('hidden');
});

const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting){
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


bubble.forEach((bub) => {
    
    const now = new Date();
    const hour = String(((now.getHours()) < 10 ? '0' : '' )) + String(now.getHours());
    const minNow = String(((now.getMinutes()) < 10 ? '0': '')) + String(now.getMinutes());
    const timeNow = hour + '.' + minNow;
    const timeChat = document.createElement('span');
    timeChat.textContent = timeNow;
    bub.appendChild(timeChat);


});