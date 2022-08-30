<template>
  <div class="modal">
    <header class="modal__header">
      <img
        class="modal__close-icon"
        src="@/assets/x.svg"
        @click="$emit('close')"
      />
      <h3
        v-if="title"
        class="modal__title"
      >
        {{ title }}
      </h3>
    </header>
    <div class="modal__body">
      <slot />
    </div>
    <footer
      v-if="$slots.actions"
      class="modal__footer"
    >
      <slot name="actions" />
    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import AlertLayer from '@/components/alert/AlertLayer.vue';
import AlertApiProvider from '@/components/alert/AlertApiProvider';

@Component
export default class Modal extends Vue {
  @Prop({
    type: String,
  })
  title!: string
}
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(100% - 60px);
  max-width: 500px;
  max-height: calc(100vh - 60px);
  background: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
}

.modal__header {
  flex: 0 0 auto;
  position: relative;
  margin: 30px 0;
  text-align: center;
}

.modal__close-icon {
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  cursor: pointer;
}

.modal__body {
  flex: 1;
  padding: 0 30px 30px 30px;
  overflow: auto;
}

.modal__footer {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  border-top: 1px solid #ddd;
}
</style>