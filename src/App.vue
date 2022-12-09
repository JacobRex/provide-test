<template>
  <Layout id="app">
    <ci-dashboard>
      <router-view />
    </ci-dashboard>
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';
import { CiDashboard } from '@ci/stratus-components';

@Component({
  components: {
    Layout,
    CiDashboard
  }
})
export default class App extends Vue {};
</script>

<style lang="css">
@import '../node_modules/@ci/stratus-components/build/main.css';

#app {
  font-family: Arial, Helvetica, sans-serif;
}

h1,h2,h3,h4,h5 {
  margin: 0;
}
</style>