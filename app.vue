<template>
  <div class="antialiased bg-slate-200">
    <Header />
    
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <div class="flex items-center justify-center min-h-screen">

      <NuxtPage :transition="true" :keepalive="true" />
    </div>
    <Footer />
    <el-backtop :right="100" :bottom="100" />
  </div>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(false);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  loading.value = false;
  console.log("page:finish");

});
</script>