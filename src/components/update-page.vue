<template>
  <div>
    <h1 align="center">修改用户信息界面</h1>
    <input type="hidden" name="id" v-model="user.id">
    <el-form ref="form" :model="user" label-width="50px">
      <el-form-item label="用户名">
        <el-input name="realname" v-model="user.realname"></el-input>
      </el-form-item>

      <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker name="birth" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" v-model="user.birth" style="width: 50%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="性别">
        <el-radio-group v-model="user.gender">
          <el-radio name="gender" :label="1">男</el-radio>
          <el-radio name="gender"   :label="2">女</el-radio>

        </el-radio-group>

      </el-form-item>

      <el-form-item label="电话">
        <el-input name="tel" v-model="user.tel" length="50"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即修改</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: "",
    data(){
      return{
        user:{}
      }
    },
    methods:{
      onSubmit:function () {
        axios.post("api/updateuser",this.user).then(res=>{
          if (res.data!=null){
            this.$router.push("/")
          }
        })
      }
    }
    ,
    mounted(){
      var id = this.$route.params.id

      axios.post("api/findOne",{"id":id}).then(res=>{
        console.log(res.data)
        this.user=res.data;
       })
    }
  }
</script>

<style scoped>

</style>
