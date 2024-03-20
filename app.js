let user=0;
let comp=0;
const msg=document.querySelector("#msg");
const userWin=document.querySelector("#user");
const compWin=document.querySelector("#comp");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const idx= Math.floor(Math.random()*3);
    return options[idx];
}

const showWinner=(result)=>{
    if(result){
        console.log("you won");
        msg.innerText="You Won";
        user++;
        userWin.innerText=user;
    }
    else {
        console.log("you lost");
        msg.innerText="You Lost";
        comp++;
        compWin.innerText=comp;
    }
}


const playGame=(userIn)=>{
    console.log("user input= ",userIn);
    let compChoice=genCompChoice();
    console.log("computer output= ",compChoice);
    let result =true;
    if(compChoice===userIn){
        console.log("match draw!");
        msg.innerText="Match Draw";
    }
    else {
        if(userIn==="rock"){
            if(compChoice==="paper"){
                result=false;
            }
            else result=true;
        }
        else if(userIn==="paper"){
            if(compChoice==="rock"){
                result=true;
            }
            else result=false;
        }
        else{
            if(compChoice==="paper"){
                result=true;
            }
            else result=false;
        }
        showWinner(result);
    }
    
}

const choices=document.querySelectorAll(".class");
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userIn=choice.getAttribute("id");
        playGame(userIn);
    })
})