<template lang="">
    <div>
       <el-select v-model="selectValue" :placeholder="placeholder" :multiple="isMoreChoose"
         :clearable="isClear" :remote-method="searchValue" :loading="loading" filterable
        remote reserve-keyword remote-show-suffix @change="selectChange" @visible-change="expandList">
         <el-option v-for="item in Options" :label="item.label" :value="item.value"  :key="item.value"></el-option>
       </el-select>
    </div>
</template>
<script setup lang="ts">
import { ref,defineProps,reactive, defineEmits  } from 'vue';
const emit = defineEmits(['getSelectValue'])
const selectValue = ref([])
const loading = ref(false)
let Options = ref([])
let list:any = []
const homeData = defineProps({
    // 传递下拉框数据
    selectData:{
        type: Array,
        default:[]
    },
    // 是否多选
    isMoreChoose:{
        type: Boolean,
        default:false
    },
    // 是否开启一键清除按钮
    isClear:{
        type: Boolean,
        default:false
    },
    // 值改变回调
    change:{
        type: Function,
        default: () => {
        return Function;
      },
    },
    // 传入提示语
    placeholder:{
        type: String,
        default: '请输入搜索条件信息'
      },
    //   下拉框状态改变回调
    getExpandList: {
        type: Function,
        default:  () => {
            return Function
        }
    }
})

    list = homeData.selectData.map(item => {
        return {value:item, label:item}
    })

// 下拉搜索
const searchValue = (query:string) => {
    if(query) {
        loading.value = true
        setTimeout(() => {            
        loading.value = false
            Options.value = list.filter((item: { label: string; }) =>{
            return item.label.toLowerCase().includes(query.toLowerCase())
            })
        })
    }
}

// 值改变回调
const selectChange = (val:any) => {
    // 调用父组件传过来的值改变的回调
    homeData.change(val)
    console.log('值发生改变，返回值信息，将值传给父组件Home');
    // 向父组件传递选中信息
    emit("getSelectValue",val)
}

// 下拉框出现的回调
const expandList = (val:any) => {
    // 这里调用父组件传递下拉框出现回调参数
    homeData.getExpandList(val)
    console.log(`下拉框状态:${val === true ? '开启状态' : '关闭状态'}`);
    console.log(val);
    
} 

</script>
<style lang="">
    
</style>