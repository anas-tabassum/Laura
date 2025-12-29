import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("login")){
            localStorage.removeItem("login")
            navigate('/login')
        }

    },[])

    return (<></>);
};

export default Logout;
