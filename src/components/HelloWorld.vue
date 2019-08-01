<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <li v-for="(value,key) in this.$route.query.user">
      {{key}}--{{value}}
    </li><br/>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
    </ul>
    <div>
       <img :src="imgurl" width="100%">
    </div>
  </div>
 
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '登陆成功',
      user: '',
      imgurl:require("@/assets/home_3x.png")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
