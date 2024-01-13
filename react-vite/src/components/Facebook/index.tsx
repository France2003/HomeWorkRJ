import React from "react";
import { SlLike } from "react-icons/sl";
const [isShow, setIsShow] = React.useState<boolean>(false);
// type TFacebook={
//     lable:string;
//     icon ?: React.ReactDOM
// }
const Facebook =()=>{
    return(
        <>
        <button
          onClick={() => {
            setIsShow(!isShow);
          }}
          className="btn"
        >
          <SlLike />Like
        </button>
        {isShow && (
          <div className="content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
            quos! Ut culpa et atque at minus perspiciatis voluptas necessitatibus!
            Nihil cupiditate aliquam rem asperiores, fugiat necessitatibus
            quisquam quibusdam deleniti incidunt.
          </div>
        )}
      </>
    )
}
export default Facebook;