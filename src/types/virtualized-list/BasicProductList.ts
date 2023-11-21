import BasicProduct from "@/types/virtualized-list/BasicProduct";

export default interface BasicProductList {
  products: BasicProduct[],
  total: number,
  skip: number,
  limit: number
}