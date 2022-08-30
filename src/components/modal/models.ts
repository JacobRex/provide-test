import type { Component, Data } from "vue";

export interface ModalApi {
  open: Function,
  close: Function,
  component?: Component,
  data?: Data
}