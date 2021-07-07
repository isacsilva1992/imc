<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Imc />
    <Json />
  </div>
</template>

<script>
// @ is an alias to /src
import Imc from '@/components/Imc.vue';
import Json from '@/components/Json.vue';

export default {
  name: 'Home',
  components: {
    Imc,
    Json
  }
}
</script>
