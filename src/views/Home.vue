<template>
  <section class="content-box">
    <div class="box">
      <div class="top">
        <div class="title">
          <b>博客</b>
        </div>
        <div class="count">共 <span class="text">{{ totalCount }}</span> 篇</div>
      </div>
      <Contents :Blogs="blog"></Contents>
      <div class="tail">
        <button class="left-btn" v-show="currPage !== 1" @click="previousPage()">上一页</button>
        <button class="right-btn" v-show="currPage !== totalPage" @click="nextPages()">下一页</button>
      </div>
    </div>

    <div class="right-box">
      <div class="right-box-back">
        <Home_from :title="classify"></Home_from>
        <Home_from_content></Home_from_content>
      </div>

      <div class="right-box-back">
        <Home_from :title="table"></Home_from>
        <Home_from_content></Home_from_content>
      </div>

      <div class="right-box-back">
        <Home_from :title="file"></Home_from>
        <Home_from_content></Home_from_content>
      </div>
    </div>
  </section>
</template>

<script>
import Contents from '@/components/content/Contents'
import Home_from from './home/Home_from'
import Home_from_content from "./home/Home_from_content";
import {queryBlog, blogCount} from "../network/blog";
import {tsFormat, formatDate} from "../utils/DateProcessing"

export default {
  name: "Home",
  data() {
    return {
      currPage: 1, // 当前页数
      totalCount: 0, // 总记录数
      totalPage: 0, // 总页数
      blog: '',
      classify: "分类",
      table: "标签",
      file: "归档",
      localhost: "http://localhost:8080"
    }
  },
  mounted() {
    queryBlog(this.currPage).then(res => {
      this.totalCount = res.data.totalCount;
      this.totalPage = res.data.totalPage;
      this.blog = res.data.lists;
      console.log(this.blog)
      for (const re of this.blog) {
        re.create_time = formatDate(re.create_time);
        re.first_picture = this.localhost + re.first_picture;
      }
    });

    blogCount().then(res => {
      this.number = res.data;
    })
  },
  methods: {
    // 下一页方法
    nextPages() {
      this.currPage++;
      queryBlog(this.currPage).then(res => {
        this.blog = res.data.lists;
        console.log(this.blog)
        for (const re of this.blog) {
          re.create_time = formatDate(re.create_time);
          re.first_picture = this.localhost + re.first_picture;
        }
      });
    },
    // 上一页方法
    previousPage() {
      this.currPage--;
      queryBlog(this.currPage).then(res => {
        this.blog = res.data.lists;
        console.log(this.blog)
        for (const re of this.blog) {
          re.create_time = formatDate(re.create_time);
          re.first_picture = this.localhost + re.first_picture;
        }
      });
    }
  },

  components: {
    Contents,
    Home_from,
    Home_from_content
  }
}
</script>

<style scoped>
@import "../assets/css/home.css";

.left-btn, .right-btn {
  width: 85px;
  height: 40px;
  margin: 20px;
  border: 1px solid #00B5AD;
  border-radius: 5px;
  background: white;
  color: #00B5AD;
  font-size: 10px;
  cursor: pointer;
}

.right-btn {
  float: right;
}
</style>
