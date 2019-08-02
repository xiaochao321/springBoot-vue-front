<template>
  <div class="home">
     <img :src="imgUrl_1" width="70%">
     <img :src="imgUrl_2" width="70%">
     <img :src="imgUrl_3" width="70%">
     <img :src="imgUrl_4" width="70%">
     <img :src="imgUrl_5" width="70%">
     <br>
     <div>
        <a href="#/CustInfo" target="_blank">
          信息登记
        </a>
    </div>
  </div>
</template>

<script>
export default{
    name: 'home',
    data(){
        return{
            imgUrl_1:require("@/assets/image/home_01.jpg"),
            imgUrl_2:require("@/assets/image/home_02.jpg"),
            imgUrl_3:require("@/assets/image/home_03.jpg"),
            imgUrl_4:require("@/assets/image/home_04.jpg"),
            imgUrl_5:require("@/assets/image/home_05.jpg")
        }
    }

}
</script>

<style scoped>

</style>
