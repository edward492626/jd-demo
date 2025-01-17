<template>
  <div class="container">

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

  <ag-grid-vue
            ref="mainGridRef"
            style="width: 100%; height: 100%"
            class="ag-theme-balham"
            :singleClickEdit="true"
            :rowData="mainGridRowData"
            :columnDefs="mainGridColumnDefs"
            :defaultColDef="mainGridDefaultColDef"
            rowSelection="multiple"
            groupDisplayType="groupRows"
            rowGroupPanelShow="always"
            :rowDragMultiRow="true"
            :suppressMoveWhenRowDragging="true"
            :rowDragManaged="true"
            :stopEditingWhenCellsLoseFocus="true"
            :checkboxSelection="true"
            :suppressRowClickSelection="true">
            </ag-grid-vue>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const value = ref();
const options = ref([]);



const mainGridRowData = ref([
  {
    CODE_CLASS: 'TE00',
    UNIT: 'A001',
    EX_CODE: '0',
    EX_DESC: '模拟电文',
    EX_CODE_M: '0,1',
    PROD_TIME: '20220908232425',
    WEIGHT: 78.9,
    LEVEL: '0',
    REMARK: '11',
    PASS: '0',
    REMARK1: '附件上传',
    REMARK2: '业务快捷链接',
    REMARK3: '节点实例状态',
    REMARK4: '非授权按钮'
  },
  {
    CODE_CLASS: 'BG01',
    UNIT: 'A002',
    EX_CODE: '0',
    EX_DESC: '模拟电文',
    EX_CODE_M: '0',
    PROD_TIME: '20221008232425',
    WEIGHT: 20,
    LEVEL: '1',
    REMARK: '22',
    PASS: '0',
    REMARK1: '板坯位置',
    REMARK2: '打印备注',
    REMARK3: '缺陷位置',
    REMARK4: '取样标记'
  },
  {
    CODE_CLASS: 'ST88',
    UNIT: 'A003',
    EX_CODE: '0',
    EX_DESC: '模拟电文',
    EX_CODE_M: '0',
    PROD_TIME: '20221109383800',
    WEIGHT: 87,
    LEVEL: '0',
    REMARK: '33',
    PASS: '1',
    REMARK1: '劳动力',
    REMARK2: '思考思考',
    REMARK3: '的力量大',
    REMARK4: '其他资源'
  },
  {
    CODE_CLASS: 'TE46',
    UNIT: 'A004',
    EX_CODE: '0',
    EX_DESC: '模拟电文',
    EX_CODE_M: '0',
    PROD_TIME: '20220607454545',
    WEIGHT: 45,
    LEVEL: '0',
    REMARK: '44',
    PASS: '1',
    REMARK1: '批处理',
    REMARK2: '业务代码',
    REMARK3: '进度跟踪',
    REMARK4: '日志'
  }
]);

const mainGridDefaultColDef = ref({
  sortable: true,
  editable: false,
  filter: 'agMultiColumnFilter',
  resizable: true
});

const mainGridColumnDefs = ref([
  {
    headerCheckboxSelection: true,
    checkboxSelection: true,
    showDisabledCheckboxes: true,
    pinned: 'left',
    lockPinned: true,
    editable: false,
    maxWidth: 60,
    rowDrag: true
  },

  {
    field: 'testComp',
    headerName: '水果',
    tooltipField: 'testComp'
  },
  {
    field: 'CODE_CLASS',
    headerName: '代码编号(文本编辑)',
    pinned: 'left',
    lockPinned: true,
    enableRowGroup: true,
    cellEditorParams: { maxLength: 20 },
    tooltipField: 'CODE_CLASS'
  },
  {
    field: 'UNIT',
    headerName: '机组(下拉多列)',
    enableRowGroup: true
  },
  {
    field: 'EX_CODE',
    headerName: '电文(下拉多列并联动)',
    cellEditorPopup: true
  },
  {
    field: 'EX_DESC',
    headerName: '电文描述',
    cellDataType: 'text'
  },
  {
    field: 'EX_CODE_M',
    headerName: '电文(下拉多选)'
  },
  {
    field: 'PROD_TIME',
    headerName: '生产时间(日期编辑)',
    enableRowGroup: true,
  },
  // {
  //   headerName: "详细信息",
  //   children: [
  {
    field: 'WEIGHT',
    headerName: '重量(数值编辑)',
    cellDataType: 'number',
    enableRowGroup: true,
    cellEditorParams: { showStepperButtons: true }
  },
  {
    field: 'LEVEL',
    headerName: '等级(下拉单列)',
    enableRowGroup: true
  },
  {
    field: 'PASS',
    headerName: '是否通过(布尔编辑)',
    enableRowGroup: true,
    cellDataType: 'boolean'
  },
  {
    field: 'REMARK1',
    headerName: '备注1(多行文本编辑)',
    cellEditorPopup: true,
    cellEditor: 'agLargeTextCellEditor',
    cellEditorParams: { maxLength: 250, rows: 10, cols: 50 }
  }
  ]);
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}
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
