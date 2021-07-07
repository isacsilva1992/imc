<template>
    <div>
        <h1>ARRAY:</h1>
        <button @click="magic()">See the magic!</button>
        
        <p>Ordem Asc: <span v-for="(a, i) in array" :key="i">{{ a['ordem-asc'] }}</span></p>
        <p>Nº Pares: <span v-for="(a, i) in array" :key="i">{{ a['pares'] }}</span></p>
        <p>Nº Impares: <span v-for="(a, i) in array" :key="i">{{ a['impares'] }}</span></p>
        <p>Primos: <span v-for="(a, i) in array" :key="i">{{ a['primos'] }}</span></p>
        <p>Dividido p/ 2: <span v-for="(a, i) in array" :key="i">{{ a['dividido_por_2'] }}</span></p>
        <p>Dividido p/ 3 e 5: <span v-for="(a, i) in array" :key="i">{{ a['dividido_por_3_5'] }}</span></p>
        <!-- <p>Dividido p/ 5: <span v-for="(a, i) in array" :key="i">{{ a['dividido_por_5'] }}</span></p> -->
        

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    
    data(){
        return {
            arr: [1, 23, 34, 54, 56, 13, 7, 49, 57, 3, 5, 18, 90, 78, 57, 2, 8, 30, 70, 104, 99, 73, 66, 45],
        }
    },
    computed: {
        ...mapState(['array'])
    },
    methods: {
        
        magic(){
            this.$store.commit({
                type: 'magic',
                arr: this.arr
            })
        }
    }
}
</script>