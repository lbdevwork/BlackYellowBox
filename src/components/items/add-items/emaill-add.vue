<template>
  <div class="emaill-add-container" :class="rootClassName">
    <h1 class="emaill-add-heading">Emails</h1>
    <div class="row1">
      <span class="emaill-add-text">{{ text }}</span>
      <div class="input-button-container">
        <input
          type="text"
          :placeholder="textinput_placeholder"
          class="emaill-add-textinput input"
        />
        <button @click="" class="nakama-profile1-button1 button">
          <span>
            <span>+</span>
            <br />
          </span>
        </button>
      </div>
    </div>
    <div class="row2">
      <div class="current-emails-wrapper">
        <span class="emaill-add-text">Current:</span>
        <div class="email-list">
          <button class="email-button" v-for="email in emails" :key="email">
            {{ email }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rootClassName: String,
  textinput_placeholder: {
    type: String,
    default: 'placeholder',
  },
  text: {
    type: String,
    default: 'Email',
  },
})

const emails = ["email1@example.com", "email2@example.com"];
</script>

<style scoped>
/* Existing styles */

.emaill-add-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}

.current-emails-wrapper {
  display: flex;
  align-items: center;
}

.row1 {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: var(--dl-space-space-doubleunit);
  align-items: center;
}

.emaill-add-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
}

.emaill-add-text {
  margin-right: 10px;
}

.emaill-add-textinput {
  width: 250px;
  height: 40px;
  border-radius: 4px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
  margin-right: 10px;
}

.input-button-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nakama-profile1-button1 {
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
}

.nakama-profile1-button1:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.email-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.email-button {
  color: var(--dl-color-gray-white);
  outline: none;
  height: auto;
  align-self: center;
  background: linear-gradient(310deg, #2152ff, #21d4fd);
  box-shadow: rgba(0, 0, 0, 0.11) 0px 4px 7px -1px, rgba(0, 0, 0, 0.07) 0px 2px 4px -1px;
  margin-top: var(--dl-space-space-unit);
  transition: all 0.15s ease-in;
  padding: 8px 12px;
  border-radius: 1.875rem;
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212, 253));
  margin-left: 10px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
}

.email-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}

@media (max-width: 767px) {
  .emaill-add-container {
    justify-content: center;
    align-items: center;
  }
}
</style>
