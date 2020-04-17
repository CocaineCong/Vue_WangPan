<template>
  <div id="element">
    <img alt="Vue logo" src="../assets/register.jpg" height="80" width="80">
    用户：<input type="text" v-model="user_name">
    密码：<input type="password" v-model="passwd">
    重复密码：<input type="password" v-model="repasswd">
    <button v-on:click="register">注册</button>
    <p v-if="flag===0">请注册</p>
    <p v-if="flag===1">注册失败</p>
    <p v-if="flag===2">注册成功,请回login页面登陆</p>
  </div>
</template>

<script lang="ts">

import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from "axios"
@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  instance: any;
  user_name: string="";
  passwd:string="";
  repasswd:string="";
  flag:number=0;
  mounted(){
      this.instance = axios.create({
        baseURL:"http://127.0.0.1:5000",
        withCredentials:true
      })
  }
  register(){
    let postParam = new FormData();
    postParam.append("name",this.user_name)
    postParam.append("passwd",this.passwd)
    this.instance.post("/registered",postParam).then((response:any)=>{
      console.log(response)
      if(response.data.status===true){
        this.flag=2
        alert("all right")
      }
      else if (response.data.status===false){
        this.flag=1
        alert("something_wrong")
      }
      else{
        this.flag=0
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>