import { useDispatch } from "react-redux";
import { removeItemFromBasket } from "../features/basket/basketSlice";

export default function BasketItem(props) {
  //console.log(props.basketItem);

  const dispatch = useDispatch();

  return (
    <div>
      <li className="listItem">
        <div className="basketItem">
          <div className="deleteItem" onClick={() => dispatch(removeItemFromBasket({ basketItemId: props.basketItem.id }))}>
            x
          </div>
          <div className="basketImg">
            <img src={`../beer-images/${props.basketItem.img}`} />
          </div>
          <div className="itemInfo">
            <h3>{props.basketItem.name}</h3>
            <div> {props.basketItem.price}dkk</div>
            <div className="itemButtons">
              <button className="minusBtn">-</button>
              <p> {props.basketItem.amount}</p>
              <button className="plusBtn">+</button>
            </div>
          </div>
          <div className="itemTotalPrice">{props.basketItem.totalPrice}dkk</div>
        </div>
      </li>
    </div>
  );
}
