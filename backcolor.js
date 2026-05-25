
const parent = document.getElementById('parent');
parent.addEventListener('click',(e)=>{             // e genrate all buttons inside parent
       const button=e.target;                      // told what button i click and display
       const body=document.querySelector('body');
       body.style.backgroundColor=button.id;
})