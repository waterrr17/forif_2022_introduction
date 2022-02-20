<template>
  <div class="home">
    <h1>Welcome to FORIF</h1>
    
    <br><br>
    <transition name="slide-fade">
      <div v-if="show">
        <h1>FORIF 부스에 오신 여러분을 환영합니다!</h1>
        <h3>앞으로도 FORIF에 많은 관심 부탁드립니다❤</h3>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      show:true,
    }
  },
  methods:{
    changeShow(){
      this.show = !this.show;
    },
    blinking(){
      setInterval(this.changeShow, 800);
    }
  },
  mounted(){
    this.blinking();
  }
}
</script>

<style scoped>
.fade-enter-active {
  transition: all .3s ease;
}
.fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
