import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import type { NavbarProps } from "../../js/types/props";

export function Navbar({ activePage }: NavbarProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.name}>
        <div>
          <span className="active">K</span>Trade
        </div>
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
            <Link to="/">Inventory</Link>
          </li>
          <li className={activePage === "onSale" ? "active" : ""}>
            <Link to="/on-sale">On Sale</Link>
          </li>
          <li className={activePage === "sold" ? "active" : ""}>
            <Link to="/sold">Sold</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
