<template>
    <div>
        父组件内容---------------------------------------------
        <childTransferValue :msg="toChildvalue" @postMessage="postMessage"></childTransferValue>
        <div>拿到子组件的数据:{{ faval }}</div>
        <button @click="reset">reset</button>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import childTransferValue from './childTransferValue.vue';
const toChildvalue: any = ref('从父组件发过去的信息')

const faval:any = ref(0)

const postMessage = (childval:number) => {
    faval.value = childval
}

const reset = () => {
    faval.value = 0
}

</script>
<style lang="">
    
</style>