<template>
  <Layout id="app">
    <router-view />
  </Layout>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import Layout from '@/components/Layout.vue';

@Component({
  components: {
    Layout
  }
})
export default class App extends Vue {};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}

h1,h2,h3,h4,h5 {
  margin: 0;
}
</style>