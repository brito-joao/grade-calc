

function add_input(button){
    
    const insert=document.querySelector("."+button);
    console.log(insert);
    const input_g=document.querySelector("."+button+"-a");
    let last_grade=input_g.value;
    insert.innerHTML+=`+<input type='number' placeholder='0-20' value=${last_grade} class=${button}>`;
    
}

function calc(out){
    const grade_p=document.querySelector(out);
    let grade=Math.floor(Math.random()*20);
    if(grade<10){
        grade_p.style="color:red";
    }else{
        grade_p.style="color:black";
    }
    grade_p.innerText="Sua Nota: "+grade;
}