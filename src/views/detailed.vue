<template>
  <div class="detailed-box">
    <div class="detailed-w">
      <header class="detailed-header">
        <div>作者</div>
        <div>图片</div>
      </header>
      <div class="detailed-images">
        <img src="../assets/image/wallhaven-298186.jpg" alt="">
      </div>
      <div class="detailed-content">
        文字内容
      </div>
      <div class="detailed-information">
        作者信息
      </div>
      <div class="detailed-message">
        留言区域
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailed",
  data() {
    return {}
  }
}
</script>

<style scoped>
.detailed-box {
  display: flex;
  justify-content: center;
}

.detailed-w {
  width: 1127px;
  background: #dae5ef;
  /*border-radius: 4px;*/
}

.detailed-header {
  display: flex;
  align-items: center;
  height: 50px;
  border: 1px solid #d4d4d5;
}

.detailed-images {
  margin: 10px;
  height: 800px;
}

.detailed-images > img {
  height: 100%;
  width: 100%;
  border-radius: 5px;
}

.detailed-content {
  /*height: 30px;*/
  border: 1px solid #d4d4d5;
}

.detailed-information {
  border: 1px solid #d4d4d5;
}

.detailed-message {
  height: 30px;
  border: 1px solid #d4d4d5;
}
</style>
