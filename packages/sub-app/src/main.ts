import "./assets/main.css";

import { createApp } from "vue";
import type { App as TypeApp } from "vue";
import type { Router } from "vue-router";
import {
  RouterHistory,
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import App from "./App.vue";
import routes from "./router";
import Antd, { message } from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

import { AgGridVue } from "@ag-grid-community/vue3";
import "@ag-grid-community/styles/ag-grid.min.css";
import "@ag-grid-community/styles/ag-theme-balham.min.css";
// 注册模块
ModuleRegistry.registerModules([
  ClientSideRowModelModule
]);
declare const window: Window & Record<string, any>;

let app: TypeApp | undefined = undefined;
let router: Router | undefined = undefined;
let history: RouterHistory | undefined = undefined;
const appName = "child";
window.mount = (props: any = {}) => {
  const { appContext } = props ?? {};
  console.log("props: ", props, appContext);

  app = createApp(App);

  history = createWebHashHistory(import.meta.env.BASE_URL);
  router = createRouter({
    history: history,
    routes: routes,
  });
  app.use(router);
  app.use(Antd);
  app.component("ag-grid-vue", AgGridVue);

  app.mount("#subapp");
};

window.unmount = () => {
  app && app.unmount();
  history && history.destroy();
  app = undefined;
  router = undefined;
  history = undefined;
  console.log("%c%s", "color: blue;", `${appName} app mount`);
};

/* ---------------------- micro-app 自定义全局事件 --------------------- */

window.onmount = (data: any) => {
  // throw new Error('sfsdfsf')
  console.log("子应用 window.onmount 事件", data);
};

window.onunmount = () => {
  // throw new Error('sfsdfsf')
  console.log("子应用 window.onunmount 事件");
};

// 监听keep-alive模式下的app状态
window.addEventListener("appstate-change", function (e: any) {
  console.log(
    `子应用${window.__MICRO_APP_NAME__}内部事件 keep-alive 状态：`,
    e.detail.appState
  );
});

window.addEventListener("unmount", function (e) {
  console.log(`子应用${window.__MICRO_APP_NAME__}内部unmount事件`);
});

if (!window.__MICRO_APP_ENVIRONMENT__) {
  window.mount();
}
