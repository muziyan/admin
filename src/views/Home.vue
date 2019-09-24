<template>
  <div class="home">
    <el-carousel :interval="4000" type="card">
      <el-carousel-item v-for="item in 6" :key="item">
        <img src="../assets/images/banner.jpg" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-row :gutter="12" style="margin-top:30px;">
      <el-col :span="8" v-for="item in 3">
        <el-card shadow="hover" class="text-center">
          管理员人数&nbsp;:&nbsp;10
        </el-card>
      </el-col>
    </el-row>

    <ve-line :data="chartData" style="margin-top:30px;"></ve-line>

  </div>
</template>


<script>

  export default {
    name:"Home",
    data(){
      return {
        imageURL:"./assets/images/logo.png",
        chartData: {
          columns: ['日期', '访问用户量'],
          rows: [
            { '日期': '1/1', '访问用户量': 1393},
            { '日期': '1/2', '访问用户量': 3530},
            { '日期': '1/3', '访问用户量': 2923},
            { '日期': '1/4', '访问用户量': 1723},
            { '日期': '1/5', '访问用户量': 3792 },
            { '日期': '1/6', '访问用户量': 4593}
          ]
        }
      }
    },

  }
</script>

<style>
  .el-carousel__item img {
    width: 100%;
    height: auto;
  }
</style>