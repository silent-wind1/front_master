<template>
  <div style="background: #dae5ef">
    <ul>
      <a :href="item.blog_img" v-for="(item, index) in Blogs" :key="index">
        <li class="content-li">
          <div class="content-list">
            <div class="content-list-box">
              <div class="content-list-title">
                <h3>{{ item.title }}</h3>
                <p class="content">
                  {{ item.description }}
                </p>
              </div>
              <div class="content-list-span">
<!--                <span>作者: {{item.blog_author_id}}</span>-->
                <span>作者: 叶枫</span>
                <span style="width:150px">日期: {{item.create_time}}</span>
                <span>浏览: {{item.views}}</span>
              </div>
            </div>
            <div class="content-img">
              <img :src="item.first_picture" alt="无图片">
            </div>
          </div>
          <div class="content-line"></div>
        </li>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contents",
  props: ["Blogs"],
  data() {
    return {

    }
  },

}
</script>

<style scoped>
.content {
  height: 100px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
