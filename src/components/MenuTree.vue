<template>
  <div>
    <template>

        <!--        <el-menu-item index="/welcome" >-->
        <!--          <i class="el-icon-star-off"></i>-->
        <!--          <span slot="title">控制面板</span>-->
        <!--        </el-menu-item>-->
        <el-menu-item index="/host" >
          <i class="el-icon-s-home"></i>
          <span slot="title">主界面</span>
        </el-menu-item>

      <el-submenu index="/AssManage">
        <template slot="title">
          <i class="el-icon-tickets"></i>
          <span>社团相关</span>
        </template>
        <el-menu-item index="/apply">
          <i class="el-icon-magic-stick"></i>
          <span slot="title">社团成立</span>
        </el-menu-item>
        <el-menu-item index="/enroll">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">社团报名</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="/MyCenter" >
        <template slot="title">
          <i class="el-icon-camera-solid"></i>
          <span>我的中心</span>
        </template>
        <el-menu-item index="/preActivity">
          <i class="el-icon-document-copy"></i>
          <span slot="title">活动记录</span>
        </el-menu-item>
        <el-menu-item index="/myAss">
          <i class="el-icon-aim"></i>
          <span slot="title">我的社团</span>
        </el-menu-item>
        <el-menu-item index="/mine">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">个人资料</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </div>
</template>

<script>
export default {
  name: 'MenuTree'
}
</script>

<style scoped>
/*实现了溢出处理*/
.el-menu--collapse span,
.el-menu--collapse i.el-submenu__icon-arrow {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
</style>
