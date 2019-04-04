<template>
  <div class="contbox">

    <el-dropdown style="float:left;">
      <el-button type="primary" icon="el-icon-search">
        条件搜索
        <i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>空闲桌子</el-dropdown-item>
        <el-dropdown-item>已预订桌子</el-dropdown-item>
        <el-dropdown-item>已占用的桌子</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-button type="primary" icon="el-icon-search" id="search" style="width:80px;float:right;margin-right:100px;">搜索</el-button>
    <el-input v-model="input" placeholder="请输入桌号查询" style="width:150px;float:right;"></el-input>
    

    <div class="menu-box" style="margin-top:8px;">
      <el-table :data="tables" stripe style="width: 100%" height="460">
        <el-table-column label="桌号" width="150">
          <template slot-scope="scope">{{ scope.row.id }}</template>
        </el-table-column>
        <el-table-column label="桌子类型" width="150">
          <template slot-scope="scope">{{ scope.row.type==0 ?'8人桌':'4人桌'}}</template>
        </el-table-column>
        <el-table-column label="使用情况" width="150">
          <template slot-scope="scope">{{ scope.row.isUse==false ?'使用中':'空间中'}}</template>
        </el-table-column>
        <el-table-column label="占用时间" width="150">
          <template slot-scope="scope">{{ scope.row.occupy_time}}</template>
        </el-table-column>
        <el-table-column label="预定时间" width="150">
          <template slot-scope="scope">{{ scope.row.order_time}}</template>
        </el-table-column>
        <el-table-column label="操作" width="230">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">占用</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">退桌</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-button type="info" style="float:left;margin-top:10px;" @click="addTable_4(1)">添加一张4人桌</el-button>
    <el-button type="info" style="float:left;margin-top:10px;" @click="addTable_8(0)">添加一张8人桌</el-button>
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
        .get("/ht/desk/get_all_desk")
        .then(res => {
          console.log("xx成功");
          const { data } = res;
          if (data) {
            const { code, data: tables } = data;
            if (code == 0) {
              this.tables = tables;
            } else {
              //failed
            }
          } else {
            //failed
          }
        })
        .catch(err => {
          console.log("xx成功${e}");
        });
    },

    addTable_4() {
      this.$axios
        .post("/ht/desk/add_desk", {
          type: 1
        })
        .then(res => {
          const { data } = res;
          if (data) {
            const { code } = data;
            !code && this.getTables();
          }
        })
        .catch(err => {});
    },
    addTable_8() {
      this.$axios
        .post("/ht/desk/add_desk", {
          type: 0
        })
        .then(res => {
          const { data } = res;
          if (data) {
            const { code } = data;
            !code && this.getTables();
          }
        })
        .catch(err => {});
    },

    handleClick() {
        alert('button click');
      },
    handleClick1(row) {
      console.log(row);
    }

  }
};
</script>

<style>
.contbox {
  margin-left: 3%;
}
#search {
  margin-bottom: 15px;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
