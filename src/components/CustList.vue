
<template>
  <div class="login">
  <Input v-model="name" search enter-button @click.native="search" placeholder="请输入名字" />
    <!-- <input v-model="name" placeholder="客户名">
    <button v-on:click="search">搜索 </button> -->
    <!-- <ul v-for="(value, index) in custList" >
       <li>{{index}}:{{value.name}}</li>
    </ul> -->
     <Table border   :columns="columns1" :data="data1"></Table>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button, Table } from 'iview';
Vue.component('Button', Button);
export default {
      name: "search",
      data() {
        return {
          message: '客户信息登记页面',
          name: '',
          mobile: '',
          address:'',
          custList:[],
          columns1: [
                    {
                        title: '名称',
                        slot: 'name',
                        render: (h, params) => {
                            return h('div', [
                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),
                                h('strong', params.row.name)
                            ]);
                        }
                    },
                    {
                        title: '电话',
                        key: 'mobile'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, 'View'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, 'Delete')
                            ]);
                        }
                    }
                ],
          data1: []
        }
      },
      http: {
        headers: {'Content-Type': 'application/json; charset=UTF-8'}
      },
      methods: {
      show (index) {
              this.$Modal.info({
                  title: '客户详细信息',
                  content: `Name：${this.data1[index].name}<br>Age：${this.data1[index].mobile}<br>Address：${this.data1[index].address}`
              })
        },
        remove (index) {
            this.data1.splice(index, 1);
        },
        search: function () {
          var _this = this;
          console.log(_this.name+_this.mobile);
          _this.$http.post('http://localhost:8080/custInfo/getCustInfos', {
                name: _this.name,
                mobile: _this.mobile,
                address:_this.address
          }).then(function (response) {
              var errorcode = response.data.code;
              if (errorcode == "200") {
                this.custList = this.data1 = response.data.data
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
