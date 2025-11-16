import { Link } from "react-router-dom";
import styles from "../assets/Login.module.css"
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const submitHandler = () => {
        if(username?.length < 3){
            setError("Username must contain atleast 3 chracters")
            return
        }

        if(password?.length < 8){
           setError("Password must contain atleast 8 characters")  
           return   
        }
    }

        return (
            <div className={`${styles.wrapper} login_box`}>
                <h1 className={`text-4xl ${styles.title}`}>Login</h1>

                <div className={styles.input_container}>
                    <label htmlFor="">Username</label>
                    <input type="text" value={username} onChange={e => setUsername(e.target.value)}/>
                </div>

                <div className={styles.input_container}>
                    <label htmlFor="">Password</label>
                    <input type="text" value={password} onChange={e => setPassword(e.target.value)}/>
                </div>

                <button className={styles.submit_btn} onClick={submitHandler}>Login</button>

                <p className={styles.message}>
                    If you do not have an account plese signup 
                    <Link to="/register"> <u>here</u></Link>
                </p>

                <p className={`${styles.error} ${error?.length > 0? 'block' : 'hidden'}` }>{error}</p>
            </div>
        )
}
export default Login;
