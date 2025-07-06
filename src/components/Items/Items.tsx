import styles from "./Items.module.css"
import { Item } from "../Item/Item"

export function Items() {
    return (
        <section id="items" className={styles.items}>
            <header className={styles.header}>
                <span className={styles.count}><div className="blocked">Item(-s):</div> 15</span>
                <span className="update-message blocked">Update every 5 minute</span>
            </header>
            <div className="update">
                <img src="/images/update.svg" alt="" />
            </div>
            <div className="items-container">
                <Item />
            </div>
        </section>
    )
}