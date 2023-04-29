<template>
  <div class="nicknames-add-container">

    <div class="nicknames-add-grid">
      <h1 class="nicknames-add-heading">Nicks</h1> 
      <div class="row1">
        <span class="nicknames-add-text">Nickname</span>
        <input
          type="text"
          class="nicknames-add-textinput input"
        />
      </div>
      <div class="row2">
        <span class="nicknames-add-text1">App</span>
        <select class="nicknames-add-select">
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
      <div class="row3">
        <span class="nicknames-add-text2">Other App</span>
        <input
          type="text"
          class="nicknames-add-textinput input"
        />
        <button @click="" class="nakama-profile-button2 button">
          <span>
            <span>+</span>
            <br />
          </span>
        </button>
      </div>
      <div class="row4">
        <span class="nicknames-add-text3">Current:</span>
        <div class="nickname-list">
          <button class="nickname-button" v-for="nickname in nicknames" :key="nickname">
            {{ nickname }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nicknames: ["Nickname 1", "Nickname 2", "Nickname 3"],
    };
  },
};
</script>

<style scoped>
.nicknames-add-container {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  /*border-radius: var(--dl-radius-radius-radius40);
  border: 2px dashed rgba(120, 120, 120, 0.4);*/
}

.nicknames-add-grid {
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto auto;
  grid-row-gap: var(--dl-space-space-doubleunit);
  align-items: center;
}

.nicknames-add-heading {
  font-size: 24px;
  margin-bottom: 10px;
  color: #000000;
}

.row1 {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: var(--dl-space-space-doubleunit);
  align-items: center;
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

.nakama-profile-button{
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
}

.nakama-profile-button2{
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

.nicknames-add-text1{
  margin-top: 20px;
  margin-bottom: 20px;
}

.row2 {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-column-gap: var(--dl-space-space-doubleunit);
  align-items: center;
}

.row3 {
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: var(--dl-space-space-doubleunit);
  align-items: center;
}

.nicknames-add-select {
  margin-left: var(--dl-space-space-unit);

}
.nakama-profile-button2:hover,
.nakama-profile-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}



.row4 {
  display: flex;
  align-items: center;
}

.nicknames-add-text3 {
  margin-right: 10px;
}

.nickname-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
}

.nickname-button {
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

.nickname-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}

@media (max-width: 767px) {
  .nicknames-add-container {
    justify-content: center;
    align-items: center;
    text-align: center; /* Center text horizontally */
  }
  .nicknames-add-heading {
    font-size: 24px;
    margin-bottom: 10px;
    color: #000000;
  }
}
</style>