<template>
  <v-app id="comingSoon">
    <v-toolbar flat style="background-color:rgba(0,0,0,0)">
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/insumon_logo.png" width="100px" alt="insumon_logo" :style="breakPoint === 'xs' ? '' : 'margin: 100px'" />
        </router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
         <v-btn flat to="/about"><span class="toolbar-item">소개</span></v-btn>
         <v-btn flat class="toolbar-item" color="blue" to="/AboutTeam"> 팀원 소개 </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-layout
        justify-center
        align-center
        fill-height
      >
        <v-flex xs12 md8 class="ma-3" text-xs-center>
          <img src="../assets/insumon_comingsoon.jpg" width="100%" />
          <p style="font-size:15px; font-weight:bolder">
          <img width="20px" src="favicon.ico"/>
          준비 중 입니다! 빠르게 찾아뵙도록 하겠습니다!
          <img width="20px" src="favicon.ico"/>
          </p>
        </v-flex>
      </v-layout>
    </v-content>
  </v-app>
</template>
<script>
export default {
  name: "ComingSoon",
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

</style>
