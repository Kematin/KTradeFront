import styles from "./Item.module.css"

export function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.about}>
                <div className={styles.img}><img src="https://community.fastly.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeOaB2qf19F6ueZhW2e2wEt-t2jcytf6dymSO1JxA5oiRecLsRa5kIfkYr-241aLgotHz3-rkGoXuUp8oX57/360fx360f" alt="" /></div>
                <div className={styles.description}>
                    <span className="type">ST | FT | AWP</span>
                    <span className="name">Worm God</span>
                </div>
            </div>
            <p className={styles.price}><b>$</b>5.34</p>
            <button className={styles.sale}></button>
            <div className={styles.actions}>
                <img src="/images/favorite.svg" alt="" className="favorite" />
                <img src="/images/buffer.svg" alt="" className="buffer" />
            </div>
        </div>
    )
}