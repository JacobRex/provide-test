import type { Component, Data } from "vue";

export interface AlertApi {
  open: Function,
  close: Function,
  component?: Component,
  data?: Data,
  isChild: boolean // the alert is contained in something other than the layout
}