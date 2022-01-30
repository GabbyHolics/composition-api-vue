<template>
    <h1> Aprendiendo Slots  </h1>
    <button @click="openModal" > Abrir modal </button> 

    <modal v-if="isOpen"
            title="Hola Mundo"
            @on:close="closeModal"> 
        <template v-slot:body>
            <p>Lorem ipsum dolor sit amet, consectet</p>
        </template>
        <template v-slot:footer>
            <button  @click="closeModal"> salir </button>
        </template>
        <template v-slot:header>
            <h1> Titulo del Modal  </h1>
        </template>

        <template v-slot:exposed="{ newTitle }">
            <h2>{{ newTitle }}</h2>
        </template>
    </modal>
</template>

<script>
import Modal from '../components/Modal.vue'
import { ref } from 'vue'
export default {
    components: { Modal },
    setup(){

        const isOpen = ref(false)

        return {
            isOpen,
            openModal: () => isOpen.value = true,
            closeModal: () => isOpen.value = false
        }
    }
}
</script>

<style scoped>

</style>