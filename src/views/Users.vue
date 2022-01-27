<template>
    <h2 v-if="isLoading"> Espere por favor </h2>
    <h2 v-else> Usuario </h2>
    <h5 v-if="errorMessage"> {{ errorMessage }} </h5>
        
        <div v-if=" user.length > 0">
            <ul>
                <li v-for="{ first_name,  last_name, email, id } in  user" :key="id" >
                    <h4> {{ first_name }} {{ last_name }}</h4> 
                    <h6> {{ email }} </h6>
                </li>
            </ul>    
        </div>

        <button @click="prevPage"> Atras </button>
        <button @click="nextPage"> Siguiente </button>
        <span> Pagina {{ currentPage }} </span>

</template>

<script>

import useUser from '../composables/useUser'
export default{
    setup() {
        const { 
                user ,
                isLoading ,
                currentPage ,
                errorMessage,
                nextPage, 
                prevPage 
                }
                 = useUser()

        return {
             user ,isLoading ,currentPage ,errorMessage, nextPage, prevPage
        }
       
     },
}
</script>

<style scoped>

    h2{
        text-align: center;
        width:100%;
    }

    div { 
        display: flex; 
        justify-content: center;
        text-align: center;

    }

    ul {
        width: 250px;
        
    }
</style>