import React, { useState } from "react";

function PromoSection({ applyPromo }) {
    const [promoCodeInput, setPromoCodeInput] = useState("");

    const handleApply = () => {
        applyPromo(promoCodeInput.trim());
    };

    return (
        <div className="promo-code-wrapper">
        <div className="info">
            <div className="title">You Have A Promo Code?</div>
            <div className="description">To receive up-to-date promotional codes, subscribe to us on social
                networks.</div>
        </div>
        <div className="promo-code">
                <input
                    type="text"
                    name="promo-code"
                    className="input"
                    placeholder="Enter promo code"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value)}
                />
            <div className="button-wrapper">
                    <button className="button" type="button" onClick={handleApply}>
                    <img src="/icons/button-arrow.svg" alt="Arrow icon" />
                </button>
            </div>
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
    )
}

export default PromoSection;