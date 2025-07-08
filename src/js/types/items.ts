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
}

export interface ICustomItem {
  id: number;
  name: string;
  image_url: string;
  price: number;
  currency: string;
}

export interface IInventoryItem {
  id: number;
  quantity: number;
  game_type: string;
  purchase_price: number;
  selling_price: number;
  source_marketplace: string;
  target_marketplace: string;
  currency: string;
  csgo_item: ICSGOItem | null;
  custom_item: ICustomItem | null;
}
