<template>
  <Layer
    v-if="modalLayer.component"
    :component="modalLayer.component"
    :data="modalLayer.data"
  >
  </Layer>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator'
import Layer from '@/components/Layer.vue';
import type { ModalApi } from '@/components/modal/models';

@Component({
  components: {
    Layer,
  },
})
export default class ModalLayer extends Vue {
  @Inject() modalLayer!: ModalApi
};
</script>