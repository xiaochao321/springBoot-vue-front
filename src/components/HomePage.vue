<template>
    <div>
        <Menu ref="leftMenu" :theme="theme1" :open-names="open" active-name="1" @on-select="handleSelect"  mode="horizontal" >
            <MenuItem name="home">
                <Icon type="ios-paper" />
                首页
            </MenuItem>
            <Submenu name="3">
                <template slot="title">
                    <Icon type="ios-stats" />
                    产品列表
                </template>
                <MenuGroup title="解酒">
                    <MenuItem name="3-1">酣乐</MenuItem>
                    <MenuItem name="3-2">韩国解酒糖</MenuItem>
                </MenuGroup>
                <MenuGroup title="养生茶">
                    <MenuItem name="3-4">葛根梅茶</MenuItem>
                    <MenuItem name="3-5">桂圆红枣茶</MenuItem>
                </MenuGroup>
            </Submenu>
            <MenuItem name="4">
                <Icon type="ios-construct" />
                公司介绍
            </MenuItem>
        </Menu>
        <div>
            <index v-if="isShowIndex"></index>
            <!-- <home v-if="isShowHome"></home> -->
            <foot v-if="isShowFoot"></foot>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import Home from '@/components/home'
import Index from '@/components/index'
import Foot from '@/components/foot'
    export default {
         components: {
             Home,
             Index,
             Foot
         },
        props: [""],
        data(){
             return{
                theme1: 'dark',
                open: [],
                active: "1-1",
                isShowHome:false,
                isShowIndex:false,
                isShowFoot:false
             }
        },
         mounted: function() {
            this.isShowIndex = true;
            this.isShowFoot = true;
            this.open = ["2"];
            this.active = ["2-2"];
            this.$nextTick(function() {
                this.$refs.leftMenu.updateOpened();
                this.$refs.leftMenu.updateActiveName();
            })
            this.handleSelect(this.active);
        },
         methods: {
            handleSelect: function(name) {
                console.log('点击了事件。。。。',name)
                //在这里做你想做的事情
                if(name === 'home'){
                    this.isShowHome = true
                    this.isShowIndex = true
                    this.isShowFoot = true
                }else if(name ==='productList'){

                }
            },
        }
    }
</script>
