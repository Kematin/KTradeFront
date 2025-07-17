export interface SaleRawData {
  countValue: number;
  fromValue: string;
  toValue: string;
  comValue: string;
  sourceMarketplace: string;
  targetMarketplace: string;
  currency: string;
  nameValue: string;
  selectedImage: string | null;
  gameType: string;
  PopupOnClose: () => void;
}

export interface SaleRequestData {
  sale_data: {
    quantity: number;
    purchase_price: number;
    selling_price: number;
    commission: number;
    source_marketplace: string;
    target_marketplace: string;
    currency: string;
  };
  custom_item_data: {
    name: string;
    image_url: string;
    price: number;
    currency: string;
    game_type: string;
  };
}
