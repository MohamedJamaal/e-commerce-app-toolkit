import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { singleProduct } from "../../features/Slices/ProductsSilce";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function ProductCard({ id, name, text, img, price, colors }) {
  const dispatch = useDispatch();
  const { type } = useParams();
  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card
        className="flex w-85 mb-10"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader color="blue" className="relative h-96">
          <img src={img} alt="" className="h-full w-full" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h5" color="gray" className="mb-2">
            {name}
          </Typography>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {text}
          </Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="small">{price} $</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {colors?.map((color, index) => {
              return (
                <i
                  key={index}
                  style={{ backgroundColor: color }}
                  className="fas fa-map-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4 "
                />
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
}

export default ProductCard;
