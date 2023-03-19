export interface ConstructCartDataByProductOptionsType {
  options?: Record<string, string>;
}

export interface MetaDataType {
  key: string;
  value: string;
  label?: string;
}

export interface LineItemType {
  meta_data?: MetaDataType[];
  product_id: number;
  quantity: number;
}

export interface ShippingLineType {
  method_id: string;
  id: number | string;
  method_title: string;
  total: string;
}