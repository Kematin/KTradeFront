import styles from "./Items.module.css";

import { useState, useEffect } from "react";
import { Item } from "../Item/Item";
import { loadItems } from "../../js/getItems";
import { AddSalePopup } from "../AddSalePopup/AddSalePopup";

import type { ICSGOItem, ICustomItem } from "../../js/types/items";
import type { NavbarProps } from "../../js/types/props";

export function Items({ activePage }: NavbarProps) {
  const [items, setItems] = useState<(ICSGOItem | ICustomItem)[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadItems(setIsLoading, setItems, activePage);
  }, [activePage]);

  const handleRefresh = () => {
    loadItems(setIsLoading, setItems, activePage);
  };

  return (
    <section id="items" className={styles.items}>
      <header className={styles.header}>
        <span className={styles.count}>
          <div className="blocked">Item(-s):</div>
          {items.length}
        </span>
        <span className="blocked">Update per hour</span>
      </header>

      {activePage === "inventory" ? (
        <button
          className={styles.corner}
          onClick={handleRefresh}
          disabled={isLoading}
          aria-label="Refresh items"
        >
          <img
            src="/images/update.svg"
            alt=""
            className={`${styles.updateIcon} ${
              isLoading ? styles.spinning : ""
            }`}
          />
        </button>
      ) : (
        ""
      )}

      {activePage === "onSale" ? (
        <button
          className={styles.corner}
          // TODO
          onClick={handleRefresh}
          disabled={isLoading}
          aria-label="Add items to sale"
        >
          <img
            src="/images/add.svg"
            alt=""
            className={`${styles.updateIcon} ${
              isLoading ? styles.spinning : ""
            }`}
          />
        </button>
      ) : (
        ""
      )}

      <div className={styles.container}>
        {isLoading ? (
          <div className={styles.loading}>Loading items...</div>
        ) : items.length > 0 ? (
          items.map((item) => (
            <Item key={item.id} item={item} isCsgo={"quality" in item} />
          ))
        ) : (
          <div className={styles.empty}>No items found</div>
        )}
      </div>
      <AddSalePopup />
    </section>
  );
}
