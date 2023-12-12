<script setup >

import { ref, computed, onMounted, watch, watchEffect, nextTick, onUnmounted } from 'vue'

useHead({
    title: 'Home',
    titleTemplate: '%s  | ' + 'Mon site',
    meta: [
        {
            name: 'description',
            content: 'Bienvenue sur notre page "À propos".'
        }
    ]
})

const images = ref([
  'https://picsum.photos/1920/1080/?random',
  'https://picsum.photos/1920/1080/?random',
  'https://picsum.photos/1920/1080/?random',

])
const technologies = ref([
  {
    name: 'Laravel',
    image: 'https://laravel.com/img/logomark.min.svg',
    description: 'Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling.',
    url: 'https://laravel.com/',
    color: 'border-[#FF00FF]',
    experience: '3 years',
    progress: 80,
    bar: '#FF00FF'
  },
  {
    name: 'Livewire',
    image: 'https://laravel-livewire.com/img/twitter.png',
    description: 'A full-stack framework for Laravel that takes the pain out of building dynamic UIs.',
    url: 'https://laravel-livewire.com/',
    color: 'border-[#1A008F]',
    experience: '2 years',
    progress: 60,
    bar: '#1A008F'
  },
  {
    name: 'Symfony',
    image: 'https://symfony.com/logos/symfony_black_03.svg',
    description: 'Symfony is a set of reusable PHP components and a PHP framework to build web applications, APIs, microservices and web services.',
    url: 'https://symfony.com/',
    color: 'border-[#2A2B48]',
    experience: '4 mois',
    progress: 20,
    bar: '#2A2B48'

  },
  {
    name: 'Node',
    image: 'https://nodejs.org/static/images/logo.svg',
    description: 'Node.js® is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    url: 'https://nodejs.org/en/',
    color: 'border-[#00FF8F]',
    experience: '3 years',
    progress: 60,
    bar: '#00FF8F'
  },
  {
    name: 'Vue',
    image: 'https://vuejs.org/logo.svg',
    description: 'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
    url: 'https://vuejs.org/',
    color: 'border-[#41B782]',
    experience: '2 years',
    progress: 80,
    bar: '#41B782'

  }
  ,
  {
    name: 'React',
    image: 'https://reactjs.org/logo-og.png',
    description: 'React is a JavaScript library for building user interfaces. Learn what React is all about on our homepage or in the tutorial.',
    url: 'https://reactjs.org/',
    color: 'border-[#99A9BF]',
    experience: '1 years',
    progress: 60,
    bar: '#99A9BF'
  }
  ,
  {
    name: 'Angular',
    image: 'https://angular.io/assets/images/logos/angular/angular.svg',
    description: 'Angular is a platform for building mobile and desktop web applications. Join the community of millions of developers who build compelling user interfaces with Angular.',
    url: 'https://angular.io/',
    color: 'border-[#D3DCE6]',
    experience: '1 years',
    progress: 30,
    bar: '#D3DCE6'
  }
  ,

  {
    name: 'Nuxt',
    image: 'https://nuxt.com/icon.png',
    description: 'Nuxt.js is a free and open source web application framework based on Vue.js, Node.js, Webpack and Babel.js. The framework is advertised as "meta-framework for universal applications".',
    url: 'https://nuxtjs.org/',
    color: 'border-[#8B2B48]',
    experience: '2 mois',
    progress: 10,
    bar: '#8B2B48'
  },
  {
    name: 'Tailwind',
    image: 'https://tailwindcss.com/favicons/safari-pinned-tab.svg?v=3',
    description: 'Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.',
    url: 'https://tailwindcss.com/',
    color: 'border-[#FF00FF]',
    experience: '3 years',
    progress: 80,
    bar: '#FF00FF'
  },
  {
    name:'HTML',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png',
    description:'HTML is the standard markup language for Web pages. With HTML you can create your own Website.',
    url:'https://www.w3schools.com/html/',
    color:'border-[#E74F21]',
    experience:'3 years',
    progress:80,
    bar:'#E74F21'
  },
  {
    name:'CSS',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/800px-CSS3_logo_and_wordmark.svg.png',
    description:'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
    url:'https://www.w3schools.com/css/',
    color:'border-[#1A008F]',
    experience:'3 years',
    progress:80,
    bar:'#1A008F'
  },
  {
    name:'Javascript',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png',
    description:'JavaScript is the world\'s most popular programming language. JavaScript is the programming language of the Web.',
    url:'https://www.w3schools.com/js/',
    color:'border-[#FFD04B]',
    experience:'3 years',
    progress:80,
    bar:'#FFD04B'
  },
  {
    name:'PHP',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png',
    description:'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.',
    url:'https://www.w3schools.com/php/',
    color:'border-[#2A2B48]',
    experience:'3 years',
    progress:70,
    bar:'#2A2B48'
  },
  {
    name:'MySQL',
    image:'https://upload.wikimedia.org/wikipedia/fr/thumb/6/62/MySQL.svg/1200px-MySQL.svg.png',
    description:'MySQL is the most popular Open Source Relational SQL Database Management System. MySQL is one of the best RDBMS being used for developing web-based software applications.',
    url:'https://www.w3schools.com/mysql/',
    color:'border-[#00FF8F]',
    experience:'3 years',
    progress:80,
    bar:'#00FF8F'
  },
  
 

])
const formations = reactive({
  '2022-2023': [
    {
      name: 'Formation Développeur d\'application ',
      school: 'Studi',
      description: 'Formation intensive en alternance de 1 an en téléprésentiel pour devenir développeur d\'application.\n' +
        ' Développement d\'application web et mobile\n' +
        '. Développement d\'application desktop\n' +
        '. Archicture logiciel\n',
      url: 'https://oclock.io/formations/developpeur-web',
      color: 'border-[#FF00FF]',
      experience: '5 mois',
      progress: 80,
      bar: '#FF00FF'
    },
    
  ],
  '2020': [
    {
      name: 'Formation Développeur web et mobile',
      school: 'Calac Soft College',
      description: 'Formation intensive de 1 an en téléprésentiel et en présentien pour devenir développeur web et mobile',
      color: 'border-[#FF00FF]',

      progress: 100,
      bar: '#FF00FF'
    },


  ],

  '2006-2007': [
    {
      name: 'Formation RResponsable de rayon',
      school: 'AFPA',
      description: 'Formation intensive de 1 an en téléprésentiel et en présentien pour devenir développeur web et mobile',
      color: 'border-[#FF00FF]',

      progress: 100,
      bar: '#FF00FF'
    },


  ],
  '2002': [

    {
      name: 'Systeme de Support en economie rurale',
      school: 'Institut International de Histadrout',
      description: 'Brevet de technicien supérieur en commerce',
      color: 'border-[#FF00FF]',
      progress: 100,
      bar: '#FF00FF'
    },
  ],
  
  '1995': [
    {
      name: 'Baccalauréat série D',
      school: 'Lycée de Tokoin',
      description: 'Baccalauréat série Scientifique',
      color: 'border-[#FF00FF]',

      progress: 100,
      bar: '#FF00FF'
    },


  ],

})
 const textToType = 'Bonjour, je me nomme KLEGBE Komla , je suis un développeur web fullstack. Je suis passionné par le développement web et mobile. Voici quelques technologies que j\'utilise pour développer des applications web et mobiles.'
// let textTyped = ref('')
// const index = ref(0)
// const currentIndex = ref(0)
// const speed = ref(100)
// const isDeleting = ref(false)
// const loop = ref(true)
// const type = () => {
//   const textArray = textToType.split('');
//   let index = 0;
//   loop.value = true
//   const intervalId = setInterval(() => {
//     textTyped.value += textArray[index];
//     index++;

//     if (index === textArray.length) {
//       clearInterval(intervalId);
//       loop.value = false
//       isDeleting.value = true
//     }
//   }, speed.value);
// }
 const visibileitems = ref([])

// const animateItems = () => {
//   const intervalId = setInterval(() => {
//     if (currentIndex.value < technologies.value.length) {
//       visibileitems.value.push(technologies.value[currentIndex.value])
//       nextTick(() => {
//         currentIndex.value++
//       })

//     } else {
//       clearInterval(intervalId);
//     }
//   }, 5000);
// };
//detecter la lisibilité de la photo, du texte et de la couleur
const lisibilitydetector = (color) => {
  let currentColor = color.replace('border-', '')
  //supprimer les accolades
  currentColor = currentColor.replace('[', '')
  currentColor = currentColor.replace(']', '')
  let regex = /#([a-fA-F0-9]{3}){1,2}\b/g
  //si la couleur est en hexa
  if (regex.test(currentColor)) {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(currentColor);
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    if (yiq >= 128) {
      return 'bg-slate-900'
    } else {
      return 'bg-white'
    }
  }
  //si la couleur est en rgb
  let result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/.exec(currentColor);
  let r = parseInt(result[1], 10);
  let g = parseInt(result[2], 10);
  let b = parseInt(result[3], 10);
  let yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
  if (yiq >= 128) {
    return 'bg-slate-900'
  } else {
    return 'bg-white'
  }
  

  console.log(result);
  
}
watchEffect(() => {
  // animateItems()
})

onMounted(() => {
  // type()

})
onUnmounted(() => {
  visibileitems.value = []
  // currentIndex.value = 0
  // textTyped.value = ''
})
let colors = computed(() => {
  return technologies.value.map((item) => {
    return item.color
  })
})
const height = ref('calc(100vh - 350px)')

</script>

<template>
  <div class="w-full relative">
    <div class="left-0 right-0 w-full h-fill">
      <el-carousel indicator-position="outside" :height="height" class="hidden w-full sm:block" type="card">
        <el-carousel-item v-for="item in images" :key="item" :name="item">
          <el-image :src="item" :preview-src-list="images" class="object-contain w-full h-full " />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="container mx-auto my-8 max-w-7xl">
      
      <display-text :textToType="textToType" />
      <section class="flex flex-wrap justify-center w-full">
        <div class="w-full">
          <h1 class="flex items-center w-full p-6 text-3xl font-bold text-center uppercase">Technologies</h1>
          <div class="flex flex-wrap justify-start w-full ">
            <template v-for="(item, index) in technologies" :key="item">
              <div class="flex sm:basis-1/3  w-full">

                <a href="#"
                class="flex-1 relative w-full p-6 m-2 bg-white border-l-8 rounded-lg shadow-md sm:max-w-sm hover:bg-gray-300 hover:transition-all hover:ease-in-out hover:duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
                :class="item.color" >

                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white w-full">{{ item.name }}
                 </h5>
                <!--  -->
                <el-progress :percentage="item.progress" :color="item.bar" :text-inside="true" :stroke-width="16" class="w-full -mb-6" />
              </a>
              <el-image :src="item.image" :preview-src-list="images" class="object-contain w-12 h-12 -ml-14 p-0.5 mt-2" :class="lisibilitydetector(item.color)" />
             
              </div>

            </template>


          </div>

        </div>
      </section>
      <section class="flex flex-col  my-8">
        <div class="rounded-md">
          <div
            class="block  p-6 m-2 divide-y divide-zinc-600  bg-white border-l-8 rounded-lg shadow-md  hover:bg-gray-300 hover:transition-all hover:ease-in-out hover:duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h1 class="flex items-center w-full mb-4 text-3xl font-bold text-center uppercase ">Formations</h1>
            <div v-for="(item, index) in formations" :key="item">
              <p class="py-2">{{ index }}</p>
              <div class=" space-y-2 my-2">
                <template v-for="(formation, index) in item" :key="formation">
                  <a href="#" class=" " :class="formation.color">
                    <h2>{{ formation.school }}</h2>
                    <h5 class="mb-2 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{{ formation.name }}
                      experience {{ formation.experience }}</h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400">{{ formation.description }}</p>

                  </a>
                </template>
              </div>

            </div>

          </div>
        </div>
        <div class=" flex justify-center  rounded-md">
          <div class="  flex-grow block w-full p-6 m-2 divide-y divide-zinc-600  bg-white border-l-8 rounded-lg shadow-md  hover:bg-gray-300 hover:transition-all hover:ease-in-out hover:duration-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h1 class="flex items-center w-full mb-4 text-3xl font-bold text-center uppercase">experiences</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore itaque vitae illo deserunt tempore dolorem accusantium, eveniet consectetur eum dolores, inventore soluta reiciendis! Pariatur velit unde provident laudantium earum natus?</p>
        
        </div>
        </div>
      </section>
    </div>
   
  </div>
</template>

<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

@media screen and (max-width: 640px) {
  .el-carousel__item h3 {
    font-size: 18px;
    line-height: 100px;
  }

}


</style>

