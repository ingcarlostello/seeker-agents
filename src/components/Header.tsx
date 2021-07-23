import React from "react";

// @Assets
import zoeLogo from "../assets/zoe.png";

const Header = () => {
    return (
        <>
            <div className="bg-gray-50 relative pl-4 py-3 shadow-lg lg:shadow-sm">
                <div>
                    <a href="https://zoefin.com/">
                        <img className="h-8 w-auto sm:h-10" src={zoeLogo} alt="zoe" />
                    </a>
                </div>
            </div>
        </>
    );
};

export default Header;
