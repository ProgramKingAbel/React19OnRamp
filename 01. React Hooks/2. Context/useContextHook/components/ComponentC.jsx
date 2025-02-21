import { useContext } from "react";
import { Data, Data1 } from "../app";

const ComponentC = () => {
    const userName = useContext(Data);
    const age = useContext(Data1)

  return (
    <div>Candidata Name: {userName} Age: {age} </div>
  )
}

export default ComponentC
