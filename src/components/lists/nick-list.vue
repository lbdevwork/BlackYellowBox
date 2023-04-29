<template>
<div class="nakama-profile1-blog-posts">
      <h1 class="nakama-profile1-text26 HeadingTwo">
        <span>Nicknames</span>
        <br />
      </h1>
      <button @click="loadUsers" class="nakama-profile1-button1 button">
        <span>
          <span>+</span>
          <br />
        </span>
      </button>
      
      <div class="nakama-profile1-container12">
        <!--<div v-for="(index ,name) in person.tags" :key=index class="nakama-profile1-container11">
          <NickItem :id="index" :name="name" ></NickItem>
       </div> -->

      </div>
    </div>

</template>

<script setup>
</script>

<style scoped>
.nakama-profile1-blog-posts {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  max-width: 1320px;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-doubleunit);
  padding-left: var(--dl-space-space-doubleunit);
  padding-right: var(--dl-space-space-doubleunit);
  flex-direction: column;
  
}

.nakama-profile1-text26 {
  color: var(--dl-color-secondary-500);
  align-self: center;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  margin-top: 50px;
}

.nakama-profile1-button1 {
  color: var(--dl-color-gray-white);
  outline: none;
  height: 30px;
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
  margin-bottom: 15px;
}
.nakama-profile1-button1:hover {
  cursor: pointer;
  transform: scale(1.02);
}

.nakama-profile1-container12 {
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: auto;
  display: flex;
  align-self: stretch;
  margin-top: var(--dl-space-space-doubleunit);
  align-items: center;
  border-radius: var(--dl-radius-radius-radius40);
  flex-direction: column;
  background-size: cover;
  margin-left: 20px;
  margin-right:20px;
  justify-content: center;
  background-image: linear-gradient(135deg, rgba(84, 124, 164, 0.04) 0.00%,rgba(84, 124, 164, 0.04) 0.00%,rgb(37, 114, 191) 26.00%,rgb(156, 163, 170) 100.00%,rgba(37, 114, 191, 0.08) 46.00%,rgb(156, 163, 170) 100.00%),url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg');
}
@media screen and (max-width: 767px) {
  .nakama-profile1-blog-posts {
    padding: var(--dl-space-space-unit);
    margin-top: 222px;
    
  }

  .nakama-profile1-text26 {
    font-size: 24px;
  }

  .nakama-profile1-button1 {
    height: 24px;
    width: 24px;
    padding-top: var(--dl-space-space-unit);
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: var(--dl-space-space-unit);
  }

  .nakama-profile1-container12 {
    margin-left: 20px;
    margin-right: 20px;
  }
  
}
</style>