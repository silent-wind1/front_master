<template>
  <el-container>
    <el-header class="el-header" style="height: 75px">
      <div class="set" style="height: 100%;">
        <h2>lengyingmofeng</h2>
        <div></div>
        <router-link to="/home" class="link-to"><i class="el-icon-s-home"></i>&nbsp; 首 页</router-link>
        <router-link to="/classify" class="link-to"><i class="el-icon-s-opportunity"></i> 分 类</router-link>
        <router-link to="/tag" class="link-to"><i class="el-icon-price-tag"></i> 标 签</router-link>
        <router-link to="/archives" class="link-to"><i class="el-icon-share"></i> 归 档</router-link>
        <router-link to="/detailed" class="link-to"><i class="el-icon-share"></i> 详 细</router-link>
        <Input></Input>
        <router-link to="/login" class="link-to"><i class="el-icon-user"></i> 后台管理</router-link>
      </div>
    </el-header>
  </el-container>

</template>

<script>
import Input from "@/components/common/Input";
export default {
  name: "Header",
  data() {
    return {

    }
  },

  components: {
    Input
  }
}
</script>

<style scoped>

h2 {
  color: skyblue;
}

a {
  margin-left: 30px;
  height: 55px;
}

.link-to:hover {
  color: #FFFFFFFA;
}

.link-to {
  line-height: 55px;
  font-size: 18px;
  transition: all 0.3s;
  color: #989898F4;
}



</style>
