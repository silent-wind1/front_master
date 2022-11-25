<template>
  <div class="right-div ">
    <slot>
      <ul>
        <a href="" v-for="(index, item) in 4" :key="index">
          <li class="right-box-li">
            <span style="line-height: 35px">{{ item }}</span>
            <div class="right-box-li-label">{{ item }}</div>
          </li>
        </a>
      </ul>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Home_from_content",
  props: {

  },
}
</script>

<style scoped>
.right-div {
  margin: 10px 0 ;
}
.right-box-li {
  width: 85%;
  height: 30px;
  margin: 1px 0 0 26px;
  border: 1px solid #3333;
  border-radius: 3px;
  color: #00B5AD!important;
}

.right-box-li:hover {
  background: rgba(194, 194, 194, 0.35);
}

.right-box-li-label {
  float: right;
  position: relative;
  width: 40px;
  height: 19px;
  margin: 5px 5px 0 0 ;
  border: 1px solid #00B5AD;
  border-left: none;
  border-radius: 5px;
  text-align: center;


}

.right-box-li-label::before {
  content: '';
  position: absolute;
  top: 3px;
  right: 32px;
  width: 12px;
  height: 12px;
  border-left: 1px solid  #00B5AD;
  border-bottom: 1px solid  #00B5AD;
  transform: rotate(45deg);
}

</style>
