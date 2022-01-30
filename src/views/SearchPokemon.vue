<template>
    <h1> Buscar Pokemon: {{ pokemonId }} </h1>
    <form @submit.prevent="onSubmit" >
            <input 
            type="number"
            placeholder="Numero del Pokemon"
            autofocus=""
            v-model="pokemonId"
            >
    </form>
    <br>
    <span> Presionar enter para buscar </span>
</template>

<script>
import { useRouter } from 'vue-router'
import { ref } from "vue"
export default {
    setup() {
        
        const router = useRouter()

        const pokemonId = ref(1)

        return {
            pokemonId,

            onSubmit: () => {
                router.push({ name: 'pokemon-id', params: {id: pokemonId.value}})
            }
        }
    },
}
</script>