<template>
  <div>
    <div>
      <el-affix :offset="0">
        <el-page-header class="sm:propertyden bg-[#2A2B48] text-white h-10 p-2" @back="goBack()" background-color="#2A2B48">
        </el-page-header>
        <div class="propertyden sm:block">
          <el-menu class="" mode="horizontal" :ellipsis="false" @select="handleSelect"
            :default-active="currentRouteActive" :router="true" active-text-color="#ffd04b" background-color="#2A2B48"
            :class="'w-full  fixed top-0 left-0 right-0 z-50 '" text-color="#fff">
            <NuxtLink to="/">
              <el-image class="w-16 h-16 ml-8" src="/assets/logos/defaultlogo.svg" alt="Element logo" />
            </NuxtLink>
            <div class="flex-grow" />
            <el-menu-item index="/about">
              <NuxtLink to="/about">About</NuxtLink>
            </el-menu-item>
            <el-sub-menu index="1">
              <template #title>Sevices</template>
              <el-menu-item index="/contact">Contact</el-menu-item>
              <el-menu-item index="2-2">item two</el-menu-item>
              <el-menu-item index="2-3">item three</el-menu-item>
              <el-sub-menu index="2-4">
                <template #title>item four</template>
                <el-menu-item index="2-4-1">item one</el-menu-item>
                <el-menu-item index="2-4-2">item two</el-menu-item>
                <el-menu-item index="2-4-3">item three</el-menu-item>
              </el-sub-menu>
            </el-sub-menu>
          </el-menu>
        </div>

      </el-affix>
    </div>

    <div class="container fixed bottom-0 left-0 right-0 flex items-center justify-center h-8 mx-auto sm:propertyden z-50">
      <el-menu class="w-full" mode="horizontal" active-text-color="#ffd04b" background-color="#2A2B48"
        :router=true v-bind:default-active="currentRouteActive" text-color="#fff">
        <el-menu-item index="/">
          <NuxtLink to="/">
            <el-icon size="20" type="true">
              <ElIconHomeFilled />
            </el-icon>
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="/about">
          <NuxtLink to="/about">
            <el-icon size="20">
              <ElIconUserFilled />
            </el-icon>
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="/auth/admin-login">
          <NuxtLink to="/contact">
            <el-icon size="20">
              <ElIconUnlock />
            </el-icon>
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="/contact">
          <NuxtLink to="/contact">
            <el-icon size="20">
              <ElIconService />
            </el-icon>
          </NuxtLink>
        </el-menu-item>
        <el-menu-item index="4">
          <NuxtLink to="/contact">
            <el-icon size="20">
              <ElIconSetting />
            </el-icon>
          </NuxtLink>
        </el-menu-item>
      </el-menu>

    </div>
  </div>
</template>

<script  setup>
import { ref, computed } from 'vue'
let currentRoute = useRoute()
let router = useRouter()

const currentRouteActive = computed({
  get: () => currentRoute.path,
  set: (value) => {

  }
})
useHead(
  {
    title: 'The Goal',
    meta: [
      {
        property: 'description',
        name: 'description',
        content: 'The Goal'
      },
      {
        property: 'twitter:card',
        name: 'twitter',
        content: 'ummary_large_image'
      },
      {
        property: 'twitter:image',
        name: 'Twitter',
        content: 'Twitter link preview image URL'
        
      },
      {
        property: 'twitter:link',
        name: 'Twitter',
        content: 'Twitter link preview image URL'
        
      },
      {
        property: 'og:title',
        property: 'og:title',
        content: 'Link preview title'
      },
      {
        property: 'twitter:description',
        name: 'Twitter',
        content: 'Twitter link preview description'
      },
      {
        property: 'og:image',
        property: 'og:image',
        content: 'The Goal'
      },
      {
        property: 'og:url',
        property: 'og:url',
        content: 'The Goal'
      },
      {
        property: 'description',
        name: 'twitter:title',
        content: 'Search engine description'
      },
      {
        property: 'twitter:description',
        name: 'twitter:description',
        content: 'The Goal'
      },
      {
        property: 'twitter:image',
        name: 'twitter:image',
        content: 'The Goal'
      },
      {
        property: 'twitter:card',
        name: 'twitter:card',
        content: 'The Goal'
      }

    ]
  }
)

const activeIndex = ref('1')
const handleSelect = (key, keyPath =[]) => {
  console.log(key, keyPath)

}
const backUrl = computed(() => {
  //return to the previous page
  return currentRoute.fullPath
})


const goBack = () => {
  router.back()
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
