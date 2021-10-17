<template>
  <div class="card" uk-sticky="offset: 20; bottom: true">
    <img src="https://assets-ouch.icons8.com/preview/125/6414b067-ba59-46ef-8693-4e190aa466c7.png" class="is-center" height="250" width="250" alt="">

    <div v-if="price > 0">
      <table class="uk-table uk-table-striped uk-table-small uk-table-responsive">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (unit)</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dish in selectedDishes" :key="dish.id">
            <td class="uk-width-1-2">
              {{ dish.name }}
            </td>
            <td class="uk-table-shrink">
              {{ dish.price }}€
            </td>
            <td class="uk-table-shrink">
              {{ dish.quantity }}
            </td>
            <td>
              <a class="uk-margin-left"><b-tag @click="addToCart(dish)">+</b-tag></a>
              <a><span class="uk-badge" style="background: #f0506e;" @click="removeFromCart(dish)">-</span></a>
            </td>
          </tr>
        </tbody>
      </table>
      <button class="uk-button uk-button-primary" name="button" @click="goToCheckout">
        Process to checkout ({{ price }}€)
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

  computed: {
    id () {
      return this.$route.params.id
    },
    selectedDishes () {
      return this.$store.getters['cart/items']
    },
    price () {
      return this.$store.getters['cart/price']
    },
    numberOfItems () {
      return this.$store.getters['cart/numberOfItems']
    }
  },
  methods: {
    ...mapMutations({
      addToCart: 'cart/add',
      removeFromCart: 'cart/remove'
    }),
    goToCheckout () {
      // Redirect to signin page if not logged in.
      const isConnected = this.$store.getters['auth/username']
      if (!isConnected) {
        this.$router.push('/signin')
        return
      }
      this.$router.push('/checkout')
    }
  }
}
</script>
