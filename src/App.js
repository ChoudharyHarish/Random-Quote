import React,{useState} from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Person from "./Person";


function App() {
  const Api = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  const [loading ,setLoading] = useState(true);
  // const [message ,setMessage] = useState("Random");
  const[data,setData] = useState([{
    quoteText:"",
    quoteAuthor:"",
    quoteGenre:""
  }]);
 
 const random = async () => {
  const response = await fetch(Api);
  const result = await response.json();
  setData(result.data);
  // setMessage(result.message);
  setLoading(!false);
};

    
  return (
     <div >
    <Header  random = {random}  title = 'random'/>
    <div className="container">
    {loading ? <h1>Click random to see quote</h1> : <Card quoteText = {data[0].quoteText}/>}
    <Person quoteGenre ={data[0].quoteGenre}  quoteAuthor = {data[0].quoteAuthor}/>
    </div>
    <Footer/>
    </div>
  )
}

export default App;