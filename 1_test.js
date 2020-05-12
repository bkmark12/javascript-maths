// ***** First session *****
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const runBtn = document.querySelector('#runBtn');
const sum = document.querySelector('#sum');
const jel = document.querySelector('#jel');

document.getElementById("num1").value="";
document.getElementById("num2").value="";

runBtn.addEventListener('click', add);

jel.innerHTML= muvelet();


function add(){
    let firstNum =  parseInt(num1.value);
    let secondNum = parseInt(num2.value);

    switch(muvJ){
        case 0:
            sum.innerHTML= firstNum + secondNum;
        break;
        case 1:
            sum.innerHTML= firstNum - secondNum;
        break;
        case 2:
            sum.innerHTML= firstNum * secondNum;
        break;
        case 3:
            sum.innerHTML= firstNum / secondNum;
        break;
        default: console.log("Something went wrong");
    }

    document.getElementById("sum").style.fontSize="6vh";
    document.getElementById("runBtn").innerHTML="Next";
    runBtn.addEventListener('click',reLoad);

}

function muvelet(){
    muvJ= Math.floor(Math.random()*4);
   
    switch(muvJ){
        case 0:
            return "+";
        break;
        case 1:
            return "-";
        break;
        case 2:
            return "x";
        break;
        case 3:
            return "/";
        break;
    }
}




// ***** Second session *****


const rndNum = document.querySelector("#randNum");
const checkIng2 = document.querySelector("#checkIng2");
const outCome = document.querySelector("#outCome");

// veletlen szamot general 0-tol 3-ig "operatornak"
op = Math.floor(Math.random()*3);
document.getElementById("outCome").value="";

checkIng2.addEventListener('click', isEqual);

outCome.addEventListener("keyup", function(enter){
if (enter.keyCode===13){
    isEqual();
}
});

function reLoad(){
    location.reload();
}

function isEqual(){
    let guess = outCome.value;
    
    if(guess==x+y || guess==x-y || guess==x*y || guess==x/y){
        console.log("jo");
        document.getElementById("outCome").style.backgroundColor="green";
        document.getElementById("checkIng2").innerHTML="Next";
        checkIng2.addEventListener('click',reLoad);
    }else{
        console.log("rossz");
        document.getElementById("outCome").style.backgroundColor="red";
    }
}

// ket veletlen szamot general es x + y stringet adja vissza
function rndGen(){
    x = (Math.floor(Math.random()*100));
    y = (Math.floor(Math.random()*100));
}

// "operatortol fuggoen feladatot general"
switch(op){
    case 0:
            do {
                rndGen();
            }
            while (x+y > 100);  // 100-nal kissebb eredmeny kell
                
            rndNum.innerHTML = x+ " + " +y;
        break;
    case 1:
            do {
                rndGen();
            }
            while (x-y > 100 || x-y < 0);  // 100 es 0 kozti eredmeny kell
                
            rndNum.innerHTML = x+ " - " +y;
        break;
    case 2:
            do {
                rndGen();
            }
            while (x*y > 120 || x>12 || y>12);   // 120-nal kissebb eredmeny kell
                
            rndNum.innerHTML = x+ " x " +y;
        break;
    case 3:
        do {
            rndGen();
        }
        while (x%y != 0 && x/y>12);   //maradek nelkuli es 13-nal kisebb szam kell
            
        rndNum.innerHTML = x+ " / " +y;
        break;
    default: console.log("Not working");
    
}



// ***** Third Session *****

const timesTable = document.querySelector ("#timesTable");
const outCome3 = document.querySelector("#outCome3");
const checkIng3= document.querySelector("#checkIng3");

timesTable.innerHTML=Test();
document.getElementById("outCome3").value="";

function Test(){
    t=[Math.floor(Math.random()*13),Math.floor(Math.random()*13)];
    return t[0] +"x" +t[1];
}

outCome3.addEventListener("keyup", function(enter){
    if (enter.keyCode===13){
        multiplY();
    }
    });

checkIng3.addEventListener('click', multiplY);

function multiplY(){
if (outCome3.value==t[0]*t[1]){
        document.getElementById('outCome3').style.background="green";
        document.getElementById("checkIng3").innerHTML="Next";
        checkIng3.addEventListener('click',reLoad);
    }else{
        document.getElementById('outCome3').style.background="red";
     }
}


// ***** Fourth Session *****

const tesTing = document.querySelector("#tesTing");
const checkIng4 = document.querySelector("#checkIng4");

let aNum4=myFunction()[Math.floor(Math.random()*11)];
let bNum4=myFunction()[Math.floor(Math.random()*11)];
let addNum4 = aNum4 + " + " + bNum4 ;
document.getElementById("tesTing").innerHTML=addNum4;

let a= aNum4+bNum4;

tesTing.addEventListener('click', myFunction);
document.getElementById("outCome4").value="";
checkIng4.addEventListener('click', runIsMatching);

myFunction();

function myFunction(){
    let a=[];
    let min=10;
    let max=20;
    for (i=min; i<=max ; i++){
        rndToArray= Math.floor(Math.random()*(max-min)+min);
        a.push(rndToArray);
        //console.log(a.length + ":" +rndToArray);
    }

    return a;
}

function runIsMatching(){
    isMatching(a);
}
function isMatching(p){
    let guess=document.getElementById("outCome4").value;
    if(guess==p){
        alert("Jo");
    }else{
        alert("Nem talalt");
    }
}




console.log("Vege");