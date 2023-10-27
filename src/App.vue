<template>
  <div id="app" class="app-view">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'App',
  components: {},

  computed: {
    layout() {
      return this.$route?.meta?.layout || 'DefaultLayout'
    }
  },

  beforeCreate() {
    this.$store.commit('initialiseStore')
    console.log(this.$store.state.likedProducts)
  }
}
</script>
