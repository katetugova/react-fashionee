import React from "react";

function ColorFilter() {
    return (
        <div className="sidebar-item">
            <div className="sidebar-title">Colors</div>
            <div className="sidebar-content">
                <div className="colors">
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="black" name="color" value="black" />
                        <label htmlFor="black" className="color-name">Black</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="blue" name="color" value="blue" />
                        <label htmlFor="blue" className="color-name">Blue</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="red" name="color" value="red" />
                        <label htmlFor="red" className="color-name">Red</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="yellow" name="color" value="yellow" />
                        <label htmlFor="yellow" className="color-name">Yellow</label>
                    </div>
                    <div className="color">
                        <input type="checkbox" className="color-checkbox" id="green" name="color" value="green" />
                        <label htmlFor="green" className="color-name">Green</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorFilter;