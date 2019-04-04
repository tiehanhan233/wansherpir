<template>
  <div class="contbox">
    <el-input v-model="input" placeholder="输入菜品编号" style="width:150px;float:left"></el-input>
    <el-button type="primary" icon="el-icon-search" id="search"  style="width:80px;float:left">搜索</el-button>
    <div class="menu-box" style="margin-top:10px;">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="菜品编号" width="150"></el-table-column>
        <el-table-column label="菜品类型" width="150"></el-table-column>
        <el-table-column label="菜品名字" width="150"></el-table-column>
        <el-table-column label="菜品信息" width="150"></el-table-column>
        <el-table-column label="菜品价格" width="150"></el-table-column>
        <el-table-column label="菜品剩余" width="150"></el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">菜品修改</el-button>
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">菜品添加</el-button>
          </template>
        </el-table-column>
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