import {FC} from 'react';

import BasicProductList from "@/types/virtualized-list/BasicProductList";
import ProductListItem from "@/components/virtualized-list/ProductListItem";

interface ProductListProps {
  products: BasicProductList,
  height: number,
}

const ProductList: FC<ProductListProps> = ({products, height}) => {
  return (
    <div>
      {products.products.map(product => (
        <ProductListItem key={product.id} product={product} height={height}/>
      ))}
    </div>
  );
};

export default ProductList;
