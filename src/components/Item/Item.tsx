import styles from "./Item.module.css";
import type { ICSGOItem, ICustomItem } from "../../js/schemas/items";

interface ItemProps {
  item: ICSGOItem | ICustomItem;
  isCsgo?: boolean;
}

export function Item({ item, isCsgo = true }: ItemProps) {
  const csgoItem = isCsgo ? (item as ICSGOItem) : null;

  return (
    <div className={styles.item}>
      <div className={styles.about}>
        <div className={styles.img}>
          <img src={item.image_url} alt={item.name} />
        </div>
        <div className={styles.description}>
          {csgoItem && <span className={styles.type}>{csgoItem.quality}</span>}
          <span className={styles.name} title={item.name}>
            {item.name}
          </span>
        </div>
      </div>

      <p className={styles.price}>
        <b>{item.currency}</b>
        {item.price.toFixed(2)}
      </p>

      <div className={styles.actions}>
        <button className="sale-button" />
        <img src="/images/favorite.svg" alt="Add to favorites" />
        <img src="/images/buffer.svg" alt="Copy to buffer" />
      </div>
    </div>
  );
}
