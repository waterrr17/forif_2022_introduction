<template>
    <div class="game">  
        <div v-if="intro">
            <h3>눈을 떠보니 대학생 프로그래머👨🏻‍💻👩🏻‍💻로 빙의한 아기사자🦁!!! <br>
            타이밍 좋게 좀 빙의하지 하필 팀플하고 있을 때 빙의해버렸다ㅠㅠ <br>
            팀원들에게 내가 다른 사람이라는 것을 들키지 말고 무사히 넘겨 보자!!!  </h3>
            <b-button variant="outline-primary" @click="startPartOne">Go!</b-button>
        </div>
        <div v-if="problemOne">
            <problem-one @pOneEnd="pOneEnd" />
        </div>
        <div v-if="problemTwo">
            <problem-two @pTwoEnd="pTwoEnd" />
        </div>
        <div v-if="problemThree">
            <problem-three @pThreeEnd="pThreeEnd" />
        </div>
        <div v-if="ending">
            <ending />
        </div>
    </div>
</template>

<script>
import problemOne from "../components/ProblemOne.vue"
import ProblemTwo from "../components/ProblemTwo.vue"
import ProblemThree from "../components/ProblemThree.vue"
import Ending from "../components/Ending.vue"

export default {
    components:{
        problemOne,
        ProblemTwo,
        ProblemThree,
        Ending,
    },
    data(){
        return{
            intro: true,
            problemOne: false,
            problemTwo: false,
            problemThree: false,
            ending: false,
        }
    },
    methods:{
        startPartOne(){
            this.intro = false;
            this.problemOne = true;
        },
        pOneEnd(){
            this.problemOne = false;
            this.problemTwo = true;
        },
        pTwoEnd(){
            this.problemTwo = false;
            this.problemThree = true;
        },
        pThreeEnd(){
            this.problemThree = false;
            this.ending = true;
        }
    }
}
</script>

<style scoped>
.game{
    align-content: center;
}
</style>
