<template>
    <div>
        <span>son's count: {{ sonCount }}</span>
        <br/>
        <button @click="add() ">add</button>
        <br/>
        <button @click="del()">del</button>
        <br/>
        <button @click="push">to father</button>
    </div>
</template>
<script lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        const router = useRouter()
        const name = ref('lam')

        const sonCount: any = ref(0)

        const add = (num: any = 1) => {
                sonCount.value += num
        }

        const del = (num: any = 1) => {
            sonCount.value -= num
        }
        const push = () => {
            router.push({
                path:'/',
                query: {
                    name : name.value
                }
            })
        }
        return {
            sonCount,
            add,
            del,
            push
        }
    }
}
</script>
<style lang="">
    
</style>