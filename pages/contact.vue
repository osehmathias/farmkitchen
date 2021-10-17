<template>
  <section class="section is-medium has-background-white-bis ">
    <div class="is-flex is-justify-content-center">
      <div class="column is-two-thirds ">
        <h1 class="title">
          Contact Us
        </h1>
        <h2 class="subtitle">
          We would love to hear from you
        </h2>
        <div v-if="submitted !== true">
          <b-field label="Name">
            <b-input v-model="form.name" placeholder="John Doe" />
          </b-field>

          <b-field label="Email">
            <b-input
              v-model="form.email"
              type="email"
              placeholder="john@doe.com"
              maxlength="30"
            />
          </b-field>

          <b-field label="Number">
            <b-input v-model="form.phone" placeholder="0400 000 000" />
          </b-field>

          <b-field label="Message">
            <b-input v-model="form.message" maxlength="200" type="textarea" />
          </b-field>

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
  </section>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      submitted: false,
      form: {
        name: ' ',
        email: ' ',
        phone: ' ',
        message: ' '
      }
    }
  },
  metaInfo: {
    title: 'Hello, world!'
  },
  methods: {
    submitForm () {
      axios.post(
        'https://bqifcpkcgd.execute-api.ap-southeast-2.amazonaws.com/Prod/submitForm',
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
