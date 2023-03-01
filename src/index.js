import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

// state는 바뀌는 코드를 말함

// data를 modify하는 function, 오직 얘만 데이터 수정 가능
// state initializing
const countModifier = (count = 0, action) => {
  console.log(count, action);
  if (action.type === "ADD") {
    return count + 1;
  } else if (action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
  // return하는 건 너의 어플리케이션의 data가 됨
};

// store는 data를 저장하는 곳
// createStore는 reducer 요구
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

// countModifier(currentState = 0, {type: "ADD"})
const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
};

const handleMinus = () => {
  countStore.dispatch({ type: "MINUS" });
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
