<template>
  <Alert :title="title">
    This is a sample alert to show that they can mount on their own.
    <template #actions>
      <Button
        fullwidth
        @click="closeAlert"
      >
        Close
      </Button>
    </template>
  </Alert>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import Alert from '@/components/alert/Alert.vue';

import type { AlertApi } from '@/components/alert/models';

@Component({
  components: {
    Button,
    Alert
  },
})
export default class MyAlert extends Vue {
  @Inject() alertLayer!: AlertApi

  @Prop({
    type: String,
  })
  title!: string

  closeAlert() {
    this.alertLayer.close();
  }
}
</script>