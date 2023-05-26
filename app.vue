<script setup>
import { TopNavbar } from "#components";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getPerformance } from "firebase/performance";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCk6v3DvsnIOc-j5RM66Gy5h72cpbXqWhM",
    authDomain: "gray-area-knives-v2.firebaseapp.com",
    projectId: "gray-area-knives-v2",
    storageBucket: "gray-area-knives-v2.appspot.com",
    messagingSenderId: "382382782500",
    appId: "1:382382782500:web:eb53919948c0a2dc06c0b1",
    measurementId: "G-BX57GN8XMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Import Web Vitals for Performance Insights
import { onLCP, onFID, onCLS } from 'web-vitals';
</script>

<template>
    <div>
        <TopNavbar />
        <NuxtPage />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=DM+Serif+Display:ital@0;1&family=DM+Serif+Text:ital@0;1&family=Poppins:ital,wght@1,900&display=swap');
</style>