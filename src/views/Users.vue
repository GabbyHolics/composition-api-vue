<template>
    <h2 v-if="isLoading"> Espere por favor </h2>
    <h2 v-else> Usuario </h2>
    <h5 v-if="errorMessage"> {{ errorMessage }} </h5>
        
        <div v-if=" user.length > 0">
                <user-list
                 :user="user"
                 v-slot="{users}"
                >
                   <!-- <h5>{{users.first_name }} {{ users.last_name }}</h5>
                   <span>{{ users.email }}</span> -->
                        <h3>{{users.first_name }} {{ users.last_name }}</h3>
                        <span>{{ users.email }}</span>
                </user-list>
                 
        </div>

        <button @click="prevPage"> Atras </button>
        <button @click="nextPage"> Siguiente </button>
        <span> Pagina {{ currentPage }} </span>

</template>

<script>
import UserList from "../components/UserList"
import useUser from '../composables/useUser'
export default{
    components: {UserList},
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