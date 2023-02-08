<template>
    <Toolbar />
    <Modal v-if="isModalOpen" @submit="(input, category, date) => addTodo(input, category, date)" @close="isModalOpen = false" />
    <div class="app">

        <section class="create-todo">
            <h3></h3>
            <button class="modalButton" @click="isModalOpen = true">Create a Task +</button>

        </section>

        <section class="todo-list">
            <h2 class="subheader">TO-DO LIST</h2>
            <VueDraggableNext class="list" :list="todos_asc">
                <!-- <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`"> -->
                <div v-for="todo in todos_asc" :class="`todo-item ${todo.done && 'done'}`" :key="todo.content">
                    <font-awesome-icon icon="fa-solid fa-bars" />
                    <label>
                        <input type="checkbox" v-model="todo.done" />
                        <span :class="`bubble ${todo.category}`"></span>
                    </label>

                    <div class="todo-content">
                        <input v-model="todo.content" />
                    </div>

                    <div class="todo-date">
                        {{ todo.date }}
                    </div>

                    <div class="delete-wrapper">
                        <font-awesome-icon icon="fa-solid fa-trash-can" class="delete" @click="removeTodo(todo)"/>
                    </div>
                </div>
            </VueDraggableNext>
        </section>
    </div>
</template>
  
<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import Toolbar from '../components/Toolbar.vue';
import Modal from './Modal.vue';
import { VueDraggableNext } from 'vue-draggable-next'
// import { doc, addDoc, collection } from '@firebase/firestore';
// import { db } from '../main';

const todos = ref([])
const name = ref('')
const isModalOpen = ref(false)

const addTodo = async(input_content, input_category, date) => {
    isModalOpen.value = false
    if (input_content.trim() === '' || input_category === null) {
        return
    }

    todos.value.push({
        content: input_content,
        category: input_category,
        date: date,
        done: false,
    })

    // await addDoc(collection(db, "todo-list"), {
    //     content: input_content,
    //     category: input_category,
    //     date: date,
    //     done: false,
    // });
}

const todos_asc = computed(() => todos.value.sort((a, b) => {
    return b.date - a.date
}))

const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo)
}

watch(todos, newVal => {
    localStorage.setItem('todos', JSON.stringify(newVal))
}, { deep: true })

watch(name, (newVal) => {
    localStorage.setItem('name', newVal)
})

watch(isModalOpen, (newValue) => {
    isModalOpen.value = newValue
})

onMounted(() => {
    name.value = localStorage.getItem('name') || ''
    todos.value = JSON.parse(localStorage.getItem('todos')) || []
})

</script>

<style scoped>
.modalButton {
    background-color: #E0AC00;
    color: black;
    height: 50px;
    width: 400px;
    border-radius: 10px;
    font-size: medium;
}
.modalButton:hover {
    background-color: #F3CF14;
    cursor: pointer;
}

.subheader {
    color: black
}

.todo-date {
    margin-right: 100px;
    color: black;
}

.delete-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
.delete {
    margin-right: 20px;
    cursor: pointer;
    padding: 10px;
    border-radius: 6px;
}
.delete:hover {
    background-color: #E0AC00;
}

</style>
