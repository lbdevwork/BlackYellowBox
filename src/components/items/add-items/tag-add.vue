<template>
  <div class="tag-add-container" :class="rootClassName">
    <h1 class="tag-add-heading">Tags</h1>
    <div class="tag-add-grid">
      <span class="tag-add-text">{{ text }}</span>
      <select>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <button @click="" class="nakama-profile-button button">
        <span>
          <span>+</span>
          <br />
        </span>
      </button>
    </div>
    <div class="tag-add-grid">
      <span class="tag-add-text">{{ text1 }}</span>
      <div class="input-button-container">
        <input
          type="text"
          :placeholder="textinput_placeholder"
          class="tag-add-textinput input"
        />
        <button @click="" class="nakama-profile-button button">
        <span>
          <span>+</span>
          <br />
        </span>
      </button>
      </div>
    </div>
    <div class="tag-add-grid">
      <span class="tag-add-text">Current:</span>
      <div class="tag-list">
        <button class="tag-button" v-for="tag in tags" :key="tag">
          {{ tag }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import PrimaryBlueButton from '../primary-blue-button.vue'

const props = defineProps({
  text1: {
    type: String,
    default: 'Other Tag',
  },
  text: {
    type: String,
    default: 'Tag',
  },
  rootClassName: String,
  textinput_placeholder: {
    type: String,
    default: 'placeholder',
  },
})

const components = {
  PrimaryBlueButton,
}

const tags = ["Tag 1", "Tag 2", "Tag 3","Tag 1", "Tag 2", "Tag 3"];
</script>


<style scoped>


.tag-add-container {
  display: flex;
  /*border-radius: var(--dl-radius-radius-radius40);
  border: 2px dashed rgba(120, 120, 120, 0.4);*/
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.tag-add-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
}

.tag-add-grid {
  display: grid;
  grid-template-columns: auto auto auto 1fr auto;
  grid-gap: var(--dl-space-space-unit);
  align-items: center;
  margin-top: 10px;
}

.tag-add-text {
  margin-right: 30px;
}

.tag-add-textinput {
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
}

.input-button-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nakama-profile-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}

.nakama-profile-button {
  color: var(--dl-color-gray-white);
  outline: none;
  height: 20px;
  width: 30px;
  align-self: center;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding-top: var(--dl-space-space-triplequarterunit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unitandahalfunit);
  border-radius: 1.875rem;
  padding-right: var(--dl-space-space-unitandahalfunit);
  padding-bottom: var(--dl-space-space-triplequarterunit);
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.tag-button {
  color: var(--dl-color-gray-white);
  outline: none;
  height: auto;
  align-self: center;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all .15s ease-in;
  padding: 8px 12px;
  border-radius: 1.875rem;
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
  margin-left: 10px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
}

.tag-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}

@media (max-width: 767px) {
  .tag-add-container {
    justify-content: center;
    align-items: center;
  }
}
</style>