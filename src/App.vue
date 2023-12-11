<template>
  <div id="app">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      copyText: "",
      copyText1: "",
    };
  },
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
</style>
