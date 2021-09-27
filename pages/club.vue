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
            <h1 class="title has-text-white">
              Order Now
            </h1>
            <p class="mt-2 subtitle has-text-white has-text-weight-semibold">
              Pick up fresh, made-to-eat in Balmain
            </p>
            <b-button class="mt-2" tag="router-link" to="#secondPage">
              Start Now
            </b-button>
          </div>
        </div>
      </div>
      <div
        style="background-color: black;"
        class="section"
      >
        Second section ...
      </div>
      <div style="background-color: black;" class="section">
        Second section ...
      </div>
      <div style="background-color: black;" class="section">
        Second section ...
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
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
