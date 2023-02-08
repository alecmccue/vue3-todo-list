<template>
    <router-view></router-view>
    <div id="app">
        <div id="login">
            <div id="description">
                <h1>TO-DO List</h1>
                <p>Project by Alec McCue</p>
            </div>
            <div id="form">
                <div>
                    <a href="../Alec-McCue-Resume-2023.pdf" download>Download my resume</a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/alecmccue/" target="_blank">Check me out on LinkedIn</a>
                </div>
                <button @click="signInWithGoogle">Sign in with google</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./main"
import router from "./router/index.js";

const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            localStorage.setItem('userName', result.user.displayName)
            router.push({ path: "/home" })
        })
}
</script>

<style scoped>
* {
    box-sizing: border-box;
    font-family: Verdana, sans-serif;
}

html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
}

div#app {
    width: 100%;
    height: 100%;
}

div#app div#login {
    align-items: center;
    background-color: #e2e2e5;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}

div#app div#login div#description {
    background-color: #ffffff;
    width: 315px;
    padding: 35px;
}

div#app div#login div#description h1,
div#app div#login div#description p {
    margin: 0;
}

div#app div#login div#description p {
    font-size: 0.8em;
    color: #95a5a6;
    margin-top: 10px;
}

div#app div#login div#form {
    background-color: #34495e;
    border-radius: 5px;
    box-shadow: 0px 0px 30px 0px #666;
    color: #ecf0f1;
    width: 260px;
    height: 300px;
    padding: 50px 35px 50px 35px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

div#app div#login div#form label,
div#app div#login div#form input {
    outline: none;
    width: 100%;
}

div#app div#login div#form label {
    color: #95a5a6;
    font-size: 0.8em;
}

div#app div#login div#form input {
    background-color: transparent;
    border: none;
    color: #ecf0f1;
    font-size: 1em;
    margin-bottom: 20px;
}

div#app div#login div#form ::placeholder {
    color: #ecf0f1;
    opacity: 1;
}

div#app div#login div#form button {
    background-color: white;
    color: black;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    padding: 10px;
    transition: background-color 0.2s ease-in-out;
    width: 100%;
}

div#app div#login div#form button:hover {
    background-color: #eeeeee;
}

@media screen and (max-width: 600px) {
    div#app div#login {
        align-items: unset;
        background-color: unset;
        display: unset;
        justify-content: unset;
    }

    div#app div#login div#description {
        margin: 0 auto;
        max-width: 350px;
        width: 100%;
    }

    div#app div#login div#form {
        border-radius: unset;
        box-shadow: unset;
        width: 100%;
    }

    div#app div#login div#form form {
        margin: 0 auto;
        max-width: 280px;
        width: 100%;
    }
}
</style>