import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

const NotFoundPage = () => {

    const navigate = useNavigate();
    const idusers = true;
    const status = "verified";

    return <div style={{ background: "#151033", color: 'white', minHeight:'75vh'}}>
        <div className="container p-5">
            <div className="my-5 p-5">
                <Text fontSize='6xl' className="fw-bold mt-5">404 Not Found</Text>
                <Text fontSize='3xl' className="mb-5">The requested URL was not found on this server.</Text>
            </div>
        </div>
    </div>

}

export default NotFoundPage;