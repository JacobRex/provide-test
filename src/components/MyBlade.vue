<template>
  <ci-blade :title="title">
    Content goes here.
  </ci-blade>
</template>

<script lang="ts">
import { Vue, Component, Prop, Inject } from 'vue-property-decorator';
import { CiBlade } from '@ci/stratus-components';
import type { BladeApi } from '@ci/stratus-components/components/blade/models';

@Component({
  components: {
    CiBlade,
  },
})
export default class MyAlert extends Vue {
  @Inject() bladeLayer!: BladeApi

  @Prop({
    type: String,
  })
  title!: string

  closeAlert() {
    this.bladeLayer.close();
  }
}
</script>