<template>
  <Modal
    :title="title"
    @close="showAlert"
  >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae ullamcorper leo, eget tincidunt nisi. Curabitur elementum odio vitae risus ultricies, at placerat lorem fringilla. Nulla porttitor nibh sed elementum fringilla. Nam in diam quis ipsum aliquam egestas. Donec rutrum fringilla mi, vitae ullamcorper ex. Sed eu varius leo. Aenean pellentesque et lectus nec tempus. Sed at ipsum nisi. Cras nec ligula tincidunt, suscipit est eget, tempor nibh. Aliquam porttitor congue sem fermentum mollis. In sed justo ut nibh cursus commodo.
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
import MyModalAlert from '@/components/MyModalAlert.vue';

import type { ModalApi } from '@/components/modal/models';
import type { AlertApi } from '@/components/alert/models';

@Component({
  components: {
    Button,
    Modal,
    MyModalAlert
  },
})
export default class MyModal extends Vue {
  @Inject() modalLayer!: ModalApi
  @Inject() alertLayer!: AlertApi

  @Prop({
    type: String,
  })
  title!: string

  showAlert() {
    this.alertLayer.isChild = true;
    this.alertLayer.open(MyModalAlert, {
      title: "Hold on"
    })
  }

  closeModal() {
    this.modalLayer.close();
  }
}
</script>