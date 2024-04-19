
import './App.css'

function App() {
  
function randomDoors(games){
let doors=[false, false ,true]
games = 10000
let changeDoor=0
let notChangeDoor=0
    for(let i=0;i<games;i++){
    let choice = Math.floor(Math.random()*3)   
       
    if(doors[choice]) notChangeDoor++; 
    
    
    if(!doors[choice]) changeDoor++; 

    }
    console.log("notChangeDoor: ", notChangeDoor);
    console.log("changeDoor: ", changeDoor)
  }

  randomDoors()


  return (
    <>
      
    </>
  )
}

export default App
