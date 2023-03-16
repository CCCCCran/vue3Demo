<template>
    <div class="content-box">
        <div class="big-font">
            {{ sayingVal }}
        </div>
    </div>
</template>
<script setup lang="ts">
import {saying} from '../hook/useSaying'

    const sayingVal = saying('world')

</script>
<style lang="less">
    .content-box {
        .big-font{
            font-size: 20px;
            font-weight: 700;
            color: blue;
        }
    }
</style>