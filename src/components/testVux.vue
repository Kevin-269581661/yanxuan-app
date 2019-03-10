<template>
  <div>
    <popup-header :left-text="('取消')" :right-text="('确定')" :title="('请选择配送地址')"></popup-header>
    <group>
      <x-switch v-model="show1" :title="('used with Popup')"></x-switch>
    </group>
    <div v-transfer-dom>
      <popup v-model="show1">
        <!-- group already has a top border, so we need to hide header's bottom border-->
        <popup-header
        :left-text="('取消')"
        :right-text="('确定')"
        :title="('请选择配送地址')"
        :show-bottom-border="false"
        @on-click-left="show1 = false"
        @on-click-right="show1 = false"></popup-header>
        <group gutter="0">
          <x-address title="地址选择" v-model="addressValue" raw-value :list="addressData" value-text-align="left"></x-address>
          <!-- <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc="可以设置placeholder" :show.sync="showAddress"></x-address> -->
          
          <x-textarea title="详细信息" placeholder="请填写详细信息" :show-counter="false" :rows="3"></x-textarea>
          <!-- <x-textarea placeholder="请填写详细信息" :show-counter="false" :rows="3">
            <img slot="restricted-label" style="display:inline-block;vertical-align:middle;" src="http://dn-placeholder.qbox.me/110x110/FF2D55/000" width="24" height="24">
          </x-textarea> -->
        </group>
      </popup>
    </div>
    <!-- 滑动删除 -->
    <swipeout>
      <swipeout-item :threshold=".5" underlay-color="#ccc" >
        <div slot="right-menu">
          <!-- <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">{{('Fav')}}</swipeout-button> -->
          <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">{{('Delete')}}</swipeout-button>
        </div>
        <div slot="content" class="demo-content vux-1px-tb">
        {{('threshold = 0.5')}}
        </div>
      </swipeout-item>
    </swipeout>
  </div>
</template>
<script>
import { PopupHeader, Popup, TransferDom, Group, XSwitch, Radio,XAddress,XTextarea,ChinaAddressV4Data,Value2nameFilter as value2name } from 'vux'
// 滑动删除
import { Swipeout, SwipeoutItem, SwipeoutButton } from 'vux'


export default {
  data(){
    return {
      // title: '默认为空',
      // value_0_1: [],
      // value: [],
      // title2: '设置值',
      // value2: ['天津市', '市辖区', '和平区'],
      // value3: ['广东省', '中山市', '--'],
      // addressData: ChinaAddressV4Data,
      // value4: [],
      // value5: ['广东省', '深圳 市', '南山区'],
      // showAddress: false,
      addressData: ChinaAddressV4Data,
      addressValue: [],
      value1: '张三',
      value2: '工艺技术',
      value3: '',
      value7: '',
      value8: '',
      value4: '',
      time1: '2017-06-01',
      value5: ['A'],
      value6: [],
      list: [['A', 'B', 'C']],
      numberValue: 0,
      show1: false,
      // 滑动删除
      
    }
  },
   methods: {
    doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange (ids, names) {
      console.log(ids, names)
    },
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    },
    // 滑动删除
    onButtonClick (type) {
      alert('on button click ' + type)
    },
    handleEvents (type) {
      console.log('event: ', type)
    }
  },
  directives: {
    TransferDom
  },
  components: {
    PopupHeader,
    Popup,
    Group,
    XSwitch,
    XAddress,
    XTextarea,
    // 滑动删除组件
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
  }
}
</script>
<style lang="css" scoped>
  /* 滑动删除 */
  .demo-content{
    padding:20px;
  }
</style>