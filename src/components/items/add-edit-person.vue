<template>
    <div class="outer-container"> <!-- Add this line -->
  <div class="add-edit-person-container" v-bind:class="rootClassName">
    <h1 class="add-edit-person-heading">{{title}}</h1>
    <div class="add-edit-person-grid">
      <div class="name-section">
        <h1 class="h1-label">Full Name</h1>
        <input type="text" class="input" v-model="person.name" />
      </div>
      <div class="photos-section">
        <h1 class="h1-label">Photos</h1>
        <img :alt="image_alt1" :src="'/playground_assets/pngfind.com-plus-sign-png-524126-200h.png'" />
      </div>
      <div class="birthdate-section">
        <birthday-add :person="person || {}"></birthday-add>
      </div>
      <div class="age-location-section">
        <location-add></location-add>
          
        </div>
      <div class="nicknames-section">
        <nicknames-add rootClassName="nicknames-add-root-class-name"></nicknames-add>
      </div>
      <div class="tags-section">
        <tag-add rootClassName="tag-add-root-class-name"></tag-add>
      </div>
      <div class="emails-section">
        <emaill-add rootClassName="emaill-add-root-class-name"></emaill-add>
      </div>
    </div>
    <primary-blue-button @click="editUser"
      :button=btn
      rootClassName="primary-blue-button-root-class-name6"
    ></primary-blue-button>
  </div>
  </div> 
</template>

<script setup>
import PrimaryBlueButton from './primary-blue-button.vue';
import EmaillAdd from './add-items/emaill-add.vue';
import NicknamesAdd from './add-items/nick-add.vue';
import TagAdd from './add-items/tag-add.vue';
import BirthdayAdd from './add-items/birthday-add.vue';
import LocationAdd from './add-items/location-add.vue';
import { defineProps, reactive } from 'vue';

const props = defineProps({
  title: String,
  rootClassName: String,
});

const person = reactive({
  name: "",
  age: "",
});

const locations = ["Location 1", "Location 2"]; // Sample data

// Function to add a new location
function addLocation() {
  // Add your logic to add a new location to the locations array
}

function editUser() {
  // Your logic for editing a user goes here.
}
</script>
<style scoped>
.add-edit-person-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.outer-container {
    display: flex;
    justify-content: center;
    width: 100%;
  }

.input {
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
}

.input-age {
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
}
.add-edit-person-heading {
  text-align: center;
  background-image: linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0,128));

}
.add-edit-person-grid {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(4, auto);
gap: 1rem;
width: 100%;
max-width: 800px;
}

.name-section,
.photos-section,
.birthdate-section,
.emails-section,
.nicknames-section,
.tags-section {
display: flex;
flex-direction: column;
}

.age-location-section {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }


.input-label {
margin-bottom: 0.5rem;
}

.age-label{
  padding-top: 20px;
  margin-bottom: 10px;
  color: #000000;
}

.h1-label{
  margin-bottom: 0.5rem;
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
}

.nicknames-add-textinput{
  width: 80%;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
  margin-left: 5px;
}

input[type="text"] {
width: 90%;
height: 43px;
}



.photos-section img {
width: 100px;
object-fit: cover;
}

.birthdate-selects {
display: flex;
gap: 0.5rem;
}

.age-location-section {
display: flex;
flex-direction: row;
gap: 1rem;
align-items: center;
}

.age-location-section input {
width: 62px;
}

.location-select-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.location-select {
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
}

.add-location-button {
  color: var(--dl-color-gray-white);
  outline: none;
  height: 20px;
  width: 30px;
  align-self: flex-start;
  background: linear-gradient(310deg, #2152ff, #21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  transition: all 0.15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
}

.add-location-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}

.location-list-container {
  margin-top: 10px;
}

.location-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.location-text {
  margin-right: 10px;
}

.input-location {
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
}

.location-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.location-button {
  color: var(--dl-color-gray-white);
  outline: none;
  height: auto;
  align-self: flex-start;
  background: linear-gradient(310deg, #2152ff, #21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  transition: all 0.15s ease-in;
  padding: 8px 12px;
  border-radius: 1.875rem;
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
  margin-top: 10px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
}

.location-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}

@media (max-width: 767px) {
    .add-edit-person-grid {
      grid-template-columns: 1fr;
    }
    .name-section,
    .photos-section,
    .birthdate-section,
    .age-location-section {
      align-items: center; 
    }

    .age-location-section {
      display: grid; /* Add this line */
      grid-template-columns: auto auto; /* Add this line */
      justify-content: center; /* Add this line */
      gap: 1rem; /* Add this line */
    }
  }

</style>
