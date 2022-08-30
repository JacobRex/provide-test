<template>
  <div class="layout">
    <slot />
    <ModalLayer />
    <AlertLayer />
  </div>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import ModalLayer from '@/components/modal/ModalLayer.vue';
import ModalApiProvider from '@/components/modal/ModalApiProvider';
import AlertLayer from '@/components/alert/AlertLayer.vue';
import AlertApiProvider from '@/components/alert/AlertApiProvider';

@Component({
  components:  {
    ModalLayer,
    AlertLayer,
  }
})
export default class Layout extends Mixins(
  ModalApiProvider,
  AlertApiProvider
) {};
</script>
