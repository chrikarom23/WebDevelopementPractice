/*

        <div class="card">
            <p>This is the quesion?</p>
            <div class="options">
                <button class="btn btn-success">dfdjkhdf</button>
                <button class="btn btn-success">dfdjkhdf</button>
                <button class="btn btn-success">dfdjkhdf</button>
                <button class="btn btn-success">dfdjkhdf</button>
            </div>
        </div>


*/

let score = 0;
console.log("test");

function questionCard(q, o1, o2, o3, o4, a){
    var qq = document.createElement("div");
    qq.classList.add("card");

    var question = document.createElement("p");
    question.innerText = q;

    var blist = document.createElement("div");
    blist.classList.add("options");

    var but1 = document.createElement("button");
    but1.classList.add("btn");
    but1.classList.add("btn-primary");
    but1.innerText = o1;
    but1.addEventListener("click",()=>{
        if(a=="o1"){
            but1.classList.remove("btn-primary");
            but1.classList.add("btn-success");
            score++;}
            else{
            but1.classList.remove("btn-primary");
            but1.classList.add("btn-danger");
            }
            disButtons(but1,but2,but3,but4);
    })

    var but2 = document.createElement("button");
    but2.classList.add("btn");
    but2.classList.add("btn-primary");
    but2.innerText = o2;
    but2.addEventListener("click",()=>{
        if(a=="o2"){
        but2.classList.remove("btn-primary");
        but2.classList.add("btn-success");
        score++;
        }
        else{
        but2.classList.remove("btn-primary");
        but2.classList.add("btn-danger");
        }
        disButtons(but1,but2,but3,but4);
    })

    var but3 = document.createElement("button");
    but3.classList.add("btn");
    but3.classList.add("btn-primary");
    but3.innerText = o3;
    but3.addEventListener("click",()=>{
        if(a=="o3"){
            but3.classList.remove("btn-primary");
            but3.classList.add("btn-success");
            score++;}
            else{
            but3.classList.remove("btn-primary");
            but3.classList.add("btn-danger");
            }
            disButtons(but1,but2,but3,but4);
    })

    var but4 = document.createElement("button");
    but4.classList.add("btn");
    but4.classList.add("btn-primary");
    but4.innerText = o4;
    but4.addEventListener("click",()=>{
        if(a=="o4"){
            but4.classList.remove("btn-primary");
            but4.classList.add("btn-success");
            score++;}
            else{
            but4.classList.remove("btn-primary");
            but4.classList.add("btn-danger");
            }
        disButtons(but1,but2,but3,but4);
    })

    blist.append(but1,but2,but3,but4);
    
    qq.append(question,blist);

    document.getElementById("container").appendChild(qq);
}

function submitQuiz(){
    var div = document.getElementById("exampleModalLabel");
    div.innerText ="You Scored: "+ score+"/6";
}


const refreshBtn = document.getElementById("reset");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

function disButtons(b1,b2,b3,b4){
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;
    b4.disabled = true;
}