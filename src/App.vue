<template>
  <div id="app">
    <Header v-if="$store.state.isPath"></Header>
    <router-view>
      <admin v-show="!$store.state.isPath"></admin>
    </router-view>
    <Footer v-if="$store.state.isPath"></Footer>
  </div>
</template>

<script>
import Header from "@/components/content/Header";
import Footer from "@/components/content/Footer";
import Admin from "./views/Admin";

export default {
  name: "App",
  data() {
    return {
      path: ''
    }
  },
  methods: {
    // 判断路由
    // isPath() {
    //   return this.path === '/home' || this.path === '/classify' ||
    //     this.path === '/tag' || this.path === '/archives' ||
    //     this.path === '/detailed' || this.path === '/login';
    // }
  },
  // 判断路由
  mounted() {
    this.path = this.$route.path
  },
  watch: {
    $route(to, from) {
      this.path = to.path
    }
  },
  components: {
    Admin,
    Header,
    Footer,
  },

}
</script>

<style scoped>

</style>
