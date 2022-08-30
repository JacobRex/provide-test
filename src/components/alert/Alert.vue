<template>
  <div class="alert">
    <header class="alert__header">
      <h3
        v-if="title"
        class="alert__title"
      >
        {{ title }}
      </h3>
    </header>
    <div class="alert__body">
      <slot />
    </div>
    <footer class="alert__footer">
      <slot name="actions" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Alert extends Vue {
  @Prop({
    type: String,
  })
  title!: string
}
</script>

<style scoped>
.alert {
  width: calc(100% - 60px);
  max-width: 250px;
  background: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.alert__header {
  position: relative;
  margin: 30px 0;
  text-align: center;
}

.alert__close-icon {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.alert__body {
  margin: 30px;
}

.alert__footer {
  margin: 10px 30px 30px 30px;
}

.alert__footer button:last-child:not(:first-child) {
  margin-top: 10px;
}
</style>