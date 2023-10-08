<template>
  <div id="app" class="app-view">
      <component :is="layout">
          <router-view></router-view>
      </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  computed: {
    layout() {
      return this.$route?.meta?.layout || "DefaultLayout"
    },
  }
}
</script>
