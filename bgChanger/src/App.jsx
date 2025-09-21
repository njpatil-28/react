import { useState } from 'react'
function App() {
  const [color, setcolor] = useState("black")

  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        <div className="fixed text-2xl font-medium text-white flex items-center justify-center shadow-lg bg-black bg-opacity-50 rounded-full px-4 py-2 bottom-16 inset-x-0">Click below buttons to change the color</div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-x-2 gap-y-1 md:gap-x-4 md:gap-y-2">
          <div className="fixed flex justify-center items-center shadow-lg gap-3 bg-white px-2 py-2 rounded-3xl ">
            <button onClick={()=> setcolor('red')} className="outline-none px-4 text-white shadow-md rounded-full" 
            style={{backgroundColor:"red"}} >Red</button>
            <button onClick={()=> setcolor('yellow')} className="outline-none px-4 text-white shadow-md rounded-full" 
            style={{backgroundColor:"yellow"}} >yellow</button>
            <button onClick={()=> setcolor('violet')} className="outline-none px-4 text-white shadow-md rounded-full" 
            style={{backgroundColor:"violet"}} >violet</button>
            <button onClick={()=> setcolor('blue')} className="outline-none px-4 text-white shadow-md rounded-full" 
            style={{backgroundColor:"blue"}} >blue</button>
            <button onClick={()=> setcolor('green')} className="outline-none px-4 text-white shadow-md rounded-full" 
            style={{backgroundColor:"green"}} >green</button>
            <button onClick={()=> setcolor('orange')} className="outline-none px-4 text-white shadow-md rounded-full" 
            style={{backgroundColor:"orange"}} >orange</button>
            <button onClick={()=> setcolor('white')} className="outline-none px-4 text-black shadow-md rounded-full" 
            style={{backgroundColor:"white"}} >white</button>
          </div>
        </div> 
      </div>
  )
}

export default App
