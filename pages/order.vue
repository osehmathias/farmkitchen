<template>
  <div>
    <!-- // Link to go back to the previous page -->
    <a class="button" @click="$router.go(-1)"><b-icon
      icon="arrow-left"
      size="is-small"
    /> <span>go back</span></a>

    <client-only>
      <div class="container">
        <!-- // Left card displaying dishes -->
        <div class="column is-one-third">
          <!-- <div v-for="dish in restaurant.dishes" class="uk-margin"> -->
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
              </figure>
            </div>
            <div class="card-content">
              <p class="subtitle is-5">
                name <b-tag>$3.00</b-tag>
              </p>
              <p>description</p>
            </div>
            <footer class="card-footer">
              <button class="card-footer-item">
                Add to cart
              </button>
            </footer>
          </div>
          <!-- </div> -->
        </div>

        <!-- // Right card that will display your cart -->
        <div class="col-6" />
      </div>
    </client-only>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  }

}
</script>
