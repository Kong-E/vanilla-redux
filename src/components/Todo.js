import React from "react";
import { useDispatch } from "react-redux";
import { deleteToDo } from "../store";
import { Link } from "react-router-dom";

const Todo = (props) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(deleteToDo(props.id));
  };

  return (
    <>
      <li>
        <Link to={`/${props.id}`}>{props.text}</Link>
        <button onClick={onClick}>DELETE</button>
      </li>
    </>
  );
};

export default Todo;
