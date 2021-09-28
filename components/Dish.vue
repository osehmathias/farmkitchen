<template>
  <div>
    <a class="uk-button uk-button-primary uk-margin" @click="$router.go(-1)"><span uk-icon="arrow-left" /> go back</a>

    <client-only>
      <div uk-grid>
        <div class="uk-width-1-3@m">
          // Left card displaying dishes
          <div class="uk-margin">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <img src="http://localhost:1337/" alt="">
              </div>
              <div class="uk-card-body">
                <h3 class="uk-card-title">
                  Name <span class="uk-badge">3€</span>
                </h3>
                <p>Tescription</p>
              </div>
              <div class="uk-card-footer">
                <button class="uk-button uk-button-primary" @click="addToCart(dish)">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        // Right card displaying you cart
        <div class="uk-width-expand@m">
          // Call a Cart component
          <Cart />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Cart from '~/components/Cart.vue'
export default {
  // data() {
  //   return {
  //     restaurant: Object
  //   }
  // },
  components: {
    Cart
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    })
  }
}
</script>
