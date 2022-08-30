import type { Component, Data } from "vue";

export interface AlertApi {
  open: Function,
  close: Function,
  component?: Component,
  data?: Data
}