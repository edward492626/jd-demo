<template>
  <div class="card">
    <div class="card_cont">
      <div class="card_header">herder</div>
      <div class="card_body">
        <div
          style="
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            gap: 10px;
          "
        >
          <a-input />
          <a-input />
          <a-input />
          <a-select
            v-model:value="value"
            placeholder="custom dropdown render"
            :options="options"
            :dropdownMatchSelectWidth="false"
            :popupClassName="'pop_grid'"
            :dropdownStyle="{
              width: '400px',
              height: '300px',
            }"
          >
            <template #dropdownRender> test content </template>
          </a-select>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref();
const options = ref([]);
</script>
<style scoped>
.card {
  padding: 5px;
}
.card_cont {
  border: 1px solid #99d2ff;
  border-radius: 4px;
}
.card_header {
  padding: 0 10px;
  color: #2f80ed;
  height: 25px;
  background-color: #dbefff;
}
.card_body {
  padding: 5px;
}
.pop_grid > div {
  width: 100% !important;
  height: 100% !important;
}
</style>
