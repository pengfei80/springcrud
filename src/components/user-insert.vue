<template>
  <div>
    <h1 align="center">添加用户界面</h1>
    <el-form ref="form" :model="user" label-width="80px">
      <el-form-item label="用户名">
        <el-input name="realname" v-model="user.realname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input name="pass" v-model="user.pass"></el-input>
      </el-form-item>
       <el-form-item label="生日">
        <el-col :span="11">
          <el-date-picker name="birth" type="datetime" value-format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期" v-model="user.birth" style="width: 100%;"></el-date-picker>
        </el-col>
      </el-form-item>

      <el-form-item label="性别">
          <el-radio-group v-model="user.gender">
          <el-radio name="gender" :label="male">男</el-radio>
          <el-radio name="gender"   :label="female">女</el-radio>
       </el-radio-group>

      </el-form-item>

      <el-form-item label="通讯地址">
        <el-input name="tel" v-model="user.tel"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即添加</el-button>
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
  }
</script>

<style scoped>

</style>
