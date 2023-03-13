<template>
    <div>
        <span>father's count : {{ fatherCount }}</span>
        <br/>
        <button @click="add(3)">add</button>
        <button @click="push">push</button>
    </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
    setup() {
        const router=useRouter()

        let fatherCount = ref(0)

        const add = (num: number  = 1) => {
            fatherCount.value +=  num
        }
        
        const push = () =>{
            router.push({
                path:'/son'
            })
        }
        return {
            fatherCount,add,push
        }
    }
}
</script>
<style lang="">
    
</style>