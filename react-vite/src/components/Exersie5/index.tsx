import { sale } from "../../data/sales"
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
function ProductSale() {
  return (
    <div className="product_sale flex gap-10 m-5 max-w-[100%]">
        {sale.map((sales)=>{
            let discounts =0;
            // discounts.toFixed(2);
            if(sales.price){
                discounts = 100 -(sales.discount *100) / sales.price;
            }
            return(
                <div className="product w-[50%] leading-6">
                    <div className="discounts bg-red-600">
                        {discounts > 0 ? <span>-{discounts}%</span>:null}
                    </div>
                    <img className="w-40 h-40" src={sales.img} alt={sales.name} />
                    <h3 className="pt-5 font-thin text-sm pb-1">{sales.shop}</h3>
                    <hr className="pt-3" />
                    {sales.discount && sales.discount > 0 ?(
                        <div className="price flex gap-2 pt-1">
                            <strong className="text-lime-600 font-sans">${sales.price}</strong>
                            <del className="text-gray-500">${sales.discount}</del>
                            <h4 className="text-red-500">{sales.precent}</h4>
                        </div>
                    ):(
                        <div className="price">
                            <strong> {sales.price}</strong>
                        </div>
                    )}
                    <p className="pt-3 text-cyan-500 font-sans text-sm font-semibold">{sales.name}</p>
                    <div className="star pt-2 pb-2">
                        <button className=" text-yellow-500 flex gap-2"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></button>
                    </div>
                    <div className="rank flex">
                        <div className="border-2 bg-amber-400 w-[150px] h-[10px]">{sales.rank}</div>
                        <div className="border-2 bg-slate-400 w-[30px] h-[10px]">{sales.rank}</div>
                    </div>
                    <p className="text-slate-400 font-sans text-sm">{sales.sold}</p>
                    <h2></h2>
                </div>
            )
        })}
    </div>
  )
}

export default ProductSale