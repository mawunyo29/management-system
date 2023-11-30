<template>
    <div class="container mx-auto my-8 max-w-7xl">
        <div class="w-full  flex flex-col items-center">
            <div class="w-full">
                <Title title="Nuxt Routing" />
                <!-- <p>Current route: {{ route.path }}</p> -->
                <h1 class="text-4xl font-bold mb-4">À propos de moi</h1>
            </div>

            <div class="w-full">
                <display-text :textToType="textToType" />
            </div>

        </div>
    </div>
</template>

<script setup>
const route = useRoute()
const linkurl = ref("https://goal-management.fr")
const textToType = 'Passionné par le développement web et mobile.\n' +
 'Je me suis lancé dans le développement web et mobile depuis 2019.\n' +
 ' J\'ai commencé par le développement web avec le framework PHP Laravel et Livewire. Ensuite,\n'+
 ' j\'ai appris le framework JavaScript VueJS. J\'ai aussi appris le framework Ionic pour le développement mobile.\n'+
 ' J\'ai egalement appris le Java et réalisé quelques projets en javaFx, Laravel.\n'+
    ' J\'ai également traivaillé sur des projets complex Chez Pythagore .\n'+
    ' J\'ai aussi appris le framework JavaScript VueJS. J\'ai aussi appris le framework Ionic pour le développement mobile.\n'+
   ` ${linkurl.value}`+
 '\n . Au cours de mon apprentissage, j\'ai appris à utiliser les bases de données relationnelles et non relationnelles. J\'ai aussi appris à utiliser les outils de versionning comme Git et Github.\n'+
'J\'ai aussi appris à utiliser les outils de gestion de projet comme Trello et Jira. J\' ai des notions en gestion de prject avec la méthode agile SCRUM, architecture logicielle et conception de base de données. Je suis disponible pour travailler sur des projets web et mobiles. Je suis ouvert à toute proposition de collaboration. N\'hésitez pas à me contacter pour toute proposition de collaboration. '
useHead({
    title: 'À propos de nous',
    titleTemplate: '%s  À propos de nous',
    meta: [
        {
            name: 'description',
            content: 'Bienvenue sur notre page "À propos".'
        }
    ]
})
</script>

<style scoped>
/* Utilisez les classes de Tailwind CSS pour styliser votre page */
</style>
