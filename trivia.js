let w = document.getElementById("welcome");
let n= document.getElementById("i_name");
let q= document.getElementById("quiz");
q.style.display ="none";


function start(){
    if(n.value !=0 ){
        let nameOfPlayer = document.getElementById("name-player");       
        nameOfPlayer.innerHTML= "Hola,"+ " " + n.value;
        w.style.display = "none";
        q.style.display = "block"; 
    } else {
        alert("Ingresa tu nombre para empezar")
    }
                 
}

function check(){

    let c= 0;
    console.log(c)
    let q1= document.quiz.question1.value;
    let q2= document.quiz.question2.value;
    let q3= document.quiz.question3.value;
    let q4= document.quiz.question4.value;
    let q5= document.quiz.question5.value;
    let quiz = document.getElementById("quiz");
    //let result = document.getElementById("result")
    
    if(q1=="correct"){
        c++
    
    };
    if(q2=="correct"){
        c++
    
    };
    if(q3=="correct"){
        c++
    
    };
    if(q4=="correct"){
        c++
    
    };
    if(q5=="correct"){
        c++
        
    };    
    
    quiz.textContent= `Tu puntuación es `+ ` ` +`${c}`;
    //document.write(c);
}    


