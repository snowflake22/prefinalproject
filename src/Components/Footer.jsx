import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
 return <div>
    <div className="p-5 shadow-lg w-100 top-100 bg-light"
        style={{
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",
            // background:'#151033', 
            // color:'white'
        }}
    >
        <div className='container d-none d-md-flex flex-wrap justify-content-between align-items-top'>
            <span className='navbar-brand btn'>
                <span className='fw-bold ' style={{ color: "blue" }}>
                    Werrgram
                </span>
            </span>
            <ul style={{ listStyleType: "none" }} className="d-none d-md-block">
                <li><b>Company</b></li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <ul style={{ listStyleType: "none" }} className="d-none d-md-block">
                <li><b>Career</b></li>
                <li>Coming Soon</li>
            </ul>
            <div className="d-none d-md-block">
                <b>Follow us</b>
                <div className='d-flex'>
                    <AiFillFacebook size={42} color="blue" />
                    <AiFillInstagram size={42} color="blue" />
                    <AiFillTwitterCircle size={42} color="blue" />
                </div>
            </div>
        </div>
        {/* For Mobile */}
        <div className='d-block d-md-none text-center'>
            <span className='navbar-brand btn'>
                <span className='fw-bold ' style={{ color: "blue" }}>
                    Werrgram
                </span>
            </span>
        </div>
        <div className='text-muted text-center mt-4'>© 2022 Werrgram. All rights reserved.</div>
    </div>
</div>
}

export default Footer;