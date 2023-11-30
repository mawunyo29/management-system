<template>
  <div class="flex items-center justify-center bg-gray-200">
    
    <el-card class="z-20 h-full w-96">
      <el-form  :model="loginForm" label-width="80px" :label-position="labelPosition">
        <el-form-item label="Email">
          <el-input v-model="loginForm.email" placeholder="Entrez votre email"></el-input>
        </el-form-item>
        <el-form-item label="Mot de passe">
          <el-input v-model="loginForm.password" type="password" placeholder="Entrez votre mot de passe"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">Se connecter</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>

import { ref, reactive ,computed } from 'vue';
 const props = defineProps({
labelPosition: {
  type: String,
  default: 'top'
}
})
const labelPosition = computed({
  get: () => props.labelPosition,
  set: (value) => {
    props.labelPosition = value
  }
})
const login = () => {
  console.log(loginForm)
}
const loginForm = reactive({
  email: '',
  password: ''
})

</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés en utilisant Tailwind CSS */
</style>
