<template>
<div class="container">
  <div class="dropdownBox">
    <p class="dropdownName">设备名称</p>
    <el-dropdown @command="handleMenu" @visible-change="visibleChange">
      <div class="dropdownDesc">
        <p class="placeHolder" v-if="!current">请选择</p>
        <p class="actTxt" v-if="current">{{current}}</p>
        <div class="arrow" :class="{actarrow: showList}"></div>
      </div>
      <el-dropdown-menu slot="dropdown">
        <template v-for="(item,index) in deviceNameList">
          <el-dropdown-item :command="item" v-key="{index}">{{item}}</el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
  <ve-line :data="chartData" width="100%" height="500px" :settings="chartSettings"></ve-line>
</div>

</template>


<script>
  export default {
    data(){
      this.chartSettings = {
        metrics: ['访问用户', '下单用户'],
        dimension: ['日期']
      }
      return {
        deviceNameList: ['黄金糕','狮子头','螺蛳粉'],
        current: '',
        showList: false,
        chartData: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    },
    methods: {
      handleMenu(value){
        this.current = value
      },
      visibleChange(e){
        this.showList = e
      }
    }
  }
</script>

<style scoped lang="less">
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    width: 100%;
    height: 100%;
  }
  .dropdownBox{
    display: flex;
    align-items: center;
    .dropdownName{
      font-size: 14px;
      color: #2F3033;
      margin-right: 10px;
    }
    .dropdownDesc{
      width: 210px;
      height: 32px;
      border-radius: 4px;
      border: 1px solid #DCDFE6;
      display: flex;
      align-items: center;
      box-sizing: border;
      justify-content: space-between;
      padding: 0 12px;
      cursor: pointer;
      .placeHolder{
        color: #909399;
        font-size: 14px;
      }
      .actTxt{
        color: #2F3033;
        font-size: 14px;
      }
      .arrow{
        width: 0;
        height: 0;
        border-width: 5px 4px 0 4px;
        border-style: solid;
        border-color: #8C8F95 transparent transparent transparent;
        transition: .2s;
      }
      .actarrow{
        transform: rotateZ(180deg);
      }
    }
  }
  
</style>
