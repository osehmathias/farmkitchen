<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div style="background-color: black;" class="section">
        <div
          style="
          height: 100%;
          width: 100%;
          background-image: url('img/plateHero.webp');
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;"
          class="is-flex is-align-items-center is-justify-content-center"
        >
          <div class="has-text-centered">
            <img src="/img/logoLight.svg" style="max-width: 250px">
            <h1 class="mt-5 title has-text-white">
              Wholesome Takeaway Meals
            </h1>
            <p class="mt-2 subtitle has-text-white has-text-weight-semibold">
              Fresh-made meals, picked up in Balmain. <br>Gluten-free and Vegan options available.
            </p>
            <b-button type="is-primary is-large" inverted outlined>
              Order Now
            </b-button>
          </div>
        </div>
      </div>
      <div
        style="background-color: black;"
        class="section"
      />
      <div style="background-color: white;" class="section">
        <Dish />
      </div>
      <div style="background-color: black;" class="section">
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
import Dish from '~/components/Dish.vue'
export default {
  components: {
    Dish
  },
  layout: 'default',
  metaInfo: {
    title: 'Hello, world!'
  },
  data () {
    return {
      options: {
        licenseKey: process.env.FULLSCREEN_LICENSE_KEY,
        navigation: true,
        navigationTooltips: ['Start', 'First Meal', 'Second Meal', 'Third Meal', 'Fourth Meal'],
        navigationPosition: 'right',
        controlArrows: true,
        scrollBar: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage']

      }
    }
  }

}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

</style>
