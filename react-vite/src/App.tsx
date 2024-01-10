// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import { FaApple, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
// import { IoIosHeartHalf } from "react-icons/io";
// import ButtonSocial from './components/ButtonSocial'
import './components/Task2/index.css'
// import Attributes from './components/attributes'
import'./components/attributes/attributes.css'
// import VideosList from './components/Video';
import ProjectCv from './components/MyCv';
// import Task1 from './components/Task1'
// import Task2 from './components/Task2'
// import { FaShoppingCart, FaPhone } from "react-icons/fa";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Attributes /> */}
      {/* <Task1 text='Hello World!'></Task1>
      <Task2 icon={<FaShoppingCart />} label="Thêm vào giỏ hàng" />
      <Task2 icon={<FaPhone />} type="button_dark" label="Gọi lại tư vấn" /> */}
      {/* <div className='container'>
        <h1 className="text-3xl font-bold underline ">
          Hello world!
        </h1>
      </div> */}
      {/* <div className="flex flex-col gap-y-5 m-5">
        <ButtonSocial icon={<FaApple />} label="Apple" />
        <ButtonSocial varian="outline" icon={<FaGoogle />} label="Google" />
        <ButtonSocial varian="outline" icon={<FaFacebook />} label="Facebook" />
        <ButtonSocial varian="success" icon={<FaGithub />} label="Github" />
      </div> */}
      {/* <div className='flex justify-center'>
          <VideosList/>
      </div> */}
      <ProjectCv />
    </>
  )
}

export default App;
