const div =document.querySelector('div');
setInterval(()=>{
    let time=new Date().toLocaleTimeString();
    // let current = time.toLocaleTimeString;
    div.textContent= `Current time : ${time}`;

},1000)