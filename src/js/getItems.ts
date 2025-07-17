import { items as initialItems } from "./inventory";
import type { ICSGOItem, ICustomItem } from "./schemas/items";
import type { ActivePage } from "./schemas/props";
import { fetchItems, getCurrencySymbol } from "./api";

export async function loadItems(
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setItems: React.Dispatch<React.SetStateAction<(ICSGOItem | ICustomItem)[]>>,
  activePage: ActivePage
) {
  setIsLoading(true);
  let items: (ICSGOItem | ICustomItem)[];

  if (activePage === "inventory") {
    items = await getInventoryItems();
  } else if (activePage === "onSale") {
    items = await getOnSaleItems();
  } else {
    items = await getSoldItems();
  }

  setTimeout(() => {
    setItems(items);
    setIsLoading(false);
  }, 800);
}

async function getInventoryItems() {
  return initialItems;
}

async function getSoldItems() {
  return initialItems;
}

async function getOnSaleItems(): Promise<(ICSGOItem | ICustomItem)[]> {
  const data = await fetchItems<
    Array<{
      id: number;
      csgo_item: {
        id: number;
        name: string;
        image_url: string;
        price: number;
        quality: string;
        currency: string;
        float_value: number;
        pattern: number;
      } | null;
      custom_item: {
        id: number;
        name: string;
        image_url: string;
      } | null;
      selling_price: number;
      currency: string;
    }>
  >("sale", {
    is_sold: false,
    skip: 0,
    limit: 100,
  });

  return data.map((item) => {
    if (item.csgo_item) {
      return {
        id: item.csgo_item.id,
        name: item.csgo_item.name,
        price: item.csgo_item.price,
        image_url: item.csgo_item.image_url,
        quality: item.csgo_item.quality,
        currency: getCurrencySymbol(item.csgo_item.currency),
        float_value: item.csgo_item.float_value,
        pattern: item.csgo_item.pattern,
        is_void: false,
      } as ICSGOItem;
    } else if (item.custom_item) {
      return {
        id: item.custom_item.id,
        name: item.custom_item.name,
        image_url: item.custom_item.image_url,
        price: item.selling_price || 0,
        currency: getCurrencySymbol(item.currency),
      } as ICustomItem;
    }
    throw new Error("Invalid item: neither csgo_item nor custom_item present");
  });
}
