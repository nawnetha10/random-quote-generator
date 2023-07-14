import "./styles.css";
import React,{ useState,useEffect} from "react";


const App = () =>{
  const [quote,setquote] = useState(' ');
  const getquote = ()=>{
    fetch( "https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => {
      let randomnum = Math.floor(Math.random()*data.length);
        setquote(data[randomnum]);
    });
  };
  useEffect(()=>{
    getquote();
  },[]);



  return (
    <div className="App">
      <div className = "quotes">
        <p>{quote.text}</p>
      <div className="btncontainer">
        <button onClick={getquote} className ="btn">GetQuote</button> 
    </div>
    </div>
    </div>
  );
}
export default App;

