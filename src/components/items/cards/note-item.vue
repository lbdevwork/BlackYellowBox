<template>
  <div class="note-item-container" v-bind:class="rootClassName">
    <div class="note-item-container1">
      <div class="note-item-container2">
        <span class="note-item-text">{{ props.id.importance }}</span>
        <span class="note-item-text1">Data:{{props.id.day}}/{{props.id.month}}/{{props.id.year}}</span>
        <span class="note-item-text2">{{ props.id.topic }}</span>
      </div>
    </div>
    <div class="note-item-container3">
      <span class="note-item-text3">{{ props.id.text }}</span>
    </div>
    <div class="note-item-container4">
      <button class="note-item-button button ButtonSmall">{{ btn1 }}</button>
      <button class="note-item-button1 button ButtonSmall">{{ btn2 }}</button>
    </div>
  </div>
</template>

<script setup>
const btn1 = 'Edit'
const btn2 = 'Delete'
const props = defineProps({
  id: String,
  note: {
    type: Object,
    default: null,
  },
  
})
</script>


<style scoped>
.note-item-container {
  width: 1047px;
  height: 137px;
  margin: var(--dl-space-space-halfunit);
  display: flex;
  position: relative;
  align-items: center;
  border-color: var(--dl-color-secondary-400);
  border-style: groove;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius40);
  flex-direction: row;
  justify-content: center;
}
.note-item-container1 {
  flex: 0 0 auto;
  width: 200px;
  height: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.note-item-container2 {
  width: 200px;
  height: 152px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.note-item-text {
  align-self: center;
  font-style: italic;
  margin-top: var(--dl-space-space-doubleunit);
  font-weight: 700;
}
.note-item-text1 {
  align-self: center;
  font-style: italic;
  margin-top: var(--dl-space-space-halfunit);
  font-weight: 700;
}
.note-item-text2 {
  align-self: center;
  margin-top: var(--dl-space-space-halfunit);
}
.note-item-container3 {
  width: 811px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.note-item-text3 {
  align-self: center;
  font-style: normal;
  font-weight: 700;
  margin-left: var(--dl-space-space-halfunit);
}
.note-item-container4 {
  width: 141px;
  height: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.note-item-button {
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
.note-item-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.note-item-button1 {
  color: var(--dl-color-gray-white);
  outline: none;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  margin-top: var(--dl-space-space-halfunit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
}
.note-item-button1:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.note-item-root-class-name {
  height: 100%;
  align-self: center;
}
.note-item-root-class-name1 {
  height: 100%;
  align-self: center;
}
.note-item-root-class-name2 {
  height: 100%;
  align-self: center;
}
.note-item-root-class-name3 {
  height: 100%;
  align-self: center;
}
</style>
