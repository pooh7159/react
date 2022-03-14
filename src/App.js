import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === ""){
      return;
    }
    //함수로 set 하게되면 첫번째 인자는 current 갑
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
        <h1>My To Dos ({toDos.length}) </h1>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do.."></input>
          <button>등록</button>
        </form>
        <hr />
        <ul>
          {toDos.map((item, index)=> <li key={index}>{item}</li>) }
        </ul>
    </div>
  );
}
export default App;