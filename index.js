

function add_input(button){
    
    const insert=document.querySelector("."+button);
    
    const input_g=document.querySelector("."+button+"-a");
    let last_grade=input_g.value;
    var insert_class=button+"-a";
    insert.innerHTML+=`+<input type='number' placeholder='0-20' value=${last_grade} class=${insert_class}>`;
 
}

function calcMain(out){
    const grade_p=document.querySelector(out);

    
    //parte dos testes -- exam calculations
    const testes= document.querySelectorAll(".input-1-a");
    var testes_avg=Avg(testes);
    
    const teste_div=document.querySelector(".avg-out-1");
    
    const testes_perc=document.querySelector(".avg-out-1 .percent").value;
    teste_div.innerHTML=`Testes<input type="number"  value=${testes_perc} name="" id="" placeholder="75"  class="percent">% x̄=${testes_avg.toFixed(2)}`;

    
    console.log(testes_perc);


    //fichas -- other activieis** correct 
    const fichas=document.querySelectorAll(".input-2-a");
    var fichas_avg=Avg(fichas);
    
    const fichas_div=document.querySelector(".avg-out-2");

    const fichas_perc=document.querySelector(".avg-out-2 .percent").value;
    fichas_div.innerHTML=`Fichas<input type="number" name="" id="" value=${fichas_perc} placeholder="15" class="percent">% x̄=${fichas_avg.toFixed(2)}`;


    //comportamentos --- behaviour

    const comportamentos=document.querySelectorAll(".input-3-a");
    var comp_avg=Avg(comportamentos);
    
    const comp_div=document.querySelector(".avg-out-3");

    const comp_perc=document.querySelector(".avg-out-3 .percent").value;
    comp_div.innerHTML=`Comportamento<input type="number" name="" id="" value=${comp_perc} class="percent" placeholder="20">% x̄=${comp_avg.toFixed(2)}`

    //nota final -- final result

    

    let grade=Math.floor(finalGrade(testes_avg,testes_perc,fichas_avg,fichas_perc,comp_avg,comp_perc));
    var color_grade=gradeColor(grade);
    grade_p.style=`color:${color_grade}`;
    grade_p.innerText="Sua Nota: "+grade;
}

function gradeColor(grade){
    if(grade<10){
        return "red";
    }else{
        return "black";
    }
}
function Avg(array){
    

    
    var total=0;
    var num_items=array.length;
    array.forEach(function(item){
        if(Number.isNaN(parseFloat(item.value))!=true){
            total+=parseFloat(item.value);
        }else{
            total+=0;
            num_items--;
        }
        
        
    })
    
    total=total/(num_items);
    if(Number.isNaN(total)===true){
        return 0;
    }else{
        return total;
    }
    
}

function finalGrade(testeAvg,testePerc,fichasAvg,fichasPerc,compAvg,compPerc,){
    total_perc=toPercentage(testeAvg,testePerc)+toPercentage(fichasAvg,fichasPerc)+toPercentage(compAvg,compPerc);
    return (total_perc*20)/100;
}


function toPercentage(number,percent){
    return (number*percent)/20;
}
