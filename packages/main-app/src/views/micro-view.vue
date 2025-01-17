<template>
  <div style="width: 100%; height: 100%; display: flex">
    <div class="menu">
      <button @click="handleRefresh">刷新</button>
    </div>
    <div class="main">
      <div class="header">head</div>
      <micro-app
        name="child"
        :url="url"
        :router-mode="'state'"
        :data="config"
        iframe
        @created="handleCreate"
        @beforemount="handleBeforeMount"
        @mounted="handleMount"
        @unmount="handleUnmount"
        @error="handleError"
        @datachange="handleDataChange"
      ></micro-app>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import microApp from "@micro-zoe/micro-app";

const url = "http://localhost:5175";
const config = ref<Record<string, any>>({
  appContext:"/test/",
  data: {}
});
const handleCreate = () => {
  console.log("[LifeCycle] created %c%s", "color: green;", "child");
};
const handleBeforeMount = (e: CustomEvent) => {
  console.log("[LifeCycle] before mount %c%s", "color: green;", "child"
  );
};
const handleMount = () => {
  console.log("[LifeCycle] mounted %c%s", "color: green;", "child");
};
const handleUnmount = (e: CustomEvent) => {
  console.log("[LifeCycle] unmount %c%s", "color: green;", "child");
};
const handleError = (e: CustomEvent) => {
  console.log( "failed to load %c%s, detail:", "color: red;", 'child', e.detail.error);
};
const handleDataChange = (e: CustomEvent) => {
  console.log("from child:", e.detail.data);
};

const handleRefresh = (e: any) => {
  microApp.reload('child', true);
}
</script>
<style scoped>
.menu {
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
}
.header {
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: antiquewhite;
}
.main {
  width: calc(100% - 300px);
  height: 100%;
  /* background-color: azure; */
}
.main micro-app {
  height: calc(100% - 48px);
}
</style>
