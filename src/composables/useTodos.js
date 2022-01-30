import { computed, ref } from 'vue' 
import { useStore } from 'vuex' 

const useTodos = () => {

    const store = useStore()
    const currentTab = ref('all')

 
    console.log(currentTab)

    return {
        currentTab,
        pending: computed(() => store.getters['pendingTodos']),
        all: computed(() => store.getters['allTodos']),
        completed: computed(() => store.getters['completedTodos']),
        getTodosByTab: computed(() => store.getters['getTodosByTab'](currentTab.value)),
       // methods
       toggleTodo: (id) => store.commit('toggleTodo', id)
    }
}


export default useTodos