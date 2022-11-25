<template>
  <div class="c-box">
    <div class="classify-top">
      <div class="classify-left">分类</div>
      <div class="classify-right">共 <span class="text">{{ count }}</span> 个</div>
    </div>
    <div class="classify-label-box">
      <div v-for="(index, item) in 9" :key="index">
        <a href="">
          <div class="classify-label">
            <div class="span-left">java</div>
            <div class="span-right">2</div>
          </div>
        </a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "Labels",
  data() {
    return {}
  },
  props: {
    count: 0,
  },
}
</script>

<style scoped>
.c-box {
  width: 850px;
  margin: 0 auto;
  background: rgba(242, 245, 249, 0.82);
  border: 1px solid #3333;
  border-radius: 4px;
}

.classify-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #3333;
}

.classify-left, .classify-right {
  height: 40px;
  line-height: 40px;
}

.classify-left {
  margin-left: 30px;
  color: #00B5AD;
  font-size: 20px;
}

.classify-right {
  margin-right: 30px;
}

.classify-label-box {
  margin: 10px 0 10px 10px;
  width: 800px;
  border: 1px solid black;
}

.classify-label {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 5px;
  height: 50px;
  width: 150px;
  border: 2px solid #3333;
  border-radius: 3px;
}

.span-left, .span-right {
  height: 100%;
  color: #00000089;
  line-height: 45px;
  font-size: 20px;
  font-weight: 500;
}

.span-left {
  margin: 0 5px 0 5px;
}

.span-right {
  padding: 0 10px 0 10px;
  border-left: 1px solid #3333;
}
</style>
