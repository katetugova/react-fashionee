import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerInfo}>
                    <div className={`${styles.column} ${styles.column1}`}>
                        <div className={styles.logo}>
                            <img src="/icons/logo.svg" alt="logo" />
                        </div>
                        <div className={styles.aboutBrand}>
                            Cillum eu id enim aliquip aute ullamco anim. Culpa deserunt nostrud excepteur voluptate.
                        </div>
                        <div className="find-us">
                            <div className="find-us-text">Find us here:</div>
                            <div className="find-us-links">
                                <div className="find-us-link">
                                    <a href="">FB</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">TW</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">INS</a>
                                </div>
                                <div className="line"></div>
                                <div className="find-us-link">
                                    <a href="">PT</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.column} ${styles.column2}`}>
                        <div className={styles.title}>About</div>
                        <ul className={styles.customList}>
                            <li className={styles.item}><a href="">About us</a></li>
                            <li className={styles.item}><a href="">Collections</a></li>
                            <li className={styles.item}><a href="">Shop</a></li>
                            <li className={styles.item}><a href="">Blog</a></li>
                            <li className={styles.item}><a href="">Contact us</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.column} ${styles.column3}`}>
                        <div className={styles.title}>Useful links</div>
                        <ul className={styles.customList}>
                            <li className={styles.item}><a href="">Privacy Policy</a></li>
                            <li className={styles.item}><a href="">Terms of use</a></li>
                            <li className={styles.item}><a href="">Support</a></li>
                            <li className={styles.item}><a href="">Shipping details</a></li>
                            <li className={styles.item}><a href="">FAQs</a></li>
                        </ul>
                    </div>
                    <div className={`${styles.column} ${styles.column4}`}>
                        <div className={styles.title}>Newsletter</div>
                        <div className={styles.newsletterText}>
                            Subscribe to be the first to hear about deals, offers and upcoming collections.
                        </div>
                        <div className={styles.newsletterForm}>
                            <form action="">
                                <label htmlFor="input-subscription">
                                    <input
                                        id="input-subscription"
                                        type="email"
                                        placeholder="Enter your email"
                                        name="email"
                                        className={`input-base ${styles.inputNewsletterForm}`} />
                                    <img src="/icons/send.svg" alt="send" className={styles.sendIcon} />
                                </label>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <div>
                        © All right reserved. Fashionee 2020
                    </div>
                    <div className={styles.paymentMethodsContainer}>
                        <div>Payment methods:</div>
                        <div className={styles.paymentMethods}>
                            <div className={styles.paymentMethod}>
                                <img src="/icons/visa.svg" alt="Visa" />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src="/icons/mastercard.svg" alt="Mastercard" />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src="/icons/paypal.svg" alt="PayPal" />
                            </div>
                            <div className={styles.paymentMethod}>
                                <img src="/icons/payoneer.svg" alt="Payoneer" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/images/dots-small.svg" alt="" className={styles.dotsLeft} />
                <img src="/images/dots-10row.svg" alt="" className={styles.dotsRight} />
            </div>
        </footer>
    );
}

export default Footer;