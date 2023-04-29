<template>
  <div class="age-location-section">
    <div class="input-column-wrapper">
    <div class="input-column">
      <h1 class="section-heading">Location</h1>
      <div class="input-row">
        <span class="input-label">Localidade</span>
        <div class="location-select-container">
          <select class="location-select">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
          <button class="add-location-button2">+</button>
        </div>
      </div>
      <div class="input-row">
        <span class="location-text">Outra</span>
        <input type="text" class="input-location" />
        <button class="add-location-button">+</button>
      </div>
      <div class="input-row">
        <span class="location-text">Current:</span>
        <div class="location-list">
          <button class="location-button" v-for="location in locations" :key="location">
            {{ location }}
          </button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
const locations = ['Location 1', 'Location 2']; // Sample data
</script>


<style scoped>

.input-column-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.age-location-section {
  display: flex;
  flex-direction: column;
}

.input-column {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-row-gap: 1rem;
}

.section-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
  position: relative;
}

.input-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.input-label {
  margin-right: 0.5rem;
}

.location-select-container {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.location-select {
  width: 100%; /* Add width to match the example code */
  border: 1px solid #d8d8d8;
  border-radius: 4px;
  padding-left: 10px;
  /* margin-right: 10px; */ /* Remove margin-right to match example code */
  font-size: 14px;
  line-height: 1.43;
  color: #000000;
}

.add-location-button {
  color: var(--dl-color-gray-white);
  outline: none;
  height: 20px;
  width: 40px;
  margin-left: 10px;
  margin-top: 10px;
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
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212,253));
}

.add-location-button2 {
  color: var(--dl-color-gray-white);
  outline: none;
  height: 20px;
  width: 30px;
  margin-left: 10px;
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
  background-image: linear-gradient(310deg, rgb(33, 82, 255), rgb(33, 212,253));
}
.add-location-button:hover {
cursor: pointer;
transform: scale(1.05);
}

.add-location-button2:hover {
cursor: pointer;
transform: scale(1.05);
}

.input-location {
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

.location-text {
margin-right: 0.5rem;
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

.location-button:hover {
background-color: #e0e0e0;
}

@media (max-width: 767px) {
  .input-column-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.age-location-section {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.input-column {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-row-gap: 1rem;
  width: 100%;
}

.section-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
  text-align: center;
  margin-left: 30px;
}

.input-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.add-location-button2 {
  width: 50px;
}

}
</style>


