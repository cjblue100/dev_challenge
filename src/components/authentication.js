import { useState, useEffect } from "react";
import "../App.css"
import firedb from "../config/firedb";
import Login from "./login";
import Hero from "./hero";
export default function Authentication() {

    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //errors
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);


    const clearInputs = () => {
        setEmail("")
        setPassword("");
    }

    const clearErrors = () => {
        setEmailError("");
        setPasswordError("");
    }
    const handleLogin = () => {
        clearErrors();
        firedb.auth().signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;

                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;

                    default:
                }
            })
    }

    const handleSignUp = () => {
        clearErrors();
        firedb.auth().createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;

                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;

                    default:
                }
            })
    }


    const handleLogout = () => {
        firedb.auth().signOut();
    }

    const authListener = () => {
        firedb.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }


    useEffect(() => {
        authListener();

    }, [])


    return (
        <div>
            {user ? (
                <Hero handleLogout={handleLogout}></Hero>
            ): (
                <Login email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignUp={handleSignUp}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError} />
            )
            }
            
            
        </div>

    )

}