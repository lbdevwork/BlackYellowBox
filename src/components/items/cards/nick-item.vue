<template>
  <div class="nick-item-container" v-bind:class="rootClassName">
    <div class="nick-item-container1">
      <img :alt="image_alt" :src="image_src" class="nick-item-image" />
      <div class="nick-item-container2">
        <div class="nick-item-container3">
          <h1  class="nick-item-text">{{ props.name+1}}</h1>
        </div>
      </div>
      <div class="nick-item-container4">
        <h1 class="nick-item-heading">{{ props.id.name }}</h1>
      </div>
      <div class="nick-item-container5">
        <h1 class="nick-item-text1">{{ props.id.app }}</h1>
      </div>
    </div>
    <router-link to="/" class="nick-item-navlink">
      <div class="nick-item-container6">
        <button class="nick-item-button button ButtonSmall">{{ btn }}</button>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
const image_alt = ref('image')
const rootClassName = ref('')
const image_src = "https://play.teleporthq.io/static/svg/default-img.svg"
const nick = ref('')
const app = ref('')
const link = ref('')
const btn = "Update"
const props = defineProps({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  app: {
    type: String,
    required: true
  },

});


console.log(props.id)
onMounted(() => {
 console.log(props.id)

})

</script>

<style scoped>
.nick-item-container {
  width: 1003px;
  height: 84px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  position: relative;
  align-items: center;
  border-color: var(--dl-color-secondary-400);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius75);
  flex-direction: row;
  justify-content: center;
}
.nick-item-container1 {
  width: 542px;
  height: 109px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  justify-content: flex-start;
}
.nick-item-image {
  flex: 0;
  width: 65px;
  height: 64px;
  object-fit: cover;
  position: center;
  margin-left: var(--dl-space-space-doubleunit);
  border-color: var(--dl-color-secondary-400);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-round);
}
.nick-item-container2 {
  flex: 0 0 auto;
  width: 140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.nick-item-container3 {
  flex: 0 0 auto;
  width: 140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.nick-item-text {
  width: 106px;
  font-size: 1em;
  text-align: center;
  margin-left: var(--dl-space-space-unit);
}
.nick-item-container4 {
  flex: 0 0 auto;
  width: 140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.nick-item-heading {
  width: 106px;
  font-size: 1em;
  text-align: center;
  margin-left: var(--dl-space-space-unit);
}
.nick-item-container5 {
  flex: 0 0 auto;
  width: 140px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.nick-item-text1 {
  width: 106px;
  font-size: 1em;
  text-align: center;
  margin-left: var(--dl-space-space-unit);
}
.nick-item-navlink {
  display: contents;
}
.nick-item-container6 {
  width: 203px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.nick-item-button {
  color: var(--dl-color-gray-white);
  outline: none;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.nick-item-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.nick-item-root-class-name {
  align-self: center;
}
.nick-item-root-class-name1 {
  align-self: center;
}
.nick-item-root-class-name2 {
  align-self: center;
}
.nick-item-root-class-name3 {
  align-self: center;
}
.nick-item-root-class-name4 {
  align-self: center;
}
.nick-item-root-class-name5 {
  align-self: center;
}
</style>
