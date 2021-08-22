import React, { Fragment } from 'react'

const Footer = () => {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <Fragment>
            <footer className="py-1">
                <p className="text-center mt-1">
                    Shop Tech (Low Jin Zhang) - {getCurrentYear()}, All Rights Reserved
                </p>
            </footer>
        </Fragment>
    )

}

export default Footer;