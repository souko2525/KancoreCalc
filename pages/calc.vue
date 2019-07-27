<template>
  <div class="container">
    <div class="block">
      <h4>Nuxt.js + Element？</h4>
      <el-rate v-model="value" :colors="['#2F3D4D', '#64B486', '#4B7C6E']"></el-rate>
    </div>
  </div>
</template>

<style scoped>
  .block {
    padding: 0 20px;
  }
</style>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class PostPreview extends Vue {
    private value: number | null = null;
}
</script>