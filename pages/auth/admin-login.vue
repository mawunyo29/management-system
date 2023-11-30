<template>
  <div class="flex items-center justify-center ">
    <div class="w-full max-w-md">
      <el-card >
        <div class="text-center">
          <h1 class="mb-4 text-2xl font-bold uppercase">Connexion Administrateur</h1>
        </div>
        <el-form  :model="loginForm" label-width="80px" class="p-6" :label-position="labelPosition">
          <el-form-item label="Nom d'utilisateur">
            <el-input v-model="loginForm.username" placeholder="Entrez votre nom d'utilisateur" type="text"></el-input>
          </el-form-item>
          <el-form-item label="Mot de passe">
            <el-input v-model="loginForm.password" type="password" placeholder="Entrez votre mot de passe"
              :prefix-icon="Lock"></el-input>
          </el-form-item>
         
          <el-form-item label="Se souvenir de moi">
            <el-checkbox v-model="loginForm.checked"  />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login">Se connecter</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script setup >
import { ref, reactive } from 'vue';
import { Search, Lock } from '@element-plus/icons-vue'
const labelPosition = ref('top')
const loginForm = reactive({
  username: '',
  password: '',
  checked: false,
  search: ''

})


const login = () => {
  console.log(loginForm)
}
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés */
</style>
