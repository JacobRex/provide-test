<template>
  <div>
    Open a Modal or Alert by clicking one of the buttons below. When you attempt to close the modal with the X or cancel button, an alert will be shown inside the modal's portal to confirm that you want to close it.
    <br><br>
    <ci-button @click="openBlade1">Open Blade 1</ci-button>
    <br><br>
    <ci-button @click="openBlade2">Open Blade 2</ci-button>
    <br><br>
    <ci-button @click="openModal">
      Open Modal
    </ci-button>
    <br><br>
    <ci-button @click="openAlert">
      Open Alert
    </ci-button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Inject } from 'vue-property-decorator';
import MyModal from '@/components/MyModal.vue';
import MyAlert from '@/components/MyAlert.vue';
import MyBlade from '@/components/MyBlade.vue';
import AnotherBlade from '@/components/AnotherBlade.vue';
import { CiButton } from '@ci/stratus-components';

import type { ModalApi } from '@/components/modal/models';
import type { AlertApi } from '@/components/alert/models';
import type { BladeApi } from '@ci/stratus-components/components/blade/models';

@Component({
  components: {
    CiButton,
    MyModal,
  },
})
export default class HomeView extends Vue {
  @Inject() bladeLayer!: BladeApi;
  @Inject() modalLayer!: ModalApi
  @Inject() alertLayer!: AlertApi

  openBlade1 () {
    this.bladeLayer.open(
      MyBlade,
      {
        title: 'My Blade'
      }
    )
  }

  openBlade2 () {
    this.bladeLayer.open(
      AnotherBlade,
      {
        title: 'Another Blade'
      }
    )
  }

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