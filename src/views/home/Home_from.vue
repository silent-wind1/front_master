<template>
  <div class="top" style="border-bottom: 2px solid #00B5AD;">
    <div class="top-titles">
      <slot name="title">
        <span style="color: #989898F4;"><i class="el-icon-s-home"></i> &nbsp;{{ title }}</span>
      </slot>
    </div>
    <div class="count">
      <slot name="link">
        <router-link to="/classify">
        <span style="color: #4183C4;">
          more
          <i class="el-icon-caret-right"></i>
        </span>
        </router-link>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "home_from",
  props: {
    title: String,
  },
  data() {
    return {
      number: 0,
    }
  },
}
</script>

<style scoped>

.count {
  width: 50%;
  margin-right: 10px;
  text-align: right;
  font-size: 15px;
}

</style>
