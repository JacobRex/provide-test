<template>
  <Layer
    v-if="alertLayer.component"
    :component="alertLayer.component"
    :data="alertLayer.data"
  >
  </Layer>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator';
import Layer from '@/components/Layer.vue';
import type { AlertApi } from '@/components/alert/models';

@Component({
  components: {
    Layer,
  },
})
export default class alertLayer extends Vue {
  @Inject() alertLayer!: AlertApi;
};
</script>