<template>
 <div>
    <Carousel autoplay :height="317">
        <Carousel-item>
            <div class="demo-carousel">
                <img :src="indexUrl_1" width="70%" height="300px">
            </div>
        </Carousel-item>
        <Carousel-item>
            <div class="demo-carousel">
                 <img :src="indexUrl_2" width="70%" height="300px">
            </div>
        </Carousel-item>
    </Carousel>
    <!-- </div> -->
        <div class="content-center">
            <div><img  :src="contentUrl_1"></div>
            <div><img :src="contentUrl_2"></div>
            <div><img :src="contentUrl_3"></div>
        </div>
    <!-- </div> -->
</div>
</template>
<script>
import Vue from 'vue'
    export default {
        name:"index",
        data(){
            return{
                indexUrl_1:require("@/assets/image/index_1.jpg"),
                indexUrl_2:require("@/assets/image/index_2.jpg"),
                contentUrl_1:require("@/assets/image/content_1.jpg"),
                contentUrl_2:require("@/assets/image/content_2.jpg"),
                contentUrl_3:require("@/assets/image/content_3.jpg")
            }
        }
    }
</script>
<style type="text/less">
     .ivu-carousel{
         margin-top: 10px
     }
     .ivu-carousel .ivu-carousel-item{
         height: 50%;
    }
    .content-center div{
        margin:0 auto;
        float: left;
        margin-left: 16%;
    }
    .content-center div img{
        width: 200px;
        height: 150px;
    }
</style>

