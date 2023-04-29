<script setup>
import {ref} from 'vue'
import NickItem from '@/components/items/cards/nick-item.vue'
import NoteItem from '@/components/items/cards/note-item.vue'
//import EditPerson from '@/components/add-edit-person.vue'
import { usePeopleStore } from '@/stores/people.js'
import NickList from '@/components/lists/nick-list.vue'
import NoteList from '@/components/lists/note-list.vue'

const tags = ref(['Xteste2', 'Y', 'Z', 'W', 'D', 'A']);
const locations = ref(['Location 1', 'Location 2', 'Location 3', 'Location 4']);
const phoneNumber = ref(['+351 912 123 421', '+351 912 123 422', '+351 912 123 423']);
const emails = ref(['test1@mail.pt', 'test2@mail.pt', 'test3@mail.pt']);
const selectedPhoneNumber = ref('');


</script>

<template>
  <div class="nakama-profile-grid">
    <div class="nakama-profile-center">
      <div class="nakama-profile-profile">
        <img
          alt="image"
          src="/playground_assets/bruce-mars-200h.jpg"
          class="nakama-profile-image"
        />
        <div class="nakama-profile-container01">
          <div class="nakama-profile-container02">
            <h4 class="nakama-profile-text">Nome</h4>
          </div>
          <div class="nakama-profile-container03">
            <span class="nakama-profile-text01">
              <span class="nakama-profile-text02">Idade</span>
              <span>: X</span>
            </span>
            <span class="nakama-profile-text05">Birthday</span>
            <span>: X/X/X</span>
            <br />
            <span>
              <span class="nakama-profile-text09">Location</span>
              <span>: </span>
              <div class="location-dropdown" v-if="locations.length > 0">
                <span class="current-location">{{ locations[0] }}</span>
                <div class="location-list">
                  <span v-for="(location, index) in locations" :key="index" class="location-item">
                    {{ location }}
                  </span>
                </div>
              </div>
            </span>
          </div>
          <div>
            <span>
              <div class="tags-container">
                <button v-for="(tag, index) in tags" :key="index" class="tag-button">
                  {{ tag }}
                </button>
              </div>
            </span>
          </div>
          <div class="contact-info-wrapper">
            <div class="nakama-profile-container04">
              <img
                alt="image"
                src="/playground_assets/46854-200h.png"
                class="nakama-profile-image1"
              />
              <div class="location-dropdown" v-if="phoneNumber.length > 0">
                <span class="current-location">{{ phoneNumber[0] }}</span>
                <div class="location-list">
                  <span v-for="(phoneNumber, index) in phoneNumber" :key="index" class="location-item">
                    {{ phoneNumber }}
                  </span>
                </div>
              </div>
            </div>
            <div class="nakama-profile-container04">
              <img
                alt="image"
                src="/playground_assets/mail.svg"
                class="nakama-profile-image1"
              />
              <div class="location-dropdown" v-if="emails.length > 0">
                <span class="current-location">{{ emails[0] }}</span>
                <div class="location-list">
                  <span v-for="(email, index) in emails" :key="index" class="location-item">
                    {{ email }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/addperson" tag="button" @click="setEdit" class="nakama-profile-button">
          <span>Edit</span>
        </router-link>
      </div>
    </div>
  </div>
  <NickList />
  <NoteList />
</template>
<style scoped>
.nakama-profile-center {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.nakama-profile-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  justify-content: center;
  height: 100%;
  padding: 20px;
}

.contact-info-wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.location-dropdown {
  position: relative;
  display: inline-block;
}
.current-location {
  cursor: pointer;
}
.location-list {
  display: none;
  position: absolute;
  background-color: white;
  z-index: 100;
  min-width: 160px;
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  border-radius: 5px;
  padding: 5px 0;
}
.location-list .location-item {
  color: var(--dl-color-secondary-700);
  padding: 5px 10px;
  text-decoration: none;
  display: block;
  white-space: nowrap;
  font-weight: normal;
}
.location-list .location-item:hover {
  background-color: var(--dl-color-primary-600);
  color: var(--dl-color-gray-white);
}
.location-dropdown:hover .location-list {
  display: block;
}
@media (max-width: 768px) {
  .nakama-profile-grid {
    grid-template-columns: 1fr;
  }
}
.nakama-profile-profile {
  height: 130px;
  display: flex;
  max-width: 1320px;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: flex-start;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: row;
  padding-bottom: 56px;
}
.nakama-profile-image {
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-right: 30px;
  border-radius: var(--dl-radius-radius-radius75);
}
.nakama-profile-container01 {
  width: 394px;
  height: 210px;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-sixunits);
  margin-right: 62px;
  flex-direction: column;
}
.nakama-profile-container02 {
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-halfunit);
  flex-direction: row;
  justify-content: space-between;
}
.nakama-profile-text {
  color: var(--dl-color-secondary-700);
  font-size: 1.5rem;
  font-style: normal;
  margin-bottom: 10px;
}
.nakama-profile-container03 {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
}
.nakama-profile-text01,
.nakama-profile-text02,
.nakama-profile-text05,
.nakama-profile-text09 {
  font-style: normal;
  font-weight: 700;
  margin-right: 5px;
}

.nakama-profile-text09,
.nakama-profile-text05 {
margin-left: 5px;
}
.nakama-profile-container04 {
  flex: 0 0 auto;
  width: auto;
  height: 35px;
  display: flex;
  align-self: flex-start;
  margin-right: 10px;
  align-items: center;
  margin-bottom: var(--dl-space-space-unit);
  justify-content: center;
}

.nakama-profile-image1 {
width: 35px;
height: 35px;
align-self: flex-start;
object-fit: cover;
margin-top: 5px;
margin-right: 10px;
margin-bottom: 20px;
}
.nakama-profile-text11 {
align-self: center;
margin-top: 5px;
margin-left: var(--dl-space-space-unit);
}
.nakama-profile-text13 {
font-style: normal;
font-weight: 700;
margin-right: 5px;
margin-top: 50px;
}
.nakama-profile-button {
color: var(--dl-color-gray-white);
outline: none;
align-self: center;
width: 60px;
height: 40px;
background: linear-gradient(310deg,#2152ff,#21d4fd);
box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
margin-top: var(--dl-space-space-unit);
transition: all .15s ease-in;
border-width: 0px;
border-radius: 1.875rem;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
}
.nakama-profile-button:hover {
cursor: pointer;
transform: scale(1.02);
}

.tags-container {
display: flex;
flex-wrap: wrap;
align-items: center;
margin-top: 10px;
}

.tag-button {
background-color: var(--dl-color-gray-light);
color: var(--dl-color-secondary-700);
font-weight: 700;
border-radius: 20px;
border-color: #2152ff;
padding: 5px 10px;
box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
margin-right: 5px;
margin-bottom: 5px;
border: 1px solid #2152ff;
outline: none;
cursor: pointer;
transition: background-color 0.3s;
}

.tag-button:hover {
background-color: var(--dl-color-primary-600);
color: var(--dl-color-gray-white);
}

@media(max-width: 991px) {
.nakama-profile-container01 {
margin-left: var(--dl-space-space-tripleunit);
margin-right: var(--dl-space-space-tripleunit);
}
.nakama-profile-container06 {
width: 100%;
}
.nakama-profile-card {
width: 100%;
}
.nakama-profile-container09 {
width: 100%;
}
.nakama-profile-card1 {
width: 100%;
}
}

@media (max-width: 767px) {
.nakama-profile-profile {
padding-top: var(--dl-space-space-fourunits);
padding-left: var(--dl-space-space-doubleunit);
padding-right: var(--dl-space-space-doubleunit);
flex-direction: column;
padding-bottom: var(--dl-space-space-fourunits);
align-items: center;
}
.nakama-profile-container01 {
margin-left: 0;
margin-right: 0;
width: 100%;
text-align: center;
align-items: center;
}

.nakama-profile-container04 {
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    text-align: center;
    align-items: center;
    margin-bottom: var(--dl-space-space-unit); /* Add this line */
  }
.nakama-profile-container02 {
margin-top: var(--dl-space-space-unit);
margin-bottom: var(--dl-space-space-unit);
}
.nakama-profile-text {
margin-top: var(--dl-space-space-unit);
margin-top: 10px;
}
.nakama-profile-blog-posts {
padding-top: var(--dl-space-space-doubleunit);
padding-left: var(--dl-space-space-doubleunit);
padding-right: var(--dl-space-space-doubleunit);
padding-bottom: var(--dl-space-space-doubleunit);
}
.nakama-profile-container06 {
margin-top: var(--dl-space-space-doubleunit);
}
.nakama-profile-blog-posts1 {
padding-top: var(--dl-space-space-doubleunit);
padding-left: var(--dl-space-space-doubleunit);
padding-right: var(--dl-space-space-doubleunit);
padding-bottom: var(--dl-space-space-doubleunit);
}
.nakama-profile-container09 {
margin-top: var(--dl-space-space-doubleunit);
}
.nakama-profile-button {
width: 50px;
height: 80px;
margin-top: 10px;
}
}

</style>




