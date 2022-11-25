<template>
  <div class="classify-box">
    <Labels :count="count"></Labels>
    <div class="line-color"></div>
    <Contents></Contents>
  </div>
</template>

<script>
import Contents from '@/components/content/Contents'
import Labels from "../components/content/Labels";
import {blogCount} from "../network/blog";

export default {
  name: "classify",
  data() {
    return {
      count: 0,
    }
  },

  created() {
    blogCount().then(res => {
      console.log(res.data)
      this.count = res.data;
    })
  },
  components: {
    Contents,
    Labels
  }
}
</script>

<style scoped>


</style>
