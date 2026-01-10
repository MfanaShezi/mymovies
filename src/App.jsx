//React component for the main application
import { useEffect, useState } from 'react'
import './App.css'

const Card=({ title })  =>{

  const [count,setCount] = useState (0) 
  const [hasliked, setHasliked] = useState (false) //not persistent , after reload will change

  useEffect(()  => {
    console.log(`${title} has been ${hasliked ? "liked" : "unliked"}`);
  }, [hasliked, title]) //dependency array;

  useEffect(()  => {
   console.log(`card component mounted`);
  }, []) //component did mount;
  return(
    <div className="card" onClick={() => setCount(count+1)}>

      <h2>{title}  <br/>{count || null}</h2>
      <button onClick={() => setHasliked(!hasliked)}>
        {hasliked ? "Liked" : "Like"}
      </button>

    </div>
  )
}
const App=()  =>{

  return (
    <div className="card-container">
      <h2>Functional arrow component</h2>
      <Card  title="stars wars" rating={5} isCool={true}/>
      <Card  title = "star trek"/>
      <Card  title = "the matrix"/>
    </div>
    
  )
}

export default App
