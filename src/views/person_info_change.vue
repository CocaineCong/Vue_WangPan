<template>
    <div>
        <p>
            请输入要修改的账号:
            <input type="text" v-model="user_name">
            请输入要修改的原密码:
            <input type="password" v-model="old_passwd">
            <button v-on:click="check_old">点击确认旧密码</button>
            请输入修改后的密码:
            <input type="password" v-model="new_passwd">
            请重复所修改后的密码:
            <input type="password" v-model="re_new_passwd">
            <button v-on:click="check_new">点击确认修改</button>
        </p>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue} from 'vue-property-decorator',
    import axios from "axios"
    @Component
    export default class person_info_change extends Vue{
        @Prop() //private msg !: string;
        instance:any;
        flag :number =0;
        flag1:number=0;
        old_passwd : string="";
        new_passwd :string="";
        re_new_passwd :string="";
        user_name:string="";
        mounted(){
            this.instance=axios.create({
                baseURL:'http://127.0.0.1.5000',
                withCredentials:true
            })
        }
        check_old()
        {
            let postParam =new FormData();
            postParam.append("name",this.user_name)
            postParam.append("passwd",this.old_passwd) //后端检查的路由
            this.instance.post('/change_passwd',postParam).then((response:any)=>{
                console.log(response)
            if (response.data().status==true) {
                this.flag == 1
                alert("all right")
            }
            else {
                alert("something_wrong")
            }
        })
        }
        check_new(){
            let postParam =new FormData();

        }
    }
</script>

<style scoped>

</style>