<template>
<div class="foot">
    <!-- <div class="info">联系方式</div>
    <div class="info">关于我们</div>
    <div class="info">产品服务</div> -->
    <Row type="flex" justify="start" class="code-row-bg">
        <i-col span="8">联系方式<div>13570009999</div></i-col>
        <i-col span="8">关于我们<div>专注健康养生产品</div></i-col>
        <i-col span="8">产品服务<div><a class="proService" href="#/HomePage" target="_self">首页</a></div></i-col>
    </Row>
</div>
   
</template>
<script>
    export default {
        
    }
</script>
<style>
   .foot{
       height: 50px;
       background: #515a6e;
       position: absolute;
       bottom: 0;
       left: 0;
       width: 100%;
       /* background-color: yellow; */
   }
   .foot .ivu-col{
       font-family: inherit;
        font-size: 16px;
        color: floralwhite;
    }
    .foot .ivu-col .proService{
        color: red
    }
    .foot .info{
        float: left;
        font-family: inherit;
        font-size: 5px;
        color: floralwhite;
    }
</style>

