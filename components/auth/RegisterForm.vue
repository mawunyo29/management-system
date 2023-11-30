<template>
  <div class="flex justify-center items-center h-screen">
    <el-card class="w-96">
      <el-form ref="registerForm" :model="registerForm" label-width="80px" class="p-6">
        <h2 class="text-2xl font-bold mb-6">Inscription</h2>
        <el-form-item label="Nom d'utilisateur">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="Adresse e-mail">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
        <el-form-item label="Mot de passe">
          <el-input type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">S'inscrire</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script >
export default {
  name: 'RegisterForm',
  data() {
    return {
      registerForm: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    register() {
      // Logique d'inscription ici
    }
  }
};
</script>

<style scoped>
/* Styles spécifiques au composant Register */
</style>
