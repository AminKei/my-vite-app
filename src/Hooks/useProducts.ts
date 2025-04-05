import { BASEURL, EndPoints } from "../Config";
import { ProductItems } from "../Models/Items";
import axiosInstance from "../axiosInstance";

export const fetchPosts = async (): Promise<ProductItems[]>  => {
  const response = await axiosInstance.get(`${BASEURL}${EndPoints.Item_Post}`);
  return response.data as ProductItems[];
};
