import "./index.css";
import "../../fonts/Samim.ttf";
import { FaStar, FaTruckFast } from "react-icons/fa6";

const ProductCard = (props) => {
  //   functions
  function funcReverseString(str) {
    return str.split("").reverse().join("");
  }

  // event handlers
  function handlerSeparateNumbers(e) {
    let seperatedNumber = funcReverseString("" + e);
    let tmpSeperatedNumber = "";

    let j = 0;
    for (let l of seperatedNumber) {
      tmpSeperatedNumber += l;
      j++;
      if (j == 3) {
        tmpSeperatedNumber += ",";
        j = 0;
      }
      console.log(tmpSeperatedNumber);
    }
    seperatedNumber = funcReverseString(tmpSeperatedNumber);
    if (seperatedNumber[0] === ",")
      seperatedNumber = seperatedNumber.replace(",", "");
    return seperatedNumber;
  }

  function handlerPercentage(number) {
    return (number * 7) / 100;
  }

  return (
    <div className="container">
      {!!props.isSpecialSale && <h3 className="specialSale">فروش ویژه</h3>}
      <img src={props.image} />
    

      <h4 className="title">{props.title}</h4>
      <div className="rfContainer">
        <h3 className="rate">
          {" "}
          <FaStar color="#FFBF00" /> {props.rate}
        </h3>
        {!!props.isFreeShipping && (
          <h4 className="isFreeShipping">
            ارسال امروز <FaTruckFast color="blue" size={15} />{" "}
          </h4>
        )}
      </div>
      {!!props.count && props.countData < 10 && (
        <p className="count"> تنها {props.countData} عدد در انبار موجود است</p>
      )}

      
      <div className="offContainer">
       
        <div className="opContainer">
          <span className="price">
            {handlerSeparateNumbers(props.price)} تومان{" "}
          </span>
          <br />
          <strike className="offPrice">
            {props.price - handlerPercentage(props.price)} تومان{" "}
          </strike>
        </div>
        {!!props.off && (
          <h4
            className="off"
            style={{
              background: "red",
              width: "35px",
              border: "6px solid red",
              borderRadius: "50px",
              textAlign: "center",
              color: "white",
            }}
          >
            7%
          </h4>
        )}
      </div>
      <br />
    </div>
  );
};

export default ProductCard;
