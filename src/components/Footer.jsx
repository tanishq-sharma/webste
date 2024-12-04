function Footer(){
    const currentYear = new Date().getFullYear();

    return(
        <div id="footer" className="footer-text">
            ©{currentYear} Tanishq Sharma
        </div>
    )
}

export default Footer;