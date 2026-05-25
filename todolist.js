const form= document.querySelector('form');
const alltask =document.querySelector('#alltask');
const input=document.querySelector('#task');

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const text =input.value.trim();

    if(text=="")
        return;


    const parent =document.createElement('div');
    parent.style.marginTop="20px";

    const task = document.createElement('span'); 
    task.textContent = text;
    task.style.marginRight = "20px";
    // Optional: Add some basic styling to the task text
    task.style.fontSize = "30px";
    task.style.minWidth = "200px"; // Ensures spacing for alignment

    const deletebutton = document.createElement('button');
    deletebutton.textContent="Delete";
    deletebutton.style.width="70px"
    deletebutton.style.height="30px"

    const donebutton = document.createElement('button');
    donebutton.textContent="Done";

    donebutton.style.marginRight ="10px";
    donebutton.style.width="90px"
    donebutton.style.height="30px"


    parent.append(task, donebutton, deletebutton);

    alltask.append(parent);

    deletebutton.addEventListener('click',()=>{
        parent.remove();
    })
    

    donebutton.addEventListener('click',()=>{
        task.style.textDecoration='line-through';
        task.style.color='black';
    })

    form.reset();


})