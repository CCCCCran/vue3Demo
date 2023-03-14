<template lang="">
    <div class="date-box">
		<div class="date-time">{{ dateObj.time }}</div>
		<div class="date-date">
			{{ dateObj.date }}&nbsp;<span class="date-day">|&nbsp;{{ dateObj.week }}</span>
		</div>
	</div>
</template>
<script setup lang="ts">
import { reactive,onMounted } from "vue";
import { FormatsEnum,dateFormat } from '../uitls/tool'
    // 定义模型
    interface Time {
        time : string,
        week : string,
        date : string,
        timer : number
    }
    const dateObj: Time = reactive({
        time: '--:--:--',
        week: '--',
        date: '----/--/--',
        timer : 0
    })
    const weekList =  ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
    
    const getTime = () => {
        let weekTime = new Date().getDay()
        dateObj.week = weekList[weekTime - 1]
        dateObj.date = dateFormat(0,FormatsEnum.YDM)
        dateObj.time = dateFormat(0,FormatsEnum.TIME)
    }
    getTime()
    onMounted(() => {
        dateObj.timer = setInterval(() => {
        getTime()
    },1000)
    })

</script>
<style>
    .date-box .date-time {
        font-weight: 800 ;
        font-size: 30px;
        color:aliceblue;
    }
    .date-box .date-date {
        font-size: 18px;
        color: aliceblue;
    }
</style>