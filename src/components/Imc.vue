<template>
    <div>
        <h1>IMC: {{ imc }}</h1>

        <hr>

        <div>
            <legend>Altura (Ex: 1.72m):</legend>
            <input type="text" v-model="altura">
        </div>

        <div>
            <legend>Peso (Ex: 75.5):</legend>
            <input type="text" v-model="peso">
        </div>

        <button @click="check()">CHECK</button>

        <hr>

        <h5>Avaliação: 
            <span v-if="imc > 0 && imc < 16">Anorexia ou desnutrição</span>
            <span v-else-if="imc > 16 && imc < 19">Baixo Peso</span>
            <span v-else-if="imc > 18 && imc < 26">Peso Normal</span>
            <span v-else-if="imc > 25 && imc < 35">Excesso de Peso</span>
            <span v-else-if="imc > 34 && imc < 41">Obesidade Severa</span>
            <span v-else>0</span>
        </h5>

    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
    
    data(){
        return {
            peso: 0,
            altura: 0,
        }
    },
    computed: {
        ...mapState(['imc'])
    },
    methods: {
        check(){
            this.$store.commit({
                type: 'checkImc',
                peso: this.peso,
                altura: this.altura
            })
        }
    }
}
</script>