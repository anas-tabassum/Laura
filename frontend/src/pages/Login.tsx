import { Link } from "react-router-dom";
import styles from "../assets/Login.module.css"

const Login = () => {
        return (
            <div className={styles.wrapper}>
                <h1 className={`text-4xl ${styles.title}`}>Login</h1>

                <div className={styles.input_container}>
                    <label htmlFor="">Username</label>
                    <input type="text" />
                </div>

                <div className={styles.input_container}>
                    <label htmlFor="">Password</label>
                    <input type="text" />
                </div>

                <button className={styles.submit_btn}>Submit</button>

                <p className={styles.message}>
                    If you do not have an account plese signup 
                    <Link to="/register"> here</Link>
                    </p>
            </div>
        )
}
export default Login;
