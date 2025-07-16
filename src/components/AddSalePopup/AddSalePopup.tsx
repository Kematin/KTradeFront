import { useState } from "react";
import styles from "./AddSalePopup.module.css";

import { UploadImage } from "../UploadImage/UploadImage";

export function AddSalePopup() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fromValue, setFromValue] = useState<string>("");
  const [toValue, setToValue] = useState<string>("");
  const [comValue, setComValue] = useState<string>("");
  const [countValue, setCountValue] = useState<number>(1);
  const [currency, setCurrency] = useState<"USD" | "RUB">("USD");

  const calculateTotal = (): number => {
    const to: number = parseFloat(toValue) || 0;
    const com: number = parseFloat(comValue) || 0;
    const count: number = countValue || 1;

    const total: number = (to - (to * com) / 100) * count;
    return total;
  };

  const calculateProfit = (): { amount: number; percent: number } => {
    const count: number = countValue || 1;
    const from = (parseFloat(fromValue) || 0) * count;

    const totalAfterCom = calculateTotal();
    const profitAmount = totalAfterCom - from;
    const profitPercent = from > 0 ? (profitAmount / from) * 100 : 0;

    return {
      amount: profitAmount,
      percent: profitPercent,
    };
  };

  const { amount, percent } = calculateProfit();
  const currencySymbol = currency === "USD" ? "$" : "₽";

  return (
    <div className={styles.popup}>
      <header className={styles.header}>
        <UploadImage
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <div className={styles.headerText}>
          <input className={styles.input} placeholder="Name" />
        </div>
      </header>
      <div className={styles.main}>
        <div className={styles.prices}>
          <div className={styles.values}>
            <div className={styles.valuesinputs}>
              <input
                type="text"
                className={styles.input}
                placeholder="From"
                value={fromValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFromValue(e.target.value)
                }
              />
              <input
                type="text"
                id="InputTo"
                className={styles.input}
                placeholder="To"
                value={toValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setToValue(e.target.value)
                }
              />
            </div>
            <div className={styles.priceto}>
              <input
                type="text"
                id="InputCommission"
                className={styles.input}
                placeholder="% Com"
                value={comValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setComValue(e.target.value)
                }
              />
              <span className={styles.totalto}>
                To: {currencySymbol}
                {calculateTotal().toFixed(2)}
              </span>
            </div>
          </div>
          <div className={styles.misc}>
            <select
              className={styles.select}
              value={currency}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setCurrency(e.target.value as "USD" | "RUB")
              }
            >
              <option>USD</option>
              <option>RUB</option>
            </select>
            <input
              type="number"
              className={styles.input}
              placeholder="Count"
              value={countValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCountValue(parseInt(e.target.value))
              }
            />
          </div>
        </div>
        <div className={styles.description}>
          <div className={styles.markets}>
            <select className={styles.select}>
              <option>Steam</option>
              <option>CSMoney</option>
            </select>
            <select className={styles.select}>
              <option>Steam</option>
              <option>CSMoney</option>
            </select>
          </div>
          <div className={styles.profits}>
            <span
              className={`${styles.percent} ${
                percent < 0 ? styles.negative : ""
              }`}
            >
              {percent >= 0 ? "+" : ""}
              {percent.toFixed(2)}%
            </span>
            <span className={styles.profit}>
              {amount >= 0 ? "+" : ""}
              {currencySymbol}
              {Math.abs(amount).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <button className="sale-button"></button>
      </footer>
    </div>
  );
}
