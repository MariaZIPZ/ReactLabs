import axios from 'axios';

import BasicProductList from "@/types/virtualized-list/BasicProductList"

export const getBasicProducts = async (url: string): Promise<BasicProductList> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};