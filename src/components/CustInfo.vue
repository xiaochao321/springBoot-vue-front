
<template>
  <div class="login">
    {{ message }}<br/>
    <input v-model="name" placeholder="用户名"><br/>
    <input v-model="mobile" placeholder="电话"><br/>
    <input v-model="address" placeholder="地址"><br/>
    <button v-on:click="register">提交信息 </button>
  </div>
</template>

<script>
    export default {
      name: "register",
      data() {
        return {
          message: '客户信息登记页面',
          name: '',
          mobile: '',
          address:''
        }
      },
      http: {
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
      },
      methods: {
        register: function () {
          var _this = this;
          console.log(_this.name+_this.mobile);
          _this.$http.post('http://localhost:8080/custInfo/saveCust', {
                name: _this.name,
                mobile: _this.mobile,
                address:_this.address
          }).then(function (response) {
              var errorcode = response.data.code;
              if (errorcode == "200") {
                _this.$router.push(
                  { path: '/home',
                    query: {
                      user: response.data.data,
                    }
                  });
              } else {
                _this.$router.push({ path: '/Fail' });
              }
            })
            .catch(function (error) {
              console.log(error);
            });
        }
      }

    }
</script>

<style scoped>

</style>
