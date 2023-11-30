<template>
    <div class="p-6 mb-2 w-full">
        <p class="w-full text-2xl text-start">
            <span v-html="textTyped"></span>
            <span class="blinking-cursor" v-if="loop">|</span>
        </p>
    </div>
</template>
  
<script setup>
import { ref, nextTick, onMounted, onUnmounted, watchEffect, computed } from 'vue';

const props = defineProps({
    textToType: {
        type: String,
        default:
            'Bonjour, je me nomme KLEGBE Komla , je suis un développeur web fullstack. Je suis passionné par le développement web et mobile. Voici quelques technologies que j\'utilise pour développer des applications web et mobiles.'
    }
});

const textToType = computed({
    get: () => props.textToType,
    set: (value) => {
        props.textToType = value;
    }
});
const speed = ref(100);

let textTyped = ref('');
const visibileitems = ref([]);
const linkRef = ref(null);
const aRef = ref(null);
const loop = ref(true);
const startTyping = () => {
    const textArray = textToType.value.split('');
    let index = 0;
    loop.value = true;
    const intervalId = setInterval(() => {
        textTyped.value += textArray[index];
        index++;

        if (index === textArray.length) {
            clearInterval(intervalId);
            detectAndRenderLinks();
            loop.value = false;
        }
    }, speed.value);
};

const detectAndRenderLinks = () => {
    const link = searchLink(textToType.value);

    if (link) {
        visibileitems.value.push(link);
        createAndRenderLink(link);
    }
};

const searchLink = (text) => {
    const regex = /(https?:\/\/[^\s]+)/g;
    const found = text.match(regex);
    return found ? found[0] : null;
};

const createAndRenderLink = (link) => {
    aRef.value = document.createElement('a');
    linkRef.value = nextTick(() => {
        aRef.value.href = link;
        aRef.value.target = '_blank';
        aRef.value.rel = 'noopener noreferrer';
        aRef.value.textContent = link;

        const index = textToType.value.indexOf(link);
        const updatedText =
            textTyped.value.slice(0, index) +
            aRef.value.outerHTML +
            textTyped.value.slice(index + link.length);

        textTyped.value = updatedText;
    });
};

watchEffect(() => {

});


onMounted(() => {
    startTyping();
});

onUnmounted(() => {
    visibileitems.value = [];

    textTyped.value = '';
});
</script>
  
<style scoped>
.blinking-cursor {
    display: inline-block;
    width: 10px;
    height: 20px;
    margin-left: 5px;
    animation: blink 1s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>
  