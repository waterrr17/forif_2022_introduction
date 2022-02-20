<template>
    <div>
        <div v-if="intro">
             <h2>코딩하다가 모르는 부분을 발견했어요... 🙀</h2>
            <h3>다행히 팀원들에게 정체를 숨겼지만 어찌저찌 시작한 코딩도 그렇게 순탄하지만은 않은데...
아 이건 외않된데...</h3>
            <h5>1.주변 선배들에게 물어봅니다.<b-button variant="outline-primary" @click="clickSenpai">Go!</b-button></h5>
            <h5>2.네이버에 검색해봅니다. <b-button variant="outline-primary" @click="clickNaver">Go!</b-button></h5>
            <h5>3.구글에 검색해봅니다.<b-button variant="outline-primary" @click="clickGoogle">Go!</b-button></h5>
        </div>
           <div v-if="senpai">
               <h3>선배가 다행히 문제점을 해결했습니다!</h3>
                <h5>사실은 선배도 구글에서 영어로 검색해서 찾은 것인데 말이죠<br>
                다음 번에는 스스로 검색해보도록 합시다!</h5>
                <b-button @click="returnPThree">GO BACK</b-button>
                <b-button variant="success" @click="$emit('pThreeEnd')">NEXT</b-button>
            </div>
            <div v-if="naver">
                <h3>당신은 어둠의 네이버 협회에게 암살당한 거시다!</h3>
                <h5>다시는 검색할 때 네이버를 쓰지 말라는 거시다... 기억하도록<br>
                네이버 웹툰 볼때 말곤 쓰는 것이 아니다</h5>
                <b-button @click="returnPThree">GO BACK</b-button>
                <b-button variant="success" @click="$emit('pThreeEnd')">NEXT</b-button>
            </div>
            <div v-if="google">
                <h3>구글에 검색해서 해결법을 알아낸 당신!</h3>
                <h5>근데 설마.. 한글로 검색한 것은 아니죠? <br>
                요오오오상한 번역체 글을 보느니 차라리 영어로 검색하겠어요!</h5>
                <b-button @click="returnPThree">GO BACK</b-button>
                <b-button variant="success" @click="$emit('pThreeEnd')">NEXT</b-button>
            </div>
    </div>
</template>

<script>

export default {
   data(){
       return{
           intro: true,
           senpai: false,
           naver: false,
           google: false,
       }
   },
   methods:{
       clickSenpai(){
           this.intro=false;
           this.senpai=true;
       },
       clickNaver(){
           this.intro=false;
           this.naver=true;
       },
       clickGoogle(){
           this.intro=false;
           this.google=true;
       },
       returnPThree(){
           this.senpai=false;
           this.naver=false;
           this.google=false;
           this.intro=true;
       }
   }
}
</script>


