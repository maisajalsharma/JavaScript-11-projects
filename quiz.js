const form=document.querySelector('#quiz');
const answer={
  q1 :"Don Bradman",
  q2 : "11",
  q3 :"Ashes",
  q4 :"A Hat-Trick",
  q5 :"ICC Cricket World Cup"
}



form.addEventListener('submit',(e)=>{ 
    e.preventDefault();

    const data= new FormData(form);
    let finalscore=0;

    for(let [name,value] of data.entries()){
       if(answer[name]==value){
        finalscore++;
       }
    }
    const result=document.getElementById('out');
    result.textContent=`    Your final Score is ${finalscore} out of 5.`
})

