"use client"

import {FC, useState, useEffect, useRef} from "react";

import BasicProductList from "@/types/virtualized-list/BasicProductList";
import {getBasicProducts} from "@/api/productService";
import {apiUrlForVirtualizedList, countItemsInVirtualizedListPerPage, defaultRowHeight} from "@/helpers/constants";
import ProductList from "@/components/virtualized-list/ProductList";
import VirtualizedListInputs from "@/components/virtualized-list/VirtualizedListInputs";
import InputNumberState from "@/types/inputs/InputNumberState";
import Loader from "@/components/loaders/Loader";
import InputStringState from "@/types/inputs/InputStringState";
import Pagination from "@/components/pagination/Pagination";

const VirtualizedList: FC = () => {
  const [productList, setProductList] = useState<BasicProductList | null>(null);

  // Inputs
  const [goToProduct, setGoToProduct] = useState<number>(1);
  const [limitPerPage, setLimitPerPage] = useState<number>(countItemsInVirtualizedListPerPage);
  const [rowHeight, setRowHeight] = useState<number>(defaultRowHeight);

  const inputsNumberList: InputNumberState[] = [
    {value: goToProduct, setNumber: setGoToProduct, minValue: 1, maxValue: productList?.total, label: "Go to"},
    {value: limitPerPage, setNumber: setLimitPerPage, minValue: 1, maxValue: productList?.total, label: "Limit per page"},
    {value: rowHeight, setNumber: setRowHeight, minValue: 60, maxValue: 10000, label: "Row height"},
  ];

  const [search, setSearch] = useState<string>('');
  const previousSearch = useRef('');
  const searchInput: InputStringState = {
    value: search, setValue: setSearch, label: "Search", maxLength: 50
  }

  const [paginationEnabled, setPaginationEnabled] = useState<boolean>(false);

  useEffect(() => {
    const myAbortController = new AbortController();

    if (previousSearch.current !== search) {
      previousSearch.current = search;

      setGoToProduct(1);
      setLimitPerPage(countItemsInVirtualizedListPerPage);
    }

    const fetchData = async () => {
      const limit: string = `limit=${limitPerPage || countItemsInVirtualizedListPerPage}`;
      const skip: string = `skip=${goToProduct - 1 || 0}`;
      const q: string = `q=${`${search}` || ''}`;

      const url: string = `${apiUrlForVirtualizedList}/products/search?${q}&${limit}&${skip}`;

      try {
        const result = await getBasicProducts(url);
        setProductList(result);

        setPaginationEnabled(true);
      } catch (error) {
        alert("Cannot get data for view");
      }
    };

    const timeout = setTimeout(() => {
      setProductList(null);
      setPaginationEnabled(false);

      fetchData();
    }, 800);

    return () => {
      clearTimeout(timeout);
      myAbortController.abort();
    };
  }, [goToProduct, limitPerPage, search]);

  return (
    <>
      <VirtualizedListInputs inputNumbersList={inputsNumberList} searchInput={searchInput}/>

      <Pagination perPageRecords={limitPerPage}
                  totalPageRecords={productList ? productList.total : 0}
                  setSkip={setGoToProduct}
                  enabled={paginationEnabled}
      />

      {productList
        ?
        <>
          <ProductList products={productList} height={rowHeight}/>
        </>
        : <Loader/>
      }
    </>
  );
};

export default VirtualizedList;