import "./attributes.css"
type TAttItem = {
    label: string
    isActive ?:boolean
}
const AttItem = ({label, isActive=false}:TAttItem) =>{
    const myClass = isActive;
    if(myClass == true){
        'attrs_item attrs_item_actived';
    }else{
        'attrs_item'
    }
    return <span className="myClass">{label}</span>
}
const Attributes = () =>{
    return (
        <div className="attrs_container">
            <span className="attrs_lable">Màu sắc</span>
            <span className="attrs_item attrs_item_actived">Đen</span>
            <span className="attrs_item">Hồng</span>
            <span className="attrs_item">Xanh</span>
        </div>
    );
}
export default Attributes;