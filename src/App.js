
import axios from 'axios'
import { useState,useEffect } from 'react';
import Home from './components/home';


  function App() {
//  const [test,setTest] = useState('')
 
//  useEffect(() => {
//   async function getData(){
//     const resp = await axios.get("http://localhost:5000/test")
//     setTest(resp.data)
//   }
//   getData();
// }, [])

  return (
    <div className="App">
      <header className="App-header">
      <Home></Home>
      </header>
    </div>
  );
}

export default App;
