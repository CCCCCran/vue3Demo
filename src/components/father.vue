<template>
    <div>
        <span>father's count : {{ fatherCount }}</span>
        <br/>
        query------<span>son's name: {{ sonName }}</span>
        <br/>
        <button @click="add(3)">add</button>
        <button @click="push">push</button>
        <div class="header">
            <TimeModel></TimeModel>
        </div>
        <FatherTransferValue></FatherTransferValue>
        <div>-----------------------------------------------------------------</div>
        <test></test>
    </div>
</template>
<script lang="ts">
import { ref } from "vue";
import { useRouter,useRoute } from "vue-router";
import TimeModel from "./timeModel.vue";
import FatherTransferValue from "./fatherTransferValue.vue";
import test from "./test.vue";
export default {
    setup() {
        const router = useRouter();
        const route = useRoute();
        const sonName = route.query.name;
        let fatherCount = ref(0);
        const add = (num: number = 1) => {
            fatherCount.value += num;
        };
        const push = () => {
            router.push({
                path: "/son"
            });
        };
        return {
            fatherCount,
            sonName,
            add,
            push,
        };
    },
    components: { TimeModel, FatherTransferValue,test }
}
</script>
<style lang="less">
//  定义一个变量来赋渐变色的值
    @color:linear-gradient(rgb(175, 16, 16), rgb(172, 160, 160));
    .header {
	position: relative;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	width: 65%;
	height: 96px;
	// padding: 0 48px;
    padding-left: 80px;
	box-shadow: 0 2px 2px rgb(0 0 0 / 25%);
    background: black;
    background-image: @color;
    margin-left: 90px;
    }
</style>