<template>
  <div class="contbox">
    <el-input v-model="input" placeholder="排队订单" style="width:150px;float:left"></el-input>
    <el-button type="primary" icon="el-icon-search" id="search"  style="width:80px;float:left">搜索</el-button>
    <div class="menu-box" style="margin-top:10px;">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="排队编号" width="150"></el-table-column>
        <el-table-column label="排队订单号" width="150"></el-table-column>
        <el-table-column label="排队客人人数" width="150"></el-table-column>
        <el-table-column label="当前排在" width="150"></el-table-column>
    
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style>
.contbox {
  margin-top: 3%;
  margin-left: 3%;
}
#search{
  margin-bottom: 15px;
}
</style>