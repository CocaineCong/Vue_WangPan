<template>
    <div>
        {{ msg }}
    </div>
</template>
<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator';
    @Component
    export default class Slot_test extends Vue {
        name:string = "请输入账号密码"
        @Prop() private msg!: string;

    }
</script>

<style scoped>

</style>
