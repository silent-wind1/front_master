<template>
  <div class="classify-box">
    <top></top>
    <div v-for="index in 4">
      <div class="year">
        <h3>2021</h3>
      </div>
      <div class="Ah-content">
        <ul>
          <li class="Ah-li" v-for="index in 4">
            <p>{{ index }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import top from "../components/content/top";
export default {
  name: "Archives",
  components: {
    top
  }
}
</script>

<style scoped>
.year {
  color: skyblue;
  text-align: center;
}
.Ah-content {
  display: flex;
  align-items: center;
  width: 850px;
  background: rgba(242, 245, 249, 0.82);
  border-radius: 4px;
}

.Ah-li {
  width: 850px;
  height: 40px;
  border-bottom: 1px solid #3333;
}

.Ah-li > p {
  margin: 10px 30px;
}

</style>
