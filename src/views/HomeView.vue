<template>
  <div>
    Open a Modal or Alert by clicking one of the buttons below. When you attempt to close the modal with the X or cancel button, an alert will be shown inside the modal's portal to confirm that you want to close it.
    <br><br>
    <Button @click="openModal">
      Open Modal
    </Button>
    &nbsp;
    <Button
      @click="openAlert"
      variant="outline"
    >
      Open Alert
    </Button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import MyModal from '@/components/MyModal.vue';
import MyAlert from '@/components/MyAlert.vue';

import type { ModalApi } from '@/components/modal/models';
import type { AlertApi } from '@/components/alert/models';

@Component({
  components: {
    Button,
    MyModal,
  },
})
export default class HomeView extends Vue {
  @Inject() modalLayer!: ModalApi
  @Inject() alertLayer!: AlertApi

  openModal() {
    this.modalLayer.open(MyModal, {
      title: 'My Modal'
    });
  }

  openAlert() {
    this.alertLayer.open(MyAlert, {
      title: 'Alert Example'
    });
  }
};
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
}

h1,h2,h3,h4,h5 {
  margin: 0;
}
</style>