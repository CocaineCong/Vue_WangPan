<template>
<div>
    <h1>
      成功
    </h1>
    <button v-on:click="share">分享</button>
    <button v-on:click="good">点赞</button>
    <h1>{{ count }}</h1>
</div>
    </template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import axios from "axios"
    @Component
    export default class HelloWorld extends Vue {
        @Prop() private msg!: string;
        instance: any;
        count:number=0;
        mounted(){
            this.instance = axios.create({
                baseURL:"http://127.0.0.1:5000",
                withCredentials:true
            })
            let postParam = new FormData();
            this.instance.get("/share/define_count").then((response:any)=> {
                this.count=response.data.msg
            })
        }
        good(){
            let postParam = new FormData();
            this.instance.post("/share/add",postParam).then((response:any)=>{
                console.log(response)
               this.count += 1
            }
            )
        }
        share(){
            let postParam =new FormData();
            this.instance.post("/")
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
