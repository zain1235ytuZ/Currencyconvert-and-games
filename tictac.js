//   let boxes = document.querySelectorAll(".box");
//   let btn = document.querySelector(".btn");
//   let  newGameBtn = document.querySelector(".new");
     
//   let turnO = true;
  
//   const winpatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
//   ];
  
//   boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//       if (box.innerText === "") {
//         box.innerText = turnO ? "O" : "X";
//         turnO = !turnO;
//         console.log("Button clicked", box.innerText);
//         checkwinner(); 
//       }
//     });
//   });
//   const resetGame = () => {
//        turnO = true;
//       count = 0;
//       enableBoxes();
//        msgContainer.classList.add("hide");
//      };
//      const disableBoxes=()=>{
//       for(let box of boxes){
//         box.disabled=true;
//       }
//      };
//      const enableBoxes=()=>{
//       for(let box of boxes){
//         box.disabled=false;
//       }
//      };
//   const showwinner=()=>{
//     msg.innerText=' conratulation the winner is ${winner}';
//     msgcontainer.classlist.remove("hide");
//   };

//   const checkwinner = () => {
//     for (let pattern of winpatterns) {
//       let pos1val = boxes[pattern[0]].innerText;
//       let pos2val = boxes[pattern[1]].innerText;
//       let pos3val = boxes[pattern[2]].innerText;
  
    
//       if (pos1val !="" && pos2val !=""  && pos3val !="") {
//         if(pos1val===pos2val && pos2val===pos3val){
         
//           console.log(`Winner is: ${pos1val}`);
//         alert(`Winner is: ${pos1val}`);
//         showwinner(pos1val);
//         resetGame();
//         return;
//         }
//       } 
//       }
    
//     };
//     newGameBtn.addEventListener("click", resetGame);









  let boxes = document.querySelectorAll(".box");
  let newGameBtn = document.querySelector(".new");
  let resetBtn = document.querySelector(".reset");
  let msgContainer = document.querySelector(".msg-container");
  let msg = document.querySelector(".msg");
  
  let turnO = true; 
  
  const winPatterns = [
    [0, 1, 2],
     [0, 3, 6], 
     [0, 4, 8], 
     [1, 4, 7],
    [2, 5, 8],
     [2, 4, 6],
      [3, 4, 5], 
      [6, 7, 8]
  ];
  
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (box.innerText === "") {
        box.innerText = turnO ? "O" : "X";
        turnO = !turnO;
        checkWinner();
      }
    });
  });
  
  const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
  };
  
  const enableBoxes = () => {
    boxes.forEach((box) => {
      box.innerText = "";
      box.disabled = false;
    });
  };
  
  const showWinner = (winner) => {
    msg.innerText = `Congratulations! The winner is ${winner}`;
    msgContainer.classList.remove("hide");
  };
  
  const checkWinner = () => {
    for (let pattern of winPatterns) {
      let [a, b, c] = pattern;
      let pos1 = boxes[a].innerText;
      let pos2 = boxes[b].innerText;
      let pos3 = boxes[c].innerText;
  
      if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
        console.log(`Winner is: ${pos1}`);
        showWinner(pos1);
        disableBoxes();
        return;
      }
    }
  };
  
  const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
  
  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click", resetGame);
 
let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice"); 

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id"); 
    console.log("Choice was clicked:", userchoice);
    
  });
});