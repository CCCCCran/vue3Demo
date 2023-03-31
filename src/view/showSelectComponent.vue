<template>
    <div>
        选项栏
        <mySelect :selectData="selectData" :isClear="true" :isMoreChoose="true" :Change="Change" @getSelectValue="getSelectValue" 
        :placeholder="placeholder"></mySelect>
        选中的值为:{{ getSelectData }}
    </div>
</template>
<script setup lang="ts">
import mySelect from '../components/mySelect.vue'
import { ref } from 'vue';
let getSelectData = ref('')
// 获取下拉框数据信息
const selectData = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]
// 提示语设置
const placeholder = "请输入所需要搜索条件信息"

// 传给select组件值改变回调
const Change = (val:any) => {
    console.log(val);
}
// 获取select组件选中信息
const getSelectValue = (val:any) => {
    getSelectData.value = val 
}
</script>
<style>
    
</style>