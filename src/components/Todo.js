import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";

const Todo = (props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteToDo(props.id));
  };
  console.log(props);

  return (
    <>
      <li>
        {props.text}
        <button onClick={onClick}>DELETE</button>
      </li>
    </>
  );
};

export default Todo;
