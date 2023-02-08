<template>
  <div class="modal-overlay">
    <div class="modal">
      <div class="exit-modal" @click="this.$emit('close')">X</div>
      <h2>Create a task</h2>
      <input class="create-todo" placeholder="Enter a task name" v-model="input_content" />

      <h3 class="modal-header">Category</h3>
      <div class="category-date-grid">
        <div class="select-grid">
          <label class="select-box">
            <button 
              @click="input_category = 'personal'"
              :style="[input_category == 'personal' ? { 'background-color': '#E0AC00' } : '']"
              class="category-button personal">
              Personal
            </button>
          </label>

          <label class="select-box">
            <button 
              @click="input_category = 'school'"
              :style="[input_category == 'school' ? { 'background-color': '#E0AC00' } : '']"
              class="category-button school">
              School
            </button>
          </label>
        </div>
        <h3 class="modal-header">Date</h3>
        <Datepicker class="datepicker" v-model="date" :dark="true"/>
      </div>

      <!-- Imported from https://codepen.io/emared/pen/RYgbaJ -->
      <div id="wrapper">
        <a href="#" class="my-super-cool-btn"
          @click="() => { this.$emit('submit', input_content, input_category, getDate()) }">
          <div class="dots-container">
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
          <span>Create</span>
        </a>
      </div>

    </div>
    <div class="close">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../css/circleButton.css'
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import moment from 'moment'

const input_content = ref('')
const input_category = ref(null)
const date = ref()

const getDate = () => {
  return moment(date.value).format('dddd MMMM Do, h:mm a')
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: #3e4444;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 45px 45px;
  border-radius: 20px;
}

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
}

.check {
  width: 150px;
}

h2 {
  font-weight: 500;
  font-size: 28px;
  color: #E0AC00
}

h3 {
  font-weight: 200;
  font-size: 18px;
  color: #E0AC00
}

p {
  font-size: 16px;
  margin: 20px 0;
}

.category-button {
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 8px;
  border-width: 0px;
}

.category-button:hover {
  opacity: 0.75;
}

.personal {
  background-color: #666666;
}

.school {
  background-color: #666666;
}

.create-todo {
  appearance: none;
  border: none;
  outline: none;
  cursor: initial;
  display: block;
  width: 100%;
  font-size: 1.125rem;
  padding: 15px;
  color: white;
  background-color: #666666;
  border-radius: 0.5rem;
  margin-top: 10px;
}

.select-box {
  float: left;
  width: 100%;
}

.select-grid {
  display: flex;
  height: auto;
  flex-direction: row;
  width: 100%;
}

.category-label {
  margin-left: 10px;
}

.exit-modal {
  position: relative;
  float: right;
  margin-top: -35px;
  margin-right: -25px;
  color: white
}

.exit-modal:hover {
  opacity: .75;
  cursor: pointer;
}

.modal-header {
  width: 50%;
  display: inline-block;
  margin-top: 10px;
}

.datepicker {
  display: block;
  width: 100%;
  padding: 10px;
}

.category-date-grid {
  display: block;
  flex-direction: row;
}

.dp__theme_dark {
   --dp-background-color: #666666;
   --dp-text-color: #ffffff;
   --dp-hover-color: #484848;
   --dp-hover-text-color: #ffffff;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #005cb2;
   --dp-primary-text-color: #ffffff;
   --dp-secondary-color: #a9a9a9;
   --dp-border-color: #2d2d2d;
   --dp-menu-border-color: #2d2d2d;
   --dp-border-color-hover: #aaaeb7;
   --dp-disabled-color: #737373;
   --dp-scroll-bar-background: #212121;
   --dp-scroll-bar-color: #484848;
   --dp-success-color: #00701a;
   --dp-success-color-disabled: #428f59;
   --dp-icon-color: #959595;
   --dp-danger-color: #e53935;
   --dp-highlight-color: rgba(0, 92, 178, 0.2);
}
</style>