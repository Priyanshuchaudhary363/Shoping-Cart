import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="w-[full] h-[full] flex justify-center items-center pt-4 md:flex-row sm:flex-col ">

      <div className="flex lg:flex-row md:flex-col sm:flex-col lg:justify-center lg:items-start md:justify-center md:items-center
      sm:justify-center sm:items-start
       text-lg space-x-12 
      space-y-5 border-b-2 border-b-green-700 pb-6 pt-5">

        <div className="flex w-[70%] justify-between items-start ">
          <img src={item.image} className="w-[full] h-[full]" />
        </div>

        <div className="flex flex-col justify-between pt-5 gap-5">
          <h1 className="font-extrabold ">{item.title}</h1>
          <h1 className="">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>

          <div className="flex justify-between items-center font-bold text-xl">
            <p>${item.price}</p>
            <button className="flex justify-center items-center text-red-700 bg-red-300 font-extrabold 
            text-2xl rounded-full pt-1 pr-1 pl-1 pb-1"
              onClick={removeFromCart}>
              <AiFillDelete />
            </button>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
