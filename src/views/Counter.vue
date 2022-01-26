<template>
  <h1>Counter view </h1>
  <h2> {{ counter }} </h2>
  <button @click="increase"> +1 </button>
  <button @click="decrease"> -1 </button>
</template>

<script>
import useCounter from '@/composables/useCounter'

export default {
    name: 'counter',
    props: { },
    emits:[],
    setup() {
       const { counter, decrease, increase } = useCounter()

       return{
           counter, decrease, increase
       }
    },
}
</script>

<style>

</style>