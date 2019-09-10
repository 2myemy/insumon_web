<template>
  <v-app id="inspire">
    <v-toolbar flat style="background-color:rgba(0,0,0,0)">
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/insumon_logo.png" width="100px" alt="insumon_logo" :style="breakPoint === 'xs' ? '' : 'margin: 100px'"/>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-layout
        justify-center
        align-center
        row
        wrap
      >
        <v-flex xs12 md8 class="ma-3">
          <v-timeline>
            <v-timeline-item
              color="red lighten-2"
              large
            >
              <template v-slot:icon>
                <v-avatar>
                <img src="../assets/avatar_jaeyoung.jpeg">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>강재영</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline blue--text">CEO</v-card-title>
              <v-card-text class="timeline-cardtext">
                인슈몬의 대표로서 팀의 목표를 설정하고, 고객 경험을 개선하는 역할을 맡고 있습니다.
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/avatar_seungu.png">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>고승우</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline green--text">Marketing Manager</v-card-title>
              <v-card-text class="timeline-cardtext">
                인슈몬의 마케팅 담당자로서 고객에게 인슈몬을 홍보하는 업무를 담당하고 있습니다.
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/avatar_mingyu.png">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>최민규</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline yellow--text">Operation Manager</v-card-title>
              <v-card-text class="timeline-cardtext">
                인슈몬의 서비스 불편 사항을 해결하고, 고객에게 가장 필요한 운영 정책을 수립하고 있습니다.
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/avatar_eunbi.png">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>최은비</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline pink--text">Design Team</v-card-title>
              <v-card-text class="timeline-cardtext">
                인슈몬의 모든 디자인을 담당하며, 인슈몬을 고객이 이용하기 가장 편하게 디자인 하고있습니다.
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/avatar_kyungnam.png">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>박경남</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline brown--text">CTO</v-card-title>
              <v-card-text class="timeline-cardtext">
                인슈몬의 어플, 알고리즘 개발 및 필요 기술 총괄 개발을 담당하고 있습니다.
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="red lighten-2"
            large
          >
            <template v-slot:icon>
              <v-avatar>
                <img src="../assets/avatar_myoungyeon.jpeg">
              </v-avatar>
            </template>
            <template v-slot:opposite>
              <span>이명연</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline purple--text">Technical Manager</v-card-title>
              <v-card-text class="timeline-cardtext">
                인슈몬의 인터넷 사이트를 총괄하며, 어플과 기술 개발을 보조하고 있습니다.
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-flex>
      </v-layout>
    </v-content>
    <v-footer flat app>
      <span>&copy; Insumon</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "AboutTeam",
  data() {
    return {}
  },
  computed: {
    breakPointAll() {
      return this.$vuetify.breakpoint;
    },
    breakPoint() {
      return this.$vuetify.breakpoint.name;
    }
  }
}
</script>

<style scoped>
.timeline-cardtext {
  margin-top:-20px;
}
</style>
