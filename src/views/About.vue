
<template>
  <div class="about">
    <h1>可以在这里上传你的文件</h1>
  <input type="file" ref="file" name="myfile">
      <button v-on:click="submit">上传</button>
      <br><br><br><br><br><br>
      <button v-on:click="person_info_change">个人信息的更改</button>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    import axios from "axios"
    @Component
    export default class About extends Vue {
        //TODO instance 单独提取出一个文件
        instance : any;
        mounted(){
            this.instance = axios.create({
                baseURL:"http://127.0.0.1:5000",
                withCredentials:true
            })
        }
        submit(){
            let postParam = new FormData();
            let file = (this.$refs.file as any).files[0]
            postParam.append("my_file",file)
            this.instance.post("/files_upload",postParam).then((response:any)=>{
                console.log(response)
                if (response.data.status ===34)
                {
                    setTimeout(()=>{
                        this.$router.push({ path:'/world' })
                    },2000)
                }
                else {
                    console.log(response.data.status)
                }
            })
        }
        person_info_change()
        {
            setTimeout(()=>{
                this.$router.push({path:'/person_info_change'})
            })
        }

    }
</script>