<template>
    <div id="element">
        <img alt="Vue logo" src="../assets/login.gif" height="80" width="80">
        用户：<input type="text" v-model="user_name">
        密码：<input type="password" v-model="passwd">
        <button v-on:click="login">登陆</button>
        <p v-if="flag===4">请登录</p>
        <p v-if="flag===0">该用户还不存在，请注册</p>
        <p v-if="flag===1">登陆成功,请到稍等就可进入主页面</p>
        <p v-if="flag===2">用户名或是密码不正确</p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import axios from "axios"
    @Component
    export default class user_login extends Vue {
        @Prop() //private msg!: string;
        instance: any;
        user_name: string="";
        passwd:string="";
        flag:number=4;
        mounted(){
            this.instance = axios.create({
                baseURL:"http://127.0.0.1:5000",
                withCredentials:true
            })
        }
        login(){
            let postParam = new FormData();
            postParam.append("name",this.user_name)
            postParam.append("passwd",this.passwd)
            this.instance.post("/login",postParam).then((response:any)=>{
                console.log(response)
                if(response.data.status===34)
                {
                    this.flag=1
                    setTimeout(()=>{
                        this.$router.push({ path:'/about' })
                    },2000)

                }
                else if (response.data.status===false){
                    this.flag=2

                    alert("something wrong")
                }
                else{
                    this.flag=0
                    alert("something wrong")
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