<template>
  <div class="input_box">
    <input type="text" class="input" placeholder="请输入内容" v-model="input">
    <i class="el-icon-search ioc" @click="Search"></i>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      input: '',
    }
  },
  methods: {
    Search() {
      // 暂定你输入的内容
      this.input = ''
    }
  },
}
</script>

<style scoped>
.input_box {
  position: relative;
}

.input {
  width: 160px;
  height: 35px;
  margin-left: 150px;
  padding-left: 15px;
  border: 1px solid #3333;
  border-radius: 5px;
  outline:medium;

}
.ioc {
  position: absolute;
  top: 12px;
  right: 10px;
  color: #333333B8;
  cursor: pointer;
}

.ioc:hover {
  color: skyblue;
}

input:focus{
  border-color: #66afe9;
  outline: none;
  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}
</style>
