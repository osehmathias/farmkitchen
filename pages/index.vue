<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div style="background-color: black;" class="section">
        <div
          style="
          height: 100%;
          width: 100%;
          background-image: url('img/functions.webp');
          background-position: center;
          background-size: contain;
          background-repeat: no-repeat;"
          class="is-flex is-align-items-center is-justify-content-center"
        >
          <div class="has-text-centered">
            <h1 class="title has-text-white">
              Functions in the Garden
            </h1>
            <p class="mt-2 subtitle has-text-white has-text-weight-semibold">
              Host your next function around a fire in a private garden. <br>We have a range of catering options available.<br>Suits up to 35 pax
            </p>
            <b-button class="mt-2" tag="router-link" to="#secondPage">
              <strong>Book Now: 0422 154 110</strong>
            </b-button>
          </div>
        </div>
      </div>
      <div
        style="background-color: black;"
        class="section"
      >
        <div class="columns">
          <div class="column is-half">
            <h2 class="has-text-centered title has-text-white">
              Menu
            </h2>
          </div>
          <div class="column is-half">
            <p class="has-text-white has-text-weight-semibold mb-4">
              Our usual catering spread includes
            </p>
            <ul class="has-text-white has-text-weight-semibold">
              <li>- Lamb and Vegetable Skewers cooked over an open fire</li>
              <li>- Traditional Paella in a giant pan</li>
              <li>- Pana cotta / Creme brulee</li>
              <li>- BYO wine and spirits</li>
            </ul>
          </div>
        </div>
      </div>
      <div style="background-color: black;" class="section">
        <div class="is-flex is-justify-content-center">
          <div class="column is-two-thirds ">
            <h1 class="title has-text-white">
              Contact Us
            </h1>
            <h2 class="subtitle has-text-white">
              We would love to hear from you
            </h2>
            <div v-if="submitted !== true">
              <label class="has-text-white">Name</label>
              <b-input v-model="form.name" placeholder="John Doe" class="mb-4" />

              <label class="has-text-white ">Email</label>
              <b-input
                v-model="form.email"
                type="email"
                placeholder="john@doe.com"
                maxlength="30"
              />

              <label class="has-text-white mb-1">Number</label>
              <b-input v-model="form.phone" placeholder="0400 000 000" class="mb-4" />

              <label class="has-text-white">Message</label>
              <b-input v-model="form.message" maxlength="200" type="textarea" />

              <b-button class="is-medium" @click.prevent="submitForm">
                Submit
              </b-button>
            </div>
            <div v-if="submitted == true">
              <article class="message is-success">
                <div class="message-header">
                  <p>Thank you</p>
                </div>
                <div class="message-body">
                  We will be in touch with you soon
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  data () {
    return {
      submitted: false,
      form: {
        name: ' ',
        email: ' ',
        phone: ' ',
        message: ' '
      },
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
  },
  methods: {
    submitForm () {
      axios
        .post(
          'https://l4k4qp7jt2.execute-api.ap-southeast-2.amazonaws.com/Prod/submitForm',
          this.form
        )
        .then((res) => {
          this.submitted = true
          console.log(res)
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          // Perform action in always
        })
    }
  }

}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
