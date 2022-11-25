<template>

    <div class="c-box">
      <div class="classify-top">
        <div class="classify-left">分类</div>
        <div class="classify-right">共 <span>{{number}}</span> 个</div>
      </div>
    </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      name: '',
      number: 0,
    }
  }
}
</script>

<style scoped>

.c-box {
  width: 850px;
  margin-bottom: 30px;
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

</style>
