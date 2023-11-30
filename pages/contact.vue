<template>
    <div class="flex flex-col sm:flex-row  h-screen">
        <div class="container mx-auto shadow-sm z-10">
            <el-image src="https://picsum.photos/1920/1080/?random" fit="cover" class="h-full" />
        </div>

        <div class="container mx-auto h-full flex justify-center items-center ">
            <el-card class="sm:w-1/2 w-full mx-2 rounded-lg">
                <template #header>
                    <h1 class="text-3xl font-bold  text-center uppercase">Contactez-nous</h1>
                </template>
                <el-form class="w-full" label-position="top" :model="contactForm"  :rules="rules" :ref="ruleFormRef">
                    
                        <el-form-item label="Name" prop="username">
                            <el-input v-model="contactForm.username" class="w-50 m-2" size="large" placeholder="entrez votre nom d'utilisateur" :prefix-icon="User"  />
                        </el-form-item>
                    <el-form-item label="Email" prop="email">
                        <el-input v-model="contactForm.email" class="w-50 m-2" size="large" placeholder="entrez votre email" :prefix-icon="Lock"  />
                    </el-form-item>
                    <el-form-item label="Message" prop="message">
                        <el-input v-model="contactForm.message" class="w-50 m-2" size="large" placeholder="entrez votre message" :prefix-icon="User" type="textarea" maxlength="300" show-word-limit />
                    </el-form-item>

                    <div class=" flex justify-end items-center py-0.5">
                        
                        <el-button type="primary" @click="contactMe(ruleFormRef)">Envoyer</el-button>
                    </div> 
                </el-form>
            </el-card>
        </div>

    </div>
</template>

<script setup>
import { Search, Lock, User } from '@element-plus/icons-vue'
import { ref, reactive ,computed } from 'vue'

const route = useRoute()
useHead({
    title: 'Me contacter',
    titleTemplate: '%s  |  ' + 'Mon site',
    meta: [
        {
            name: 'description',
            content: 'Bienvenue sur notre page "À propos".'
        }
    ]
})
const ruleFormRef = ref(null)
const labelPosition = ref('top')

const contactForm = reactive({
    username: '',
    email: '',
    message: '',

})

const rules = reactive ({
    username: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 20, message: 'Length should be 3 to 5', trigger: 'blur' }
    ],
    email: [
        { required: true, message: 'Please input your email ', trigger: 'blur' },
        { type: 'email', message: 'Please enter correct email address', trigger: ['blur', 'change']}
    ],
    message: [
        { required: true, message: 'Please enter your message', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 300', trigger: 'blur' }
    ]
})

const isvalid = computed(() => {
    return contactForm.username !== '' && contactForm.email !== '' && contactForm.message !== ''
})

const contactMe = async (formEl, undifine) =>
{
  if(!formEl) return 
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
    })
}
</script>

<style>
/* Ajoutez ici vos styles personnalisés si nécessaire */
</style>
