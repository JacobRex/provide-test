<template>
  <Alert :title="title">
    Are you sure you want to close this modal?
    <template #actions>
      <Button
        fullwidth
        @click="closeAll"
      >
        Yes
      </Button>
      <Button
        variant="outline"
        fullwidth
        @click="closeAlert"
      >
        No
      </Button>
    </template>
  </Alert>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Alert from '@/components/alert/Alert.vue';

import type { ModalApi } from '@/components/modal/models';
import type { AlertApi } from '@/components/alert/models';

@Component({
  components: {
    Button,
    Alert
  },
})
export default class MyAlert extends Vue {
  @Inject() modalLayer!: ModalApi
  @Inject() alertLayer!: AlertApi

  @Prop({
    type: String,
  })
  title!: string

  closeAll() {
    this.modalLayer.close();
    this.alertLayer.close();
  }

  closeAlert() {
    this.alertLayer.close();
  }
}
</script>