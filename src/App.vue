<template>
  <div id="app">
    <el-row>
      <el-col :span="24">
        <el-button v-permission="'delete'" type="primary">delete</el-button>
        <el-button v-permission="'create'" type="primary">create</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>
