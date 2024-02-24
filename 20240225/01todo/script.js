// 1.todo 값이 입력된 input태그에 공간 정의
// 2.사용자가 클릭할 버튼의 공간 정의
// 3.사용자가 입력한 todo 값 찾아오기
// 4.사용자가 등록 버튼을 클릭했을 때, 이벤트 발생시키기
// 5.사용자가 입력한 값을 출력시킬 수 있는 공간 정의
// 6.ul태그 안에 사용자의 값을 넣어줄 수 있는 li태그 생성
// 7.사용자가 입력한 todo 값을 ul태그안에 출력해주기
// 8.Web API > localStorage 공간 활용해서 todo 값을 저장
// 9.localStorage 저장된 값을 찾아서 ul태그에 출력해주기
// 10.완료버튼을 클릭했을 때, todo값을 localStorage & ul태그 안에서 삭제해주기

const form = document.querySelector("form");
const userText = document.querySelector("#todo");
const btn = document.querySelector("#button");
const ul = document.querySelector("ul");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.innerText = "삭제하기";
  li.innerText = userText.value;
  ul.appendChild(li);
  li.appendChild(delBtn);
  userText.value = "";

  delBtn.addEventListener("click", () => {
    delBtn.parentNode.remove();
  });
});
