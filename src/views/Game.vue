<template>
  <div class="game">
    <h1>print(f"{user}의 판교 개발자로 살아남기")</h1>
    <br><br>
    <form @submit.prevent="startGame">
      <h4>이름을 입력하세요</h4>
      <input v-model="name">
      <b-button @click="startGame">START</b-button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'Game',
  data(){
      return{
          name: "",
      }
  },
  components: {

  },
  methods:{
    startGame(){
      this.$store.commit('changeName',this.name);
      this.$router.push('/forif_2022_introduction/#/gameinschool');
    }
  }
}
</script>
