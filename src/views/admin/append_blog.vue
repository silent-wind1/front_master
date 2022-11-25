<template>
  <section class="append-blog">
    <div class="blog-content">
      <div class="blog-title">
        <span>标题</span>
        <input type="text">
      </div>

      <mavon-editor style="height: 600px;"/>

      <div class="blog-classify">
        <div class="blog-classify-select">
          <span>分类</span>
          <el-select v-model="value" placeholder="请选择" style="width: 300px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>

        <div class="blog-classify-select">
          <span>标签</span>
          <el-select v-model="value" placeholder="请选择" style="width: 300px;">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </div>
      <div></div>
    </div>

  </section>
</template>

<script>
export default {
  name: "append_blog",
  data() {
    return {
      title: '',
      context: '',//输入的数据,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
    }
  }
}
</script>

<style scoped>
.append-blog {
  display: flex;
  justify-content: center;
  align-items: center;
}

.blog-content {
  width: 100vw;
  height: 800px;
}

.blog-title {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  box-sizing: border-box;
}

.blog-title span {
  display: inline-block;
  width: 100px;
  height: 40px;
  border: 1px solid #00B5AD;
  border-right: none;
  border-radius: 4px 0 0 4px;
  color: #00B5AD;
  text-align: center;
  line-height: 37px;
  background-color: white;
}

.blog-title input {
  width: 100%;
  height: 38px;
  padding-left: 20px;
  border: 1px solid #00B5AD;
  border-radius: 0 4px 4px 0;
  font-size: 15px;
  font-weight: 500;
}

.blog-title input:focus {
  border-color: #66afe9;
  outline: none;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(102, 175, 233, .6)
}

.blog-classify {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  box-sizing: border-box;
}

.blog-classify-select {
  width: 395px;
}

.blog-classify span {
  display: inline-block;
  width: 90px;
  height: 40px;
  margin-right: 3px;
  border: 1px solid #00B5AD;
  border-radius: 4px ;
  color: #00B5AD;
  text-align: center;
  line-height: 37px;
  background-color: white;
}


</style>
