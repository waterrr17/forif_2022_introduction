<template>
    <div>
        <h2>와우! 여기까지 온 당신! 프로그래밍에 소질이 있을지도??</h2>
        <br>
        <h3>새내기 아기사자 {{$store.state.name}}🦁에게 FORIF가 책갈피를 선물로 드립니다!</h3>
        <h5>부스 담당자에게 요청해주세요! 🐧</h5>
        <a target="_blank" href="https://docs.google.com/spreadsheets/d/1-KGVItlbKowQpX5Ht_TDdMpiI-GyExaalaknWoQr1zc/edit?usp=sharing">
            이름 남기고 스터디 신청 알림 받기
        </a>
    </div>
</template>


<script>

export default {
    computed: {
    name () {
      return this.$store.state.name
    }
  }
}
</script>
