import { Link } from "react-router-dom";
import styles from "../assets/Login.module.css"
import React from "react";

const Register = () => {
        return (
            <div className={`${styles.wrapper} login_box`}>
                <h1 className={`text-4xl ${styles.title}`}>Register</h1>

                <div className={styles.input_container}>
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>

                <div className={styles.input_container}>
                    <label htmlFor="">Username</label>
                    <input type="text" />
                </div>

                <div className={styles.input_container}>
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>

                <div className={styles.input_container}>
                    <label htmlFor="">Confirm Password</label>
                    <input type="text" />
                </div>

                <button className={styles.submit_btn}>Rgister</button>

                <p className={styles.message}>
                    If youalready have an account plese login 
                    <Link to="/login"> <u>here</u></Link>
                    </p>
            </div>
        )
}
export default Register;
