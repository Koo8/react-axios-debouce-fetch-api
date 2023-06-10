import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// for axios and debouncing to fetch data

const endPoint = "https://6484b78bee799e321626fa32.mockapi.io/nancy/student";
// using axios and mockapi for react REST API request
function App() {
  const [data, setData] = useState({})
  const [studentdata, setStudentdata] = useState([]);

  const [inputdata, setInputdata] = useState(null);

  // debounce: to settimeout for cleartimeout to debounce the frequent queries to the API
  useEffect(() => {
    const debouncingData = setTimeout(() => {
      getStudentInfo();
    }, 2000);
    console.log('data fetched after 2000 ms passed');
  // must return to remove the timer
    return () => {
      clearTimeout(debouncingData);
    }
  }, [inputdata])
  
  // whenever input change, trigger useEffect to re-render
  const fetchdata = (e) => {
    setInputdata(e.target.value)
  }

  const getInputValue = (name, value) => {
    setData({...data, ...{ [name]: value}})
  }


  // axios.post
  const submitData = (e) => {
    e.preventDefault();
    axios.post(endPoint, data)
      .then(res => console.log(res.data))
      .catch(err => console.err(err))
  }
  // axios.get
  const getStudentInfo = () => {
    axios.get(endPoint).then(res => {
      console.log(`res get is `)
      console.log(res.data)
      const studentdata = res.data;
      setStudentdata(studentdata);
    }).catch(err => console.log(err));
  }

  useEffect(() => {
    getStudentInfo();
  }, [])
  

  return (
    <>
      <input type="text" placeholder="fetching too often?" onChange={fetchdata} />
      <label htmlFor="">Use Debounce to fetch data </label>
      <hr></hr>
      {/* axios GET POST PUT DELETE */}
      <form onSubmit={submitData}>
        <input
          type ="text"
          name="name"
          onChange={(e) => getInputValue(e.target.name, e.target.value)}
        />
        <input
          type="number"
          name="age"
          onChange={(e) => getInputValue(e.target.name, e.target.value)}
        />
        <input
          type="text"
          name="hobbies"
          onChange={(e) => getInputValue(e.target.name, e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <button onClick={getStudentInfo}>Get Student Info</button>
      {studentdata.map(student => {
        return (
          <div className="card">
            
            <span>{student.name} : </span>
            <span>{student.age}</span>
            <span>{student.hobbies}</span>
          </div>
        )
      })}

    </>
  );
}

export default App;
