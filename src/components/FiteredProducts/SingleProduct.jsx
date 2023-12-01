import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/Slices/CartSlice";

function SingleProduct() {
  const product = useSelector((state) => state.products.singleProduct);
  console.log(product);
  const productSize = product[0].size ? product[0].size[0] : "";
  const productColor = product[0].color[0];

  const { id } = useParams();
  const [size, setSize] = useState(productSize);
  const [color, setColor] = useState(productColor);
  console.log(size);

  const dispatch = useDispatch();
  return (
    <div>
      {product
        .filter((prod) => prod.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center pt-10">
              <div className="pl-44 grow-[2]">
                <img
                  className="h-[850px] rounded-lg"
                  src={item.img}
                  alt={item.name}
                />
              </div>
              <div className="grow-[3]">
                <div className="max-w-lg">
                  <h5 className="text-2xl font-inter font-bold tracking-normal leading-none">
                    {item.name}
                  </h5>
                  <p className="text-orange-700 pt-5 text-2xl font-inter font-bold tracking-normal leading-none">
                    15% OFF
                  </p>
                  <p className="text-2xl pt-5 text-gray-700 font-inter font-bold tracking-normal leading-none">
                    {item.text}
                  </p>
                  <div className="pt-5">
                    {item.size ? (
                      <div className="">
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          className="focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm text-gray-900 border-gray-300 bg-gray-50 border block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="size"
                          id="size"
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                        >
                          {item.size.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div>
                        <label
                          htmlFor="size"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          className="focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm text-gray-900 border-gray-300 bg-gray-50 border block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          name="size"
                          id="size"
                          disabled={true}
                          value={size}
                          onChange={(e) => setSize(e.target.value)}
                        >
                          {item?.size?.map((item, index) => (
                            <option key={index} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                  <div className="pb-5">
                    <label
                      htmlFor="color"
                      className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Pick a Color
                    </label>
                    <select
                      className=" focus:border-blue-500 focus:ring-blue-500 rounded-lg text-sm text-gray-900 border-gray-300 bg-gray-50 border block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      name="color"
                      id="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    >
                      {item.color.map((color, index) => (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>
                  <Tooltip
                    className="pt-5"
                    content="Add to Cart"
                    placement="bottom"
                  >
                    <Button
                      className="pt-5"
                      color="gray"
                      size="lg"
                      ripple={true}
                      variant="outline"
                      onClick={() =>
                        dispatch(
                          addToCart({
                            id: item.id,
                            price: item.price,
                            amount: 1,
                            img: item.img,
                            text: item.text,
                            totalPrice: item.totalPrice,
                            name: item.name,
                            size: size,
                            color: color,
                          })
                        )
                      }
                    >
                      ADD to Cart
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default SingleProduct;
