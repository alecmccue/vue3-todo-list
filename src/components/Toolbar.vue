<template>
    <div class="toolbar">
        <div class="toolbar-name">{{ name ? name.split(" ")[0] : 'Unknown' }}'s To-Do List</div>
        <div class="title">McCue Productions</div>
        <button class="toolbar-button" @click="logout()"> Logout </button>
    </div>
</template>

<script setup>
import router from '../router/index.js'
import { auth } from '../main';
import { signOut } from '@firebase/auth';

const name = localStorage.getItem('userName')
const logout = () => {
    signOut(auth).then(() => {
        router.push({ path: '/' })
    })
}
</script>
<style>
.toolbar {
    background-color: #E0AC00;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 1px black;
}

.toolbar-button {
    background-color: transparent;
    border-radius: 12px;
    float: right;
    margin-right: 20px;
    height: 70%;
    width: 150px;
    color: black;
}
.toolbar-button:hover {
    background-color: #F3CF14;
    cursor: pointer;
}

.toolbar-name {
    color: black;
    margin-left: 20px;
}

.title {
    font-family: 'Brush Script MT', cursive;
    font-size: xx-large;
    color: black
}
</style>