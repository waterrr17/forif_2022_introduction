<template>
    <div>
        <div v-if="intro">
         <h2>모르는 사람들과 프로젝트를 하게 된 당신! 각자 역할을 나누게 되는데..</h2>
            <h5>1.저는 웹페이지를 꾸미는 FrontEnd를 맡을게요! <b-button variant="outline-primary" @click="problemOneGood">Go!</b-button></h5>
            <h5>2.저는 페이지시스템을 조작하는 BackEnd를 맡을래요! <b-button variant="outline-primary" @click="problemOneGood">Go!</b-button></h5>
            <h5>3.저는 그러면 이번 알고리즘에 들어갈 딥러닝을 맡을래요! <b-button variant="outline-primary" @click="problemOneGood">Go!</b-button></h5>
            <h5>4.저는 파일관리 시스템인 git을 맡도록 하겠습니다! <b-button variant="outline-primary" @click="problemOneBad">Go!</b-button></h5>
        </div>
        <div v-if="good">
            <h3>네 그럼 다들 맡은 부분 열심히 해봐요~</h3>
            <h5>오... 대충 눈치껏 골랐는데 다행히 사람들은 아무런 의심 없이 넘어가는 듯 합니다...</h5>
            <b-button @click="returnPOne">GO BACK</b-button>
            <b-button variant="success" @click="goNext">NEXT</b-button>
        </div>
        <div v-if="bad">
            <h3>이런! 사람들이 당신을 의심의 눈초리로 바라봅니다.</h3>
            <h5>git은 특정 사람이 전담하는 것이 아니라 각자 일한 기록을 남기는 파일 저장소입니다. <br>
                안타깝게도 사람들에게 당신이 개발자가 아니라는 사실을 들켜버렸네요 😭😭😭
            </h5>
            <b-button @click="returnPOne">GO BACK</b-button>
            <b-button variant="success" @click="goNext">NEXT</b-button>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return {
            intro: true,
            good: false,
            bad: false,
        }
    },
    methods:{
        problemOneGood(){
            this.intro = false;
            this.good = true;
        },
        problemOneBad(){
            this.intro = false;
            this.bad = true;
        },
        returnPOne(){
            this.intro = true;
            this.good = false;
            this.bad = false;
        },
        goNext(){
            this.$emit('pOneEnd');
        }
    },
}
</script>

