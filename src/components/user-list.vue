<template>
  <div>
    <h1 align="center">用户信息主界面</h1>
    <el-button type="danger" @click="insertPage"  round>添加用户</el-button>
  <el-table
    :data="tableData"
    style="width:100%">
    <el-table-column
      prop="realname"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="pass"
      label="密码">
    </el-table-column>
    <el-table-column
      prop="tel"
      label="电话">
    </el-table-column>
    <<el-table-column
      prop="gender"
      label="性别">
    </el-table-column>
    <el-table-column
      prop="birth"
      label="日期"
      width="180">
    </el-table-column>
    <<el-table-column
    fixed="right"
    label="操作"
    width="100">
    <template slot-scope="scope">
      <el-button type="primary" @click="deleteByid(scope.row)"  size="small">删除</el-button><br><br>
      <el-button type="primary" @click=" updatePage(scope.row)"  size="small">编辑</el-button>
    </template>
  </el-table-column>



  </el-table>
  <el-pagination background layout="prev, pager, next"  :total="total" :current-page="this.params.page"  v-on:current-change="changePage" :page-size="this.params.size">
  </el-pagination>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        tableData: [],
        params: {
          size:5,
          page:1
        },
        total:100
      }
    },
    methods:{
      changePage:function (page) {
        this.params.page=page;
        this.findAll();

      },
      findAll:function () {
        var _this = this;
        axios.get("api/findAll/"+this.params.size+"/"+this.params.page).then(function (res) {
          _this.tableData= res.data.list;
          _this.params.page=res.data.total
        })
      },
      updatePage:function (scop) {
        alert(scop.id)
        this.$router.push("/updatePage/"+scop.id)
      },
      insertPage:function () {
        this.$router.push("/insertPage")
      },
      deleteByid:function (scop) {
        alert(scop.id)

        axios.post("api/deleteById",{id:scop.id}).then(res=>{
          if (res.data==("success")){
            _this.findAll()

          }else {
            alert("删除失败")
          }
        })

      }
    },
    mounted(){
   this.findAll()
    }
  }
</script>
