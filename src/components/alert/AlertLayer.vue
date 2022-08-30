<template>
  <Layer
    v-if="alertLayer.component"
    :component="alertLayer.component"
    :data="alertLayer.data"
    :mode="mode"
    :valign="valign"
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

  mode = this.alertLayer?.isChild ? 'child' : 'standalone';
  valign = this.alertLayer?.isChild ? 'top' : 'center';
};
</script>