
export interface IFoodItem {
    foodId: string;
    label: string;
    nutrients: Record<string, string>;
    foodContentsLabel?: string;
  }
  
export interface IFoodDetails {
    food: IFoodItem;
  }