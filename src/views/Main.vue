<template>
    <div class="main">
      <el-container style="height: 100vh;">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu router :default-openeds="['1', '3']" :default-active="$route.path">
            <el-submenu index="1">
              <template slot="title"><i class="el-icon-house"></i>后台</template>
              <el-menu-item-group>
                <el-menu-item index="/"><i class="el-icon-s-home"></i>首页</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="管理员管理">
                <el-menu-item index="/user/add">管理员添加</el-menu-item>
                <el-menu-item index="/user/list">管理员列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="栏目管理">
                <el-menu-item index="/column/add">栏目添加</el-menu-item>
                <el-menu-item index="/column/list">栏目列表</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="文章管理">
                <el-menu-item index="/article/add">文章添加</el-menu-item>
                <el-menu-item index="/article/list">文章列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
          </el-header>

          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script>
  export default {
    name: 'main',
    data() {
      const item = {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      };
      return {
        tableData: Array(20).fill(item)
      }
    }
  }
</script>

<style>
  .el-header {
    background-color: #B3C0D1;

    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>