<template>
  <div id="app" class="app-view">
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {},

  computed: {
    layout() {
      return this.$route?.meta?.layout || 'DefaultLayout';
    }
  },

  created() {
    this.initialiseStore();
  },

  methods: {
    ...mapMutations(['initialiseStore'])
  }
};
</script>
