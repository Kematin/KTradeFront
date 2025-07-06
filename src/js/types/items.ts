export interface ICSGOItem {
  id: number;
  name: string;
  price: number;
  image_url: string;
  quality: string;
  currency: string;
  float_value: number;
  pattern: number;
  is_void: boolean;
};

export interface ICustomItems {
  id: number;
  name: string;
  price: number;
  image_url: string;
  currency: string;
}