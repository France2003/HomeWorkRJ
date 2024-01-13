// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Facebook from './components/Facebook';
// import { AiOutlineLike } from "react-icons/ai";
// import { AiFillLike } from "react-icons/ai";
// import { FaApple, FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
// import { IoIosHeartHalf } from "react-icons/io";
// import ButtonSocial from './components/ButtonSocial'
// import './components/Task2/index.css'
// import Attributes from './components/attributes'
// import'./components/attributes/attributes.css'
// import React,{useState} from 'react';
// import ButtonSocial from './components/ButtonSocial';
// import SimpleCount from './components/Onclick';
// import VideosList from './components/Video';
import ProjectCv from './components/MyCv';
import ProductShop from './components/Exersie7';
import ProductList from './components/Exersie6';
import ProductSale from './components/Exersie5';
// import Task1 from './components/Task1'
// import Task2 from './components/Task2'
// import { FaShoppingCart, FaPhone } from "react-icons/fa";
// const handleClick = ()=>{
//   console.log("Dx Click");
// }
// const handleEnter =()=>{
//   console.log("Dx rê Click");
// }
// const handleTV = (chanel :String)=>{
//   console.log(chanel)
// }
// const validateEmail = (email: string) => {
//   return String(email)
//     .toLowerCase()
//     .match(
//       /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//     );
// };
function App() {
  // const [count, setCount] = useState(0)
  // const [isShow, setIsShow] = React.useState<boolean>(false);
  // const [email, setEmail] = React.useState("");
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
      <div>
        <h2 className='text-center text-2xl mt-1'>MyCV</h2>
          <ProjectCv />
      </div>
      <div>
      <h2 className='text-center text-2xl'>Exercise-5</h2>
          <ProductSale/>
        <h2 className='text-center text-2xl mt-1'>Exercise-6</h2>
        <ProductList />
        <h2 className='text-center text-2xl'>Exercise-7</h2>
        <ProductShop />
      </div>


      {/* onClick: Nhấn vào buuton  */}
      {/* onMouseEnter: Rê chuột vào */}
      {/* <div className='m-5'>
        <SimpleCount/>  



        <button onClick={handleClick}
        onMouseEnter={handleEnter}>Login </button>
      </div> */}
      {/* OnKeyDown: Sự kiện bàn phím */}
      {/* <input onKeyDown={()=>{
        console.log('Bạn đã nhập bàn phím');
      }} */}
      {/* // OnChange: Lấy dữ liệu vừa nhập
      onChange={(event)=>{
        console.log(event.target.value);
      }} 
      type="text" 
      placeholder='usename' /> */}

      {/* Form */}
      {/* <form 
      onSubmit={(event)=>{
        event.preventDefault(); // Ngăn form không bị fresh app
        console.log("Ban da submit form");
        // validate form 
          if(email.length == 0){
            console.log("Ban ch nhap Email!");
          }
          if(!validateEmail(email)){
            console.log("Email khong hop le!");
          }else{
            console.log("Email hop le!");
            
          }
      }} */}
       {/* action="" className='m-3'>
        <input onChange={(event)=>{
            console.log(event.target.value);
            setEmail(event.target.value);
        }}
         value={email}  type="text" name='email' placeholder='email' />
        <button className='btn btn-primary' type='submit'>Submit</button>
      </form>
      <button onClick={()=>handleTV('VTV1')}
       className='btn'>VTV1</button>
      <button onClick={()=>handleTV('VTV2')}
       className='btn'>VTV2</button>
      <button onClick={()=>handleTV('VTV3')}
      className='btn'>VTV3</button>

      <ButtonSocial onClick={()=>handleTV('Google')} label='Google'/> */}

      {/* //state */}

      {/* <div className="container mx-auto w-44">
        <button
          className="flex items-center justify-center bg-slate-200 py-1 px-3 w-[100px]  text-slate-300" 
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
         <AiOutlineLike /><span> Thích</span>
        </button>
        {isShow &&  (
          <div className="btnfb">
            <button
          className="flex items-center justify-center bg-slate-200  py-1 px-3 w-[100px] text-sky-500 absolute top-0" 
          onClick={() => {
            setIsShow(!isShow);
          }}
        >
         {isShow ? <AiFillLike /> :<AiOutlineLike/>}<span> Thích</span>
        </button>
        </div>
        )}
      </div> */}
    </>
  )
}

export default App;
