import styles from "./Navbar.module.css"

interface NavbarProps {
    activePage?: "inventory" | "onSale" | "sold";
}

export function Navbar({activePage}: NavbarProps) {
    return (
        <nav className={styles.nav}>
            <div className={styles.name}>
                <div><span className="active">K</span>Trade</div>
                <div className={styles.steamuser}>Kem</div>
            </div>
            <div className={styles.links}>
                <ul className={styles.group}>
                    <div className="blocked">Soon</div>
                    <div className="blocked">Soon</div>
                    <div className="blocked">Soon</div>
                </ul>
                <ul className={styles.group}>
                    <li className={activePage === "inventory" ? "active" : ""}>
                        Inventory
                    </li>
                    <li className={activePage === "onSale" ? "active" : ""}>
                        On Sale
                    </li>
                    <li className={activePage === "sold" ? "active" : ""}>
                        Sold
                    </li>
                </ul>
            </div>
        </nav>
    )
}