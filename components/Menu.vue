<template>
  <b-navbar id="menu" class="is-black" fixed-top>
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="/img/logoLight.svg"
          style="height: 20px"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>

    <template #end>
      <b-navbar-item href="/functions">
        Functions
      </b-navbar-item>
      <b-navbar-item href="/contact">
        Contact
      </b-navbar-item>
      <!-- <b-navbar-item tag="div">
        <div class="buttons">
          <a  class="button is-success is-light has-text-weight-bold">
            Order Now
          </a>
        </div>
      </b-navbar-item> -->
    </template>
  </b-navbar>
</template>

<style>
#menu{
    position: fixed;
    width: 100%;
    z-index: 70;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
}

</style>
