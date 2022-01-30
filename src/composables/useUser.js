import { ref } from 'vue'
import axios from 'axios'

const useUser =  () => {

    const user         = ref([])
    const isLoading    = ref(true)
    const currentPage  = ref(1)
    const errorMessage = ref()

    const getUser = async (page = 1) => {

        if(page <= 0 ) page = 1

        isLoading.value = true

        const { data } = await axios.get('https://reqres.in/api/users',{
            params: { page }
        })
        if(data.data.length > 0){
            user.value = data.data
            currentPage.value = page
            errorMessage.value = null
        }else if( currentPage.value > 0 ){ 
            errorMessage.value = 'No hay mas usuarios'
        }
       
       isLoading.value = false

    }
    getUser()
    return {
        user,
        isLoading,
        currentPage,
        errorMessage,

        nextPage: () => getUser( currentPage.value + 1 ),
        prevPage: () => getUser( currentPage.value - 1 ),

    }
}

export default useUser