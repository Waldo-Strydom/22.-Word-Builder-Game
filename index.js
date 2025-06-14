let qArr = []
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

let boardBtns = document.querySelectorAll(".boardBtn")

for(let k = 0;k<boardArr.length;k++){
    boardBtns[k].textContent=boardArr[k]
}


}




const qOpenBtn = document.getElementById("qBtn")
qOpenBtn.addEventListener("click", ()=>{
    const listDiv = document.getElementById("questionDiv")
    listDiv.classList.remove("hidden")
    listDiv.classList.replace("closeList","openList")
})

const qCloseBtn = document.getElementById("qClose")
qCloseBtn.addEventListener("click", ()=>{
    const listDiv = document.getElementById("questionDiv")
    listDiv.classList.replace("openList", "closeList")
})


selectQuestion()