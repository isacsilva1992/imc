import { createStore } from 'vuex'

export default createStore({
  state: {
    imc: 0,
    array: [],
  },
  mutations: {
    checkImc(state,payload){
      state.imc = (payload.peso / (payload.altura * payload.altura)).toFixed(2);
    },
    magic(state, payload){

      const p = payload.arr;

      
      state.array = [
        {
          'ordem-asc' : payload.arr.sort((a, b) => a - b)
        },
        
        {
          'pares' : payload.arr.filter(x => x % 2 === 0)
        }, 

        {
          'impares' : payload.arr.filter(x => x % 2)
        },

        {
          'primos' : payload.arr.filter(c => c % c !== 0)
        },

        {
          'dividido_por_2' : payload.arr.filter(c => c % 2 === 0)
        },

        {
          'dividido_por_3_5' : payload.arr.filter(c => c % 3 === 0 || c % 5 === 0)
        },

        // {
        //   'dividido_por_5' : payload.arr.filter(c => c % 5 === 0)
        // }
      ]
    }
  },
  actions: {
    
  },
  modules: {
  }
})
