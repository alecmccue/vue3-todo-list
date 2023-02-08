import { createApp } from 'vue'
import './css/style.css'
import './css/main.css'
import App from './App.vue'
import router from './router'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const firebaseConfig = {
    apiKey: "AIzaSyBLTc2qldvdp1FLEGqdlfTfd8K0a1sdfng",
    authDomain: "vue3-todo-list-106ef.firebaseapp.com",
    projectId: "vue3-todo-list-106ef",
    storageBucket: "vue3-todo-list-106ef.appspot.com",
    messagingSenderId: "81066352816",
    appId: "1:81066352816:web:6f35911fa040d99a9a5b75",
    measurementId: "G-6K8YE3S94J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

library.add(faTrashCan, faBars)

createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('Datepicker', Datepicker)
    .mount('#app')

export { auth, db };