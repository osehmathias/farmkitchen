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
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
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
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
