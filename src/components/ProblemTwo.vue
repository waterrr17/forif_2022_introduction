<template>
    <div>
        <div v-if="intro">
            <h2>그럼 우리.. 어떤 언어로 작업할까요?</h2>
            <h3>최대한 쉽고 범용성이 넓은 언어로 골라보자!</h3>
            <h5>1.C언어로 하죠! <b-button variant="outline-primary" @click="clickGood">Go!</b-button> </h5>
            <h5>2.Assembly로 하죠! <b-button variant="outline-primary" @click="clickBad">Go!</b-button></h5>
            <h5>3.Python으로 하죠! <b-button variant="outline-primary" @click="clickPython">Go!</b-button></h5>
            <h5>4.C++로 하죠! <b-button variant="outline-primary" @click="clickGood">Go!</b-button></h5>
        </div>
            <div v-if="good">
                <h3>프로젝트는 무사히 완성이 될 것입니다.</h3>
                <h5>뭐 포인터로 인해 맛이 간 제작물이긴 하지만 돌아가면 괜찮은 것 아니겠어요?</h5>
                <b-button @click="returnPTwo">GO BACK</b-button>
                <b-button variant="success" @click="$emit('pTwoEnd')">NEXT</b-button>
            </div>
            <div v-if="bad">
                <h3>이런... 차라리 계란🥚으로 바위를 치겠어요</h3>
                <h5>Assembly는 기계어와 대응이 되는  Low Level 언어에요!<br>
                주변에 이거로 코딩한다는 사람이 있으면 유심히 살펴보세요. <br>
                아마 자다가도 프로그래밍할 코딩 괴수🦕🦕🦕일 확률이 높아요! <br><br>
                생쌀🍚과 달걀🥚로 멋진 볶음밥🍛을 해오는게 더 빠를 것 같네요</h5>
                <b-button @click="returnPTwo">GO BACK</b-button>
                <b-button variant="success" @click="$emit('pTwoEnd')">NEXT</b-button>
            </div>
            <div v-if="python">
                <h3>암암 Python만큼 편한게 없긴 하죠</h3>
                <h5>기초 언어이기도 하고 OOP (객체 지향 프로그래밍)의 개념을 잡는 데에 좋은 언어입니다!
<br>관심 있으시면 FORIF 파이썬 스터디를 지원해보시는 것은 어떤가요?!</h5>
                <a href="https://docs.google.com/spreadsheets/d/1-KGVItlbKowQpX5Ht_TDdMpiI-GyExaalaknWoQr1zc/edit?usp=sharing">
                    이름 남기고 스터디 신청 알림 받기
                </a>
                <b-button @click="returnPTwo">GO BACK</b-button>
                <b-button variant="success" @click="$emit('pTwoEnd')">NEXT</b-button>
            </div>
    </div>
</template>

<script>
export default {
    data(){
       return{
           intro: true,
           good: false,
           bad: false,
           python: false,
       }
   },
   methods:{
       clickGood(){
           this.intro=false;
           this.good=true;
       },
       clickBad(){
           this.intro=false;
           this.bad=true;
       },
       clickPython(){
           this.intro=false;
           this.python=true;
       },
       returnPTwo(){
           this.good=false;
           this.bad=false;
           this.python=false;
           this.intro=true;
       }
   }
}
</script>


