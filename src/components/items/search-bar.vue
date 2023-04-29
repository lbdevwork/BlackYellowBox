<template>
  <div class="search-bar-container" v-bind:class="rootClassName">
    <h1 class="search-bar-heading">
      <span>{{ text }}</span>
      <br />
      <br />
      <br />
    </h1>
    <div class="search-bar-container1">
      <input
        type="text"
        :placeholder="textinput_placeholder"
        class="search-bar-textinput input"
      />
      <button class="search-bar-button button ButtonSmall">{{ button }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: {
    text: {
      type: String,
      default: 'Nakama',
    },
    textinput_placeholder: {
      type: String,
      default: 'placeholder',
    },
    button: {
      type: String,
      default: 'Search',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.search-bar-container {
  height: 160px;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.search-bar-heading {
  height: 51px;
  align-self: center;
  text-align: center;
  margin-bottom: var(--dl-space-space-unit);
  background-image: linear-gradient(310deg, rgb(121, 40, 202), rgb(255, 0, 128));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.search-bar-container1 {
  flex: 0 0 auto;
  width: auto;
  height: 36px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.search-bar-textinput {
  width: 410px;
  height: 36px;
  margin-right: 20px;
  border-radius: 20px;
}
.search-bar-button {
  color: var(--dl-color-gray-white);
  outline: none;
  background: linear-gradient(310deg,#2152ff,#21d4fd);
  box-shadow: 0 4px 7px -1px rgb(0 0 0 / 11%), 0 2px 4px -1px rgb(0 0 0 / 7%);
  transition: all .15s ease-in;
  padding: 12px 24px;
  border-width: 0px;
  border-radius: 1.875rem;
}
.search-bar-button:hover {
  cursor: pointer;
  transform: scale(1.02);
}
.search-bar-root-class-name {
  align-self: stretch;
}
</style>