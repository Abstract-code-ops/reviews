import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App({reviews}) {

  const [index, setIndex] = useState(1)
  const [person, setPerson] = useState({})

  const selection = (id) =>{
    const newPerson = reviews[id - 1]
    console.log(newPerson)
    setPerson(newPerson)
  }

  useEffect(() =>{
    selection(index)
  }, [index])

  const prev = () =>{
    if (index === 1){
      const newIndex = reviews.length
      setIndex(newIndex)
      console.log(index)
    }else{
      setIndex(index - 1)
      console.log(index);
    }
  }

  const next = () =>{
    if (index === reviews.length){
      setIndex(1)
    }else{
      setIndex(index + 1)
    }
  }

  const generateRandom = () =>{
    let newIndex = Math.floor(Math.random() * reviews.length) + 1;
    while (newIndex === index){
    newIndex = Math.floor(Math.random() * reviews.length) + 1;}
    console.log(index, newIndex)
    return newIndex
  }

  const randomize = () =>{
    const newIndex = generateRandom()
    if (newIndex === index){
      randomize()
    }
    setIndex(newIndex)
  }

  const {name, job, image, text} = person

  return (
    <div className="App">
      <header className="App-header">
        <h1>Our Reviews</h1>
        <div></div>
      </header>
      <div className="container">
        <div className="container-img">
          <img src={image} alt="" />
        </div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        <p>{text}</p>
        <div className="change">
          <div className="next-prev">
            <button onClick={prev}>{"<"}</button>
            <button onClick={next}>{">"}</button>
          </div>
          <button className="surprise" onClick={randomize}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
