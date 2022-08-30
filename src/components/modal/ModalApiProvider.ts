import { Vue, Component, Provide } from 'vue-property-decorator';
import type { ModalApi } from '@/components/modal/models';
import type { Component as VueComponent, Data } from "vue";

@Component
export default class ModalApiProvider extends Vue {
  @Provide() modalLayer = {
    open: this.openModal,
    close: this.closeModal,
    component: undefined,
    data: undefined,
  } as ModalApi

  openModal(component: VueComponent, data: Data) {
    if (component) {
      this.modalLayer.component = component;
      this.modalLayer.data = data;
    } else {
      throw new Error('ModalLayer: No component was defined to open.');
    }
  }

  closeModal() {
    this.modalLayer.component = undefined;
    this.modalLayer.data = undefined;
  }
}