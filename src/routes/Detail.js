import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { deleteToDo } from "../store";

function Detail() {
  const param = useParams(); //<Route path="/:id" element={<Detail />} /> 이거랑 연결되어 param에 id 출력
  const navigate = useNavigate();
  const toDos = useSelector((state) => state);
  console.log(toDos);
  const { id } = param;
  const detail = toDos.find((toDo) => toDo.id === parseInt(id));
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteToDo(detail.id));
    navigate("/");
  };

  return (
    <>
      <h1>{detail?.text}</h1>
      <h5>Created at: {detail?.id}</h5>
      <button onClick={onClick}>DELETE</button>
    </>
  );
}

export default Detail;
