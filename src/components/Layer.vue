<template>
  <transition
    enter-active-class="fading"
    leave-active-class="fading"
    enter-class="transparent"
    leave-to-class="transparent"
    appear
  >
    <div
      v-if="component"
      class="layer"
    >
      <component
        class="layer__component"
        :is="component"
        v-bind="data"
      />
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import type { Component as VueComponent, Data } from "vue";

@Component
export default class Layer extends Vue {
  @Prop({
    type: Function,
    required: true
  })
  component!: VueComponent

  @Prop({
    type: Object,
  })
  data!: Data

  @Prop({
    type: String,
    default: 'standalone',
    validator: (val:string) => ['standalone', 'child'].includes(val)
  })
  mode!: string

  @Prop({
    type: String,
    default: 'center',
    validator: (val:string) => ['center', 'top'].includes(val)
  })
  valign!: string

  // Idea: transition prop for changing animation
  // Idea: variant prop for changing backdrop style
};
</script>

<style scoped>
.layer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
}

/* Fade Transition
---------------------------------------------- */
.fading {
  transition: .4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.fading .layer__component {
  transition: transform .4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.transparent {
  opacity: 0;
}

.transparent .layer__component {
  transform: translateY(10px);
}
</style>