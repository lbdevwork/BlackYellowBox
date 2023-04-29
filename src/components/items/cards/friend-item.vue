<template>
  <div class="friend-item-container" v-bind:class="rootClassName">
    <div class="friend-item-container1">
      <img :alt="image_alt" :src="image_src" class="friend-item-image" />
      <div class="friend-item-container2">
        <div class="friend-item-container3">
          <h1 class="friend-item-text">{{ heading1 }}</h1>
        </div>
      </div>
      <div class="friend-item-container4">
        <h1 class="friend-item-heading">{{ heading12 }}</h1>
      </div>
      <div class="friend-item-container5">
        <h1 class="friend-item-text1">{{ heading11 }}</h1>
      </div>
    </div>
    <router-link to="/profile" @click="setProfileID" class="friend-item-navlink">
      <div class="friend-item-container6">
        <button class="friend-item-button ButtonLarge button">
          {{ button }}
        </button>
      </div>
    </router-link>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
import {usePeopleStore} from '@/stores/people'

const peopleStore = usePeopleStore()

function setProfileID() {
  peopleStore.setProfileID(props.id)
}

const props = defineProps({
  rootClassName: String,
  id: {
    type: Number,
    default: 'personID',
  },
  image_alt: {
    type: String,
    default: 'image',
  },
  heading1: {
    type: String,
    default: 'Nome',
  },
  heading12: {
    type: Number,
    default: 'Idade',
  },
  button: {
    type: String,
    default: 'View Profile',
  },
  heading11: {
    type: String,
    default: 'Localidade',
  },
  image_src: {
    type: String,
    default: 'https://play.teleporthq.io/static/svg/default-img.svg',
  },
  tags: {
    type: Array,
    default: () => [],
  },
})
</script>
<style scoped>
.friend-item-container {
  width: 100%;
  height: 84px;
  display: flex;
  position: relative;
  align-items: center;
  border-width: 0.2px;
  flex-direction: row;
  justify-content: center;
}
.friend-item-container1 {
  width: 542px;
  height: 109px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
.friend-item-image {
  flex: 0;
  width: 65px;
  height: 64px;
  object-fit: cover;
  margin-left: var(--dl-space-space-doubleunit);
  border-color: var(--dl-color-secondary-200);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-round);
}
.friend-item-container2 {
  flex: 0 0 auto;
  width: 140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.friend-item-container3 {
  flex: 0 0 auto;
  width: 140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.friend-item-text {
  width: 106px;
  font-size: 1em;
  text-align: center;
margin-left: var(--dl-space-space-unit);
}
.friend-item-container4 {
flex: 0 0 auto;
width: 140px;
height: auto;
display: flex;
align-items: flex-start;
flex-direction: column;
}
.friend-item-heading {
width: 106px;
font-size: 1em;
text-align: center;
margin-left: var(--dl-space-space-unit);
}
.friend-item-container5 {
flex: 0 0 auto;
width: 140px;
height: auto;
display: flex;
align-items: flex-start;
flex-direction: column;
}
.friend-item-text1 {
width: 106px;
font-size: 1em;
text-align: center;
margin-left: var(--dl-space-space-unit);
}
.friend-item-navlink {
display: contents;

}
.friend-item-container6 {
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
}
.friend-item-button {
color: var(--dl-color-gray-white);
outline: none;
width: 150px;
height: 40px;
background: linear-gradient(310deg,#2152ff,#21d4fd);
box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
transition: all .15s ease-in;
padding-top: var(--dl-space-space-unit);
border-width: 0px;
padding-left: var(--dl-space-space-doubleunit);
border-radius: 1.875rem;
padding-right: var(--dl-space-space-doubleunit);
padding-bottom: var(--dl-space-space-unit);
font-size: 1.2em;
}
.friend-item-button:hover {
cursor: pointer;
transform: scale(1.02);
}
.friend-item-root-class-name {
margin-top: var(--dl-space-space-unit);
}
.friend-item-root-class-name1 {
margin-top: var(--dl-space-space-unit);
}
.friend-item-root-class-name2 {
margin-top: var(--dl-space-space-unit);
}
.friend-item-root-class-name3 {
margin-top: var(--dl-space-space-unit);
}
.friend-item-root-class-name4 {
margin-top: var(--dl-space-space-unit);
}
.friend-item-root-class-name5 {
margin-top: var(--dl-space-space-unit);
}
</style>