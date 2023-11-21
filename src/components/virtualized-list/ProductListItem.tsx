import {FC} from 'react';

import BasicProduct from "@/types/virtualized-list/BasicProduct";

interface ProductListItemProps  {
  product: BasicProduct;
  height: number
}

const ProductListItem: FC<ProductListItemProps> = ({product, height}) => {
  return (
    <div
      style={{height, overflow: 'hidden'}}
      className={`flex items-center border border-solid border-gray-500 p-4 mb-4 rounded rounded-8 shadow-xl`}
    >
      <div style={{height}} className="w-1/4 mr-4 p-2 flex items-center">
        <img className="h-2/3 object-cover" src={product.thumbnail} alt={product.title}/>
      </div>

      <div className="flex flex-col items-start w-1/4">
        <p
          className="text-gray-500 text-sm">
          # {product.id}
        </p>

        <h2
          className="text-xl text font-bold mb-1">
          {product.title}
        </h2>

        <p
          className="text text-gray-700 mb-1">
          {product.brand}
        </p>

        <p
          className="text-sm text-gray-500 mb-1">
          {product.category}
        </p>
      </div>

      <div className="ml-10 w-1/8">
        <p
          className="text-xl text-gray-700 mb-2">
          {product.rating} ☆
        </p>
      </div>

      <div className="ml-10 w-1/8">
        <p
          className="text-xl text-black mb-2">
          {product.price} $
        </p>
      </div>

      <div className="ml-10 w-1/6">
        <p
          className="text-sm text-gray-700 mb-2">
          Stock: {product.stock}
        </p>
        <p
          className="text-sm text-red-700 mb-2">
          Discount: {product.discountPercentage}%
        </p>
      </div>
    </div>
  );
};

export default ProductListItem;
