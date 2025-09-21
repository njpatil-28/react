// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {
  // const [count, setCount] = useState(0)

  // let obj={
  //   username:"John",
  //   age:30,
  // }
  // let newArr=[1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-white p-4 rounded-xl'>Tailwind Test</h1>
    <Card Number={1} year={2020} imageType="Nature" imageURL="https://images.pexels.com/photos/33470544/pexels-photo-33470544.jpeg"/>
    <Card Number={2} year={2022} imageType="Fire" imageURL="https://images.pexels.com/photos/1368382/pexels-photo-1368382.jpeg?_gl=1*anxutl*_ga*MjA0Njg3NTc2OC4xNzU2MjYyNTk4*_ga_8JE65Q40S6*czE3NTYyNjI1OTgkbzEkZzAkdDE3NTYyNjI1OTgkajYwJGwwJGgw"/>
    <Card Number={3} />
    {/* <Card Number={30} imageType={obj.username} imageURL="https://th.bing.com/th/id/R.5109ba1cf72642b6f68a35f37491b340?rik=K7O6n7sQB%2flV7g&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f36800000%2f-Luffy-monkey-d-luffy-36845039-1280-800.jpg&ehk=QePyEB4V6cBr7rKXkraLr1oH9rovNLHvMEn0RG9%2f1ek%3d&risl=&pid=ImgRaw&r=0"/> */} just for obj used function 
    </>
  )
}

export default App
