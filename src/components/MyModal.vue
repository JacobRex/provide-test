<template>
  <Modal
    :title="title"
    @close="showAlert"
  >
    <div class="my-modal">
      I'm a modal.
    </div>
    <template #actions>
      <Button
        variant="outline"
        @click="showAlert"
      >
        Cancel
      </Button>
      <Button @click="closeModal">
        Done
      </Button>
    </template>
  </Modal>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Modal from '@/components/modal/Modal.vue';

import type { ModalApi } from '@/components/modal/models';

@Component({
  components: {
    Button,
    Modal
  },
})
export default class MyModal extends Vue {
  @Inject() modalLayer!: ModalApi

  @Prop({
    type: String,
  })
  title!: string

  alertShown = false as boolean;

  showAlert() {
    this.alertShown = true;
  }

  closeAlert() {
    this.alertShown = false;
  }

  closeModal() {
    this.modalLayer.close();
  }
}
</script>

<style scoped>
.my-modal {
  height: 250px;
}
</style>