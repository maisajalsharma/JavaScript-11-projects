const form =document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const Boy=document.getElementById("boy");
    const Girl=document.getElementById("girl");

    const l1=Boy.value.length;
    const l2=Girl.value.length;

    const percent =Math.pow(l1+l2,5)%100;

    document.querySelector('h2').textContent= `Love is : ${percent} %`;
    form.reset();

})