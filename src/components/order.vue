<template>
  <div class="contbox">
    <el-input v-model="input" placeholder="输入桌号/订单编号" style="width:150px;float:left"></el-input>
    <el-button type="primary" icon="el-icon-search" id="search"  style="width:80px;float:left">搜索</el-button>
    <div class="menu-box" style="margin-top:10px;">
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column label="订单编号" width="150"></el-table-column>
        <el-table-column label="桌号" width="150"></el-table-column>
        <el-table-column label="下单时间" width="150"></el-table-column>
        <el-table-column label="订单总价" width="150"></el-table-column>
        <el-table-column label="支付状态" width="150"></el-table-column>
        <el-table-column label="加菜订单" width="150"></el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">修改加菜订单</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">退单</el-button>
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