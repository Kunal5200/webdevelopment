export interface State {
  startDate: string;
  endDate: string;
  production: string;
  order: string;
  china: boolean;
  chinaFabrics: string[];
  fabricName: string[];
  majorFabric: string;
  trims: string[];
  accessories: string[];
}

export interface ErrorState {
  startDate: string;
  endDate: string;
  production: string;
  order: string;
  china: string;
  chinaFabrics: string;
  fabricName: string;
  majorFabric: string;
  trims: string;
  accessories: string;
}
export interface ProcessOption {
  label: string;
  value: string;
}

export interface FabricData {
  fabricName: string;
  requirement: string;
  unit: string;
  processes: ProcessOption[];
  color: string;
  quantity: string;
  skippedStages: ProcessOption[];
}
