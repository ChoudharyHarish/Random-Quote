import React,{useState} from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import Person from "./Person";


function App() {
  const Api = "https://quote-garden.herokuapp.com/api/v3/quotes/random";
  const [loading ,setLoading] = useState(false);
  // const [message ,setMessage] = useState("Random");
  const[data,setData] = useState([{
    quoteText:"The greatest glory in living lies not in never falling, but in rising every time we fall",
    quoteAuthor:"Nelson Mandela",
    quoteGenre:"life"
  }]);


 
//  const random = async () => {
//   const response = await fetch(Api);
//   const result = await response.json();
//   setData(result.data);
//   // setMessage(result.message);
//   setLoading(!false);
// };

const random = () => {
  setLoading(true);
  fetch(Api)
  .then((response) => response.json())
  .then(result => {
       setData(result.data);
       setLoading(false);
  })
}

    
  return (
     <div >
    <Header  random = {random}  title = 'random'/>
     
     
    {loading ? <div className="loading"><p>Loading Please wait ... </p></div>  : <div className="container">
    <Card quoteText = {data[0].quoteText}/>
    <Person quoteGenre ={data[0].quoteGenre} quoteAuthor = {data[0].quoteAuthor}/>
    </div> }
    <Footer/>
    </div>
  )
}

export default App;