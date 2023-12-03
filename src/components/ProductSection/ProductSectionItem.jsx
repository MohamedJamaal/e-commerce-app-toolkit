import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/Slices/CartSlice";

function ProductSectionItem({
  id,
  img,
  text,
  name,
  size,
  price,
  totalPrice,
  color,
}) {
  const dispatch = useDispatch();

  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className=" h-96">
          <img src={img} alt={name} />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
          <div className="flex justify-between items-center pt-4">
            <Typography className="font-medium" textGradient color="red">
              Size :{" "}
              <span className="text-gray-400 text-base font-extralight">
                {" "}
                {defaultSize}
              </span>{" "}
            </Typography>
            <Typography className="font-medium" textGradient color="gray">
              color:{" "}
              <span
                className="rounded-full px-2 ml-2"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Tooltip content="Add to Cart">
            <Button
              size="lg"
              color="gray"
              variant="outlined"
              ripple={true}
              onClick={() =>
                dispatch(
                  addToCart({
                    id: id,
                    name: name,
                    text: text,
                    size: defaultSize,
                    color: defaultColor,
                    price: price,
                    amount: 1,
                    img: img,
                  })
                )
              }
            >
              ADD to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ProductSectionItem;
