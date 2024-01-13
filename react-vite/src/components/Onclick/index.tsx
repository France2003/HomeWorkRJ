import React, { useState } from "react";
type TTodo ={
    id: number,
    name: string
} 
const ToDoList=[
    {id:1, name:'quet nha'},
    {id:2, name:'Lau nha'},
];
const SimpleCount =()=>{
    // let count =0;
    // const increment = () =>{
    //     count +=1;
    // }
    const [count, setCount] = React.useState<number>(0);
    const [isshow, SetIsShow] = React.useState<boolean>(false);
    const [todos, SetToDos] = useState<TTodo[]>(ToDoList);
    return(
        <>
         <ul>
        {todos.map((todo)=>{
            return(
                    <li key={todo.id}>{todo.name}</li>
            )
        })}
        </ul>
        <button onClick={()=>{
            const newArray = [...ToDoList, {id:3,name:'nau com'}]
            SetToDos(newArray);
        }} className="btn btn-primary">Toogle</button>
            <h2>{count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}
            className="btn">+1</button>
            <br/>
            <button
                onClick={()=>{
                    SetIsShow(!isshow);
                }}
             className="btn">Toogle Content</button>
             {isshow &&(
                <div>
                    Jamie: Tôi biết nhưng khi chúng ta phân tích kể từ thời điểm anh ấy vô địch World Cup thì 
                    Messi đã phải trở lại thi đấu chỉ 1 tuần sau đó.
                    Thêm nữa thì Messi đã không thi đấu 4 tháng nay rồi đấy
                    Neville: Đúng đúng, nhưng căn cứ vào tiêu chí của việc bình chọn ngày hôm nay thì nó là: Đội hình EA của năm 2023. Và như mọi người biết World Cup là của 2022. 
                    Nếu World Cup mà tổ chức ở năm 2023, Messi vào là chắc. Nhưng đội hình năm nay thì không, anh ấy chỉ chơi nửa mùa giải cho PSG và vừa mới chuyển tới Inter Miami. Theo tôi nhớ thì Messi chỉ có được 7 bàn sau khoảng 16 trận cho PSG và cậu ấy còn bị loại khỏi Champions League nữa mà.
                </div>
            )} 1
        </>
    )
};
export default SimpleCount;