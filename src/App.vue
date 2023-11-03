<template>
  <div id="app" class="app-view">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import store from '@/store/store'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  components: {},

  computed: {
    layout() {
      return this.$route?.meta?.layout || 'DefaultLayout'
    }
  },

  beforeCreate() {
    //надо будет поменять
    // this.$store.commit('initialiseStore')
    this.initialiseStore()
  },

  methods: {
    ...mapMutations(['initialiseStore'])
  }
}
</script>
