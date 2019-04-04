<template>
  <div class="overview">
    <el-button type="primary" plain @click="addTable(1)" id="add-btn">主要按钮</el-button>
    <el-table
      :data="tables" 
      :default-sort="{prop: 'addTime', order: 'descending'}"
      style="width: 100%"
    >
      <el-table-column  label="创建时间" width="180">
        <template slot-scope="scope">{{ scope.row.addTime }}</template>
      </el-table-column>
      <el-table-column label="桌号" width="180">
        <template slot-scope="scope">{{ scope.row.deskId }}号桌</template>
      </el-table-column>
      <el-table-column label="桌子类型" width="180">
        <template slot-scope="scope">{{ scope.row.deskType==0 ?'8人桌':'4人桌'}}</template>
      </el-table-column>
      <el-table-column label="使用情况">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)"
          >{{ scope.row.isUse==false ?'空闲中':'使用中'}}</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tables: []
    };
  },
  mounted() {
    this.getTables();
  },
  methods: {
    getTables() {
      this.$axios
        .get("/ht/deskManager/lookAllDesk")
        .then(res => {
          console.log("xx成功");
          const { data } = res;
          if (data) {
            const { code, data: tables } = data;
            if (code == 0) {
              this.tables = tables;
            } else {
              //失败
            }
          } else {
            //失败
          }
        })
        .catch(e => {
          //失败
          console.log(`xx成功${e}`);
        });
    },
    addTable(type) {
      this.$axios
        .post("/ht/deskManager/addDesk", {
          type,
          number: 1
        })
        .then(res => {
          const { data } = res;
          if (data) {
            const { code } = data;
            !code && this.getTables();
          }
        })
        .catch(e => {});
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style>
.overview {
  margin-left: 5%;
  margin-top: 3%;
}
#add-btn {
  display: inline-block;
  float: left;
  margin-bottom: 15px;
}
</style>


