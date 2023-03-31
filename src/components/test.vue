<template>
    <div>
    <input type="text" v-model="user.name">
    <button @click="get">按钮</button>
    </div>
</template>
<script lang="ts" setup>
import {reactive} from 'vue'
const user = reactive({
    name: '',
    age: 0
})
const get = function() {
    console.log(user.name);
}

</script>
<style lang="">
    
</style>