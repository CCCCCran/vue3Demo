<template>
    <div>
        <div>子组件内容 ---------------------------------------------</div>
        from father's value: {{ value }}
        <div><button @click="post">发送给父组件</button></div>
    </div>
</template>
<script setup lang="ts">
import { defineProps,defineEmits } from 'vue';
    const value = defineProps({
        msg:{
            default:'',
            type:String
        }
    })
    const emit = defineEmits([
        'postMessage'
    ])
    const post = () => {
        emit('postMessage',123)
    }
</script>
<style lang="">
    
</style>