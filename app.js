let gameSeq=[];
let userSeq=[];
let colorArr=["yellow","purple","green","red"];
let h3=document.querySelector("h3");
let high=0;
let level=0;
let statGame=false;
document.addEventListener("keypress", function(){
    if(statGame==false)
    {
        statGame=true;
        levelUp();
    }
})

function btnFlash(btn)
{
   let id1= btn.classList.add("white");
    setTimeout(function(){
        btn.classList.remove("white");
    },250)

   
}

 function levelUp()
{
    level++;
   
    h3.innerText=`level ${level}`;
    let ranNum=Math.floor(Math.random()*4);
    let radCol=colorArr[ranNum];
    
    gameSeq.push(radCol);
    let ranBtn=document.querySelector(`.${radCol}`);
     btnFlash(ranBtn);
}

function blueFlash(btn)
{
    btn.classList.add("blue");
   let id1= setTimeout(function(){
        btn.classList.remove("blue");
    },200)
    
}
   function press(){
      let btn=this;
       blueFlash(btn);
      let userCol=btn.getAttribute("id");
      userSeq.push(userCol);
      check(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn)
{
     btn.addEventListener("click",press);
}

 function check(idx){
    if(userSeq[idx]===gameSeq[idx])
    {
       if(userSeq.length==gameSeq.length)
       {
          userSeq=[];
          setTimeout(function()
          {
            levelUp();

          },300)
         

       }
      
    }
    else{
        h3.innerHTML=`Game is over your score is ${level} <br> Press Any Key to Stat `;
        if(high<level)
        {   high=level;
            let h2=document.querySelector("h2");
            h2.innerText=`High Score ${high}`
        }
        level=0;
        statGame=false;
        gameSeq=[];
        userSeq=[];
        let body=document.querySelector("body");
        body.classList.add("red");
        setInterval(function(){
            body.classList.remove("red");
        },250)
        
       }
}
// let i=100;
// while(i>=0)
// {
//     console.log(Math.floor(Math.random()*3));
//     i--;
// }
