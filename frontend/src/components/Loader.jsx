import React from 'react';
import {ClipLoader} from "react-spinners";

const Loader = ({loading, color}) => {
    const style = {
        display: "block",
        margin: "0 auto",
        borderColor: color ? color: 'gray',
    };


    return (
        <div className={`h-[70vh] flex items-center justify-center ${loading ? "block" : "hidden"}`}>
            <ClipLoader
                loading={loading}
                cssOverride={style}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
};

export default Loader;