<template>
  <el-container>
    <!--  头部  -->
    <el-header class="el-header" style="height: 80px;">
      <div class="set">
        <div class="top-left">后台管理系统</div>
        <div class="top-right">
          <span class="head-portrait">
            <img src="../assets/image/ye.jpg" alt="">
          </span>
          <el-button plain>注销</el-button>
        </div>
      </div>
    </el-header>
    <!--  内容   -->
    <el-container class="el-set">
      <!--  左侧    -->
      <el-aside>
        <el-menu>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user"></i>用户管理</template>
            <el-menu-item-group>
              <router-link to="/admin/admin_info">
                <el-menu-item index="1-1">
                  个人信息
                </el-menu-item>
              </router-link>
              <router-link to="/admin/admin_comment">
                <el-menu-item index="1-2">评论管理</el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title"><i class="el-icon-folder-opened"></i>博客管理</template>

            <el-menu-item-group>
              <router-link to="/admin/append_blog">
                <el-menu-item index="2-1">发布博客</el-menu-item>
              </router-link>

              <router-link to="/admin/query_blog">
                <el-menu-item index="2-2">查看博客</el-menu-item>
              </router-link>
              <!--              <el-menu-item index="2-3">-->
              <!--                <router-link to="">标签管理</router-link>-->
              <!--              </el-menu-item>-->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--  主体内容   -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import Left_admin from "./admin/admin_info";

export default {
  name: "Admin",
  components: {
    Left_admin,
  },
  methods: {

  },
  created() {
    if(this.$store.state.Info == null || this.$store.state.Info === '') {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.el-container {
  height: 100vh;
}

.el-header {
  color: #00B5AD;
  line-height: 60px;
  font-size: 30px;
}

.el-set {
  height: 100%;
  color: black;
  background-color: #00000000;
}

.el-submenu--title:hover {
  background-color: #00000060 !important;
}

.el-menu-item {
  background-color: rgba(53, 62, 70, 0.01);
}

.el-menu-item:hover {
  background-color: #00000060 !important;
}

a {
  color: black;
}

.top-left, .top-right {
  width: 500vw;
  text-align: left;
}

.top-right {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px
}

.head-portrait {
  display: inline-block;
  width: 50px;
  height: 50px;
  margin: 1px 30px 0 0;
  border: 1px solid skyblue;
  border-radius: 50px;
  overflow: hidden;
}

.head-portrait > img {
  width: 100%;
  height: 100%;
}

</style>
