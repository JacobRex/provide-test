import { Vue, Component, Provide } from 'vue-property-decorator';
import type { AlertApi } from '@/components/alert/models';
import type { Component as VueComponent, Data } from "vue";

@Component
export default class AlertApiProvider extends Vue {
  @Provide() alertLayer = {
    open: this.openAlert,
    close: this.closeAlert,
    component: undefined,
    data: undefined,
    isChild: false
  } as AlertApi

  openAlert(component: VueComponent, data: Data) {
    if (component) {
      this.alertLayer.component = component;
      this.alertLayer.data = data;
    } else {
      throw new Error('AlertLayer: No component was defined to open.');
    }
  }

  closeAlert() {
    this.alertLayer.component = undefined;
    this.alertLayer.data = undefined;
  }
}