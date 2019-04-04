<template>
  <div class="ovbox">
    <div class="btn-box">
      <el-button type="primary" plain @click="addTable(1)" id="add-btn">添加一张桌子</el-button>
      <el-button type="primary" plain id="reduce-btn">删除一张桌子</el-button>
    </div>
    
    <div class="cont-box">
      <el-table :data="tables" style="width: 100%;" max-height="450">
        <el-table-column fixed label="时间" width="150">
          <template slot-scope="scope">{{ scope.row.addTime }}</template>
        </el-table-column>
        <el-table-column label="桌号" width="150">
          <template slot-scope="scope">{{ scope.row.deskId }}号桌</template>
        </el-table-column>
        <el-table-column label="类型" width="150">
          <template slot-scope="scope">{{ scope.row.deskType==0 ?'8人桌':'4人桌'}}</template>
        </el-table-column>
        <el-table-column label="使用情况" width="150">
          <template slot-scope="scope">{{ scope.row.isUse==false ?'空闲中':'使用中'}}</template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="150">
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >移除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
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
.ovbox {
  margin-left: 8%;
  margin-top: 3%;
 
}
.cont-box{
 width: 750px;
 margin-top: 10px;
}
#add-btn {
  float: left;
}
#reduce-btn {
  float: left;
}
.btn-box {
  margin-bottom: 10px;
}

</style>
