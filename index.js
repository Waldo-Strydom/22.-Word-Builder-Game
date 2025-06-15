let qArr = []
let answerArr = []
class Question{
    constructor(answer,question){
        this.an = answer,
        this.qu = question 
    }
}

let cat = new Question("CAT", "I can purr.")
let dog = new Question("DOG", "I'm man's best friend.")
let bee = new Question("BEE", "I make honey.")

qArr.push(cat,dog,bee)

const selectQuestion = ()=>{
    let ran = Math.floor(Math.random()*qArr.length)
    let selectedQ = qArr[ran]

    fillBoard(selectedQ)
}

const fillBoard = (selectedQ)=>{

    let alphabet = ["A", "B", "C", "D", "E",
             "F", "G", "H", "I", "J",
             "K", "L", "M", "N", "O",
             "P", "Q", "R", "S", "T",
             "U", "V", "W", "X", "Y",
             "Z"
]

let boardArr = ["?", "?", "?",
                "?", "?", "?",
                "?", "?", "?"]
            

let answer = selectedQ.an


let i =0
    while(i<3){
        let index = Math.floor(Math.random()*boardArr.length)
        if(boardArr[index]=="?"){
            boardArr[index]=answer[i]
            i+=1
        }
    }

for(let j = 0;j<boardArr.length;j++){
    if(boardArr[j]=="?"){
        let ranLet = Math.floor(Math.random()*alphabet.length)
        boardArr[j]=alphabet[ranLet]
    }
}



for(let k = 0;k<boardArr.length;k++){
    boardBtns[k].textContent=boardArr[k]
}


}

const letterClicked = (selected)=>{
console.log(selected)
    if(selected.classList.contains("clicked")){

    }else{
        selected.classList.add("clicked")
        answerArr.push(selected.textContent)
        displayAnswer()
        checkAnswer()
    }

}

const checkAnswer=()=>{
    console.log("check")
    const answer = document.getElementById("spellOut").textContent
    let correct = false;

   for(let i =0;i<qArr.length;i++){
        if(qArr[i].an==answer){
            correct=true;
            correctFun(i)
            return;
        }else{
            correct=false
        }
   }

  
   
}

const correctFun=(answerIndex)=>{

    const listItems= document.querySelectorAll(".qIt")
    
    boardBtns.forEach((e)=>{
    if(e.classList.contains(""))
})

    listItems[answerIndex].classList.add("done")

    openFun()

    qArr.splice(answerIndex,1)

    selectQuestion()




}

const displayAnswer=()=>{
    const output = document.getElementById("spellOut")
    let ansString = ""
    answerArr.forEach((e)=>{
        ansString+=e
    })
   
    output.textContent=ansString
}

const openFun = ()=>{
    const listDiv = document.getElementById("questionDiv")
    listDiv.classList.remove("hidden")
    listDiv.classList.replace("closeList","openList")
}

const closeFun = ()=>{
    const listDiv = document.getElementById("questionDiv")
    listDiv.classList.replace("openList", "closeList")
}

const qOpenBtn = document.getElementById("qBtn")
qOpenBtn.addEventListener("click", openFun)

const qCloseBtn = document.getElementById("qClose")
qCloseBtn.addEventListener("click", closeFun)

const boardBtns = document.querySelectorAll(".boardBtn")
boardBtns.forEach((e)=>{
    e.addEventListener("click",()=>{
        letterClicked(e)
    })
})


selectQuestion()