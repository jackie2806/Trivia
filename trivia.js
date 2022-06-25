let w = document.getElementById("welcome");
let n= document.getElementById("i_name");
let q= document.getElementById("form");


function start(){
    if(n.value !=0 ){
        w.textContent= "Hola,"+" " +n.value+ "!!!";
    }

    //w.style.display= "none";
    
    //w.textContent = q;
           
}

function check(){
    let c= 0;
    let q1= document.quiz.question1.value;
    let q2= document.quiz.question2.value;
    let q3= document.quiz.question3.value;
    let q4= document.quiz.question4.value;
    let q5= document.quiz.question5.value;
    let quiz = document.getElementById("quiz");
    //let result = document.getElementById("result")
    
    if(q1=="Es el valor de la mejor alternativa rechazada"){
        c++
    };
    if(q2=="Satisface directamente una necesidad humana"){
        c++
    };
    if(q3=="Contribuye a aumentar la producción de bienes de consumo"){
        c++
    };
    if(q4=="Es la satisfacción que proporciona a un consumidor el consumo de un bien determinado"){
        c++
    };
    if(q5=="Se produce cuando los planes de los compradores y de los vendedores se hacen compatibles"){
        c++
    };
    
    quiz.textContent= `Tu puntuación es `+ ` ` +`${c}`;
    //document.write(c);
}    

// Todo salió aparentemente bien 

// Otra vez estoy arreglando esto 