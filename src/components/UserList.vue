<template>
    <ul>
        <!-- <li v-for=" users in  user " :key="users.id">
            <h2>hola mundso</h2>
        </li> -->

        <slot v-for=" users in  user" 
            :key="users.id"
            :users="users"
         > 

        </slot>
    </ul>
</template>

<script>

export default {
    props:{
        user: {
            type: Array,
            required: true
        }
    },
    setup() {


    }
}
</script>

<style  scoped>

    ul {
        list-style: none
    }
</style>