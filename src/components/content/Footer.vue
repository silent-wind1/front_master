<template>
  <el-container class="foot-box">
    <el-footer style="height: 100%;">
      <section class="over">
        <div class="set">
          <div class="images">
            <img src="../../assets/image/ye.jpg" alt="">
          </div>
          <div class="content">
            <h3>最新博客</h3>
            <p>springboot原理</p>
            <p>Vue的生命周期</p>
            <p>scrapy框架</p>
          </div>
          <div class="content">
            <h3>联系我</h3>
            <p>2951575706@qq.com</p>
          </div>
          <div style="margin-left: 30px">
            <p>这是我的个人博客、记录学习进度和关于
              <br>编程、写作、思考相关的任何内容....</p>
          </div>
        </div>
        <div class="lin"></div>
        <p>Copyright © 2019 - 2021 XSH Designed by Ye-feng</p>
      </section>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.foot-box {
  width: 100%;
  /*position: fixed;*/
  min-width: 1000px;
  bottom: 0;
  background-color: rgba(27, 28, 29, 0.96);
}

.over {
  color: rgba(255, 255, 255, 0.50);
}


.images {
  width: 150px;
  height: 149px;
}

.images > img {
  height: 100%;
  width: 100%;
}

.content {
  width: 300px;
  height: 150px;
  border-right: 1px solid rgba(255, 255, 255, 0.50);
}


.lin {
  width: 75%;
  /*margin-top: 10px;*/
  margin-left: 10%;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
