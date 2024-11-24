import { State, ErrorState } from "./types";

export const fabricValidation = (state: State): ErrorState => {
  const {
    startDate,
    endDate,
    production,
    order,
    china,
    chinaFabrics,
    fabricName,
    majorFabric,
    trims,
    accessories,
  } = state;

  return {
    startDate: startDate === "" ? "Please Enter Start Date" : "",
    endDate: endDate === "" ? "Please Enter End Date" : "",
    production: production === "" ? "Please Enter Production Per Day" : "",
    order: order === "" ? "Please Enter Total Order" : "",
    china: !china ? "Please Select Yes or No" : "",
    chinaFabrics:
      china && chinaFabrics.length === 0 ? "Please Enter China Fabrics" : "",
    fabricName: fabricName.length === 0 ? "Please Enter Fabric Name" : "",
    majorFabric: majorFabric.length === 0 ? "Please Enter Major Fabric" : "",
    trims: trims.length === 0 ? "Please Enter Trims" : "",
    accessories: accessories.length === 0 ? "Please Enter Accessories" : "",
  };
};
