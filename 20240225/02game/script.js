// 가위바위보 게임 만들기
// 버튼을 가지고 온다
// 컴퓨터/나의 선택의 값 공간 정의 + 결과 값 공간 정의
// 내가 버튼을 클릭하면 나의 선택의 영역에 내값 출력하기
// 내가 버튼을 클릭하면 컴퓨터의 값을 랜덤으로 나오게 하기
// 버튼을 클릭해서 나온 컴터값과 나의값 중 승패를 결정하는 값을 정의한다
// 결과를 출력한다

// const userChoice = document.querySelector(".you-choice");
// const computerChoice = document.querySelector(".computer-choice");
// const winner = document.querySelector(".result");
// const buttons = document.querySelectorAll("button");
// const result = ["가위", "바위", "보"];

// const show = (user, computer, message) => {
//   userChoice.innerText = user;
//   computerChoice.innerText = computer;
//   winner.innerText = message;
// };

// const game = (user, computer) => {
//   if (user === computer) {
//     message = "무승부";
//   } else {
//     switch (user + computer) {
//       case "가위보":
//       case "바위가위":
//       case "보바위":
//         message = "사용자 승리!";
//         break;
//       case "가위바위":
//       case "바위보":
//       case "보가위":
//         message = "컴퓨터 승리!";
//         break;
//     }
//   }
//   show(user, computer, message);
// };

// const play = (e) => {
//   const user = e.target.innerText;
//   const randomIndex = Math.floor(Math.random() * 3);
//   const computer = result[randomIndex];
//   game(user, computer);
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", play);
// });

// const userChoice = document.querySelector(".you-choice");
// const computerChoice = document.querySelector(".computer-choice");
// const winner = document.querySelector(".result");
// const buttons = document.querySelectorAll("button");
// const result = ["가위", "바위", "보"];

// const show = (userPick, computerPick, whoWin) => {
//   userChoice.innerText = userPick;
//   computerChoice.innerText = computerPick;
//   winner.innerText = whoWin;
// };

// const game = (userPick, computerPick) => {
//   if (userPick === computerPick) {
//     whoWin = "무승부";
//   } else {
//     switch (userPick + computerPick) {
//       case "가위" + "보":
//       case "바위" + "가위":
//       case "보" + "바위":
//         whoWin = "사용자 승리!";
//         break;
//       case "가위" + "바위":
//       case "바위" + "보":
//       case "보" + "가위":
//         whoWin = "컴퓨터 승리!";
//         break;
//     }
//   }
//   show(userPick, computerPick, whoWin);
// };

// const play = (e) => {
//   const userPick = e.target.innerText;
//   const randomIndex = Math.floor(Math.random() * 3);
//   const computerPick = result[randomIndex];
//   game(userPick, computerPick);
// };

// buttons.forEach((button) => {
//   button.addEventListener("click", (e) => {
//     const userPick = e.target.innerText;
//     const randomIndex = Math.floor(Math.random() * 3);
//     const computerPick = result[randomIndex];
//     if (userPick === computerPick) {
//       whoWin = "무승부";
//     } else {
//       switch (userPick + computerPick) {
//         case "가위" + "보":
//         case "바위" + "가위":
//         case "보" + "바위":
//           whoWin = "사용자 승리!";
//           break;
//         case "가위" + "바위":
//         case "바위" + "보":
//         case "보" + "가위":
//           whoWin = "컴퓨터 승리!";
//           break;
//       }
//     }
//     show(userPick, computerPick, whoWin);
//   });
// });

const userChoice = document.querySelector(".you-choice");
const computerChoice = document.querySelector(".computer-choice");
const winner = document.querySelector(".result");
const buttons = document.querySelectorAll("button");
const result = ["가위", "바위", "보"];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let userPick = e.target.innerText;
    let randomIndex = Math.floor(Math.random() * 3);
    let computerPick = result[randomIndex];
    console.log(computerPick);
    if (userPick === computerPick) {
      whoWin = "무승부";
    } else {
      switch (userPick + computerPick) {
        case "가위" + "보":
        case "바위" + "가위":
        case "보" + "바위":
          whoWin = "사용자 승리!";
          break;
        case "가위" + "바위":
        case "바위" + "보":
        case "보" + "가위":
          whoWin = "컴퓨터 승리!";
          break;
      }
    }
    show(userPick, computerPick, whoWin);
  });
});

const show = (userPick, computerPick, whoWin) => {
  userChoice.innerText = userPick;
  computerChoice.innerText = computerPick;
  winner.innerText = whoWin;
};
