import { createContext, useContext } from "react";

export const dataContext = createContext();

export function useFetchData(){
  return useContext(dataContext)
}