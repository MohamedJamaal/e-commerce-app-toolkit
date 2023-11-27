import React from "react";
import { Button } from "@material-tailwind/react";
import clothes from "../../assets/images/clothes.jpg";
import { useDispatch } from "react-redux";
import { filteredProducts } from "../../features/Slices/ProductsSilce";
import { Link } from "react-router-dom";

function NavigateButtons() {
  const buttons = [
    "Hoodies",
    "Dresses",
    "Suits",
    "Shoes",
    "T-shirt",
    "Jeans",
    "Jackets",
    "Bags",
  ];

  const dispatch = useDispatch();

  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((button, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"filteredProducts/" + button}>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-green-300 duration-300 ease-in-out"
                  onClick={() => dispatch(filteredProducts(button))}
                >
                  {button}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="bg-green-300 p-2 w-[55%] mx-auto rounded-medium">
        <h3 className="text-orange-900 font-inter text-medium font-bold tracking-normal mr-2 leading-none text-center">
          SALE UP TO 50%
        </h3>
      </div>
      <div className="flex justify-center items-center py-4">
        <img
          src={clothes}
          alt="clothes"
          className="h-[600px] w-[70%] rounded-md shadow-lg shadow-gray-600"
        />
      </div>
    </div>
  );
}

export default NavigateButtons;
