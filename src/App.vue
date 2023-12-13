<template>
  <div
    id="app"
    v-watermarker="{ text: 'test@qq.com', color: 'rgba(180, 180, 180, 0.3)' }"
  >
    <el-row>
      <el-col :span="24">
        <el-button v-permission="'delete'" type="primary">delete</el-button>
        <el-button v-permission="'create'" type="primary">create</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-input v-model="copyText" placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="12">
        <el-button v-copy="copyText" type="primary">copy</el-button></el-col
      >
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button v-longpress="onLongpress" type="primary"
          >longpress</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button v-debounce="onDebounce" type="primary">debounce</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input v-model="excharText" v-exchar></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24"> </el-col>
    </el-row>
    <el-row style="padding-bottom: 40px">
      <el-col :span="24">
        <el-button type="primary" v-drag>drag</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-input v-model="focusText" v-focus></el-input>
      </el-col>
    </el-row>
    <!-- <div style="height: 800px"></div> -->
    <el-row>
      <el-col :span="24">
        <img
          style="display: block"
          v-for="i in 20"
          :key="i"
          v-lazyload="`https://fakeimg.pl/350x200/?text=${i}`"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyText: "",
      excharText: "",
      focusText: "",
    };
  },
  methods: {
    onLongpress() {
      console.log("longpress is worked");
    },
    onDebounce() {
      console.log("debounce click");
    },
  },
};
</script>

<style scoped>
.el-row {
  margin-top: 20px;
}
</style>
