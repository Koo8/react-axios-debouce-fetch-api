import { useEffect, useState } from "react";
import "./App.css";

// form submission
function App() {
  const [data, setData] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    console.log(data);
  };

  const getInput = (value, name) => {
    setData({ ...data, ...{ [name]: value } });
  };
  return (
    <form action="" onSubmit={submitForm}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <input
          type="number"
          name="age"
          placeholder="age"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <input
          type="date"
          name="date"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <input
          type="file"
          name="file"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <input
          type="time"
          name="time"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />
        <input
          type="range"
          name="range"
          onChange={(e) => getInput(e.target.value, e.target.name)}
        />

        <button type="submit">Submit</button>
        <button type="reset"> Reset</button>
      </div>
    </form>
  );
}

export default App;
