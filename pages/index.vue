<template>
  <div>
    <full-page id="fullpage" ref="fullpage" :options="options">
      <div style="background-image: url('/img/front.webp'); height: 400px; background-position: center; padding: 0px" class="section">
        <a href="#" class="overlay">
          <p class="is-size-1 has-text-white has-text-weight-semibold">
            Balmain Garden
          </p>
          <p class="is-size-3 has-text-white has-text-weight-semibold mb-5">
            Restaurant / Cafe / Nursery / Venue
          </p>
          <div class="columns is-justify-content-center is-align-items-center"><div class="column is-two-thirds">
            <p class="is-size-4 has-text-white has-text-weight-semibold mb-5">
              Surround yourself with country at Farm Kitchen, bringing you good food, drink, and a backyard fire pit set in the garden
            </p>
            <b-button size="is-medium" type="is-white">
              Book Now
            </b-button>
          </div></div>
        </a>
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
      <div
        style="background-color: black;"
        class="section"
      >
        <div class="columns is-vcentered is-justify-content-center ">
          <div class="column">
            <Flicking :options="{ circular: true }">
              <frame-grid
                class="container"
                :gap="gap"
                :default-direction="defaultDirection"
                :frame="frame"
                :rect-size="rectSize"
                :use-frame-fill="useFrameFill"
              >
                <div class="item" />
                <div class="item" />
                <div class="item" />
              </frame-grid>
            </Flicking>
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
            <p class="mt-2 subtitle has-text-white has-text-weight-semibold">
              354 Darling Street, Balmain NSW 2041
            </p>
            <div v-if="submitted !== true">
              <div class="container mb-5">
                <div class="columns">
                  <div class="column">
                    <b-field label="Name">
                      <b-input v-model="form.fname" expanded placeholder="John" />
                      <b-input v-model="form.lname" expanded placeholder="Doe" />
                    </b-field>
                    <b-field label="Email">
                      <b-input
                        v-model="form.email"
                        placeholder="john@doe.com"
                      />
                    </b-field>
                    <b-field label="Number">
                      <b-input v-model="form.phone" placeholder="0400 000 000" />
                    </b-field>
                    <b-field label="PAX">
                      <b-input v-model="form.adults" expanded placeholder="# of Adults" />
                      <b-input v-model="form.children" expanded placeholder="# of Children" />
                    </b-field>
                    <b-button expanded class="is-medium" @click.prevent="submitForm">
                      Submit
                    </b-button>
                    <!-- <b-field label="Message">
                      <b-input v-model="form.message" type="textarea" />
                    </b-field> -->
                  </div>
                  <div class="column">
                    <b-field label="Date of booking">
                      <b-datetimepicker
                        v-model="form.date"
                        inline
                        placeholder="Select a date"
                        icon="calendar-today"
                        :timepicker="timepicker"
                        horizontal-time-picker
                      />
                    </b-field>
                  </div>
                </div>
              </div>
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
import { Flicking } from '@egjs/vue-flicking'
import { FrameGrid } from '@egjs/vue-grid'

export default {
  components: {
    FrameGrid,
    Flicking
  },
  metaInfo: {
    title: 'Hello, world!'
  },
  data () {
    return {
      gap: 5,
      defaultDirection: 'end',
      frame: [[1, 1, 2, 2], [3, 3, 2, 2], [4, 4, 4, 5]],
      rectSize: 0,
      useFrameFill: true,
      submitted: false,
      timepicker: {
        incrementMinutes: 15,
        incrementHours: 1
      },
      form: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        adults: '',
        children: '',
        date: new Date()
      },
      options: {
        licenseKey: process.env.FULLSCREEN_LICENSE_KEY,
        navigation: true,
        navigationTooltips: ['Start', 'Menu', 'Gallery', 'Contact'],
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
          'https://6426e72xd0.execute-api.ap-southeast-2.amazonaws.com/prod/',
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
.label {
  color: white
}
.home-links a {
  margin-right: 1rem;
}

.overlay {
    height: 100%;
    background-color: rgb(0 0 0 / 50%);
    display: flex;
    box-shadow: rgb(0 0 0 / 24%) 2px 3px 14px 0px;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;
    text-align: center
}

.item {
  position: absolute;
  width: 100px;
  /* border: 1px solid #ccc; */
  color: white;
  text-align: center;
}

.item:nth-child(6n + 1) {
    background-image: url('/img/skewers.webp');
  background-size: cover;
  background-position: center;
    height: 200px;
}

.item:nth-child(6n + 2) {

   background-image: url('/img/ormeat.webp');
  background-size: cover;
  background-position: center;
  height: 300px;
}

.item:nth-child(6n + 3) {
  background-image: url('/img/bbq.webp');
  background-size: cover;
  background-position: center;
  height: 200px;
}

.item:nth-child(6n + 4) {
  background: #4af;
  height: 100px;
}

.item:nth-child(6n + 5) {
  background: #ed5;
  height: 150px;
}
.item:nth-child(6n + 6) {
  background: #d5e;
  height: 130px;
}
</style>
