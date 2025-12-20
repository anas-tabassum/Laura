import React, {useEffect, useState} from 'react';

const Logout = () => {

    useEffect(() => {
        if(localStorage.getItem("login")){
            localStorage.removeItem("login")
        }
    },[])

    return (<></>);
};

export default Logout;
