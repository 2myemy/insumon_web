<template>
  <v-app id="inspire">
    <v-toolbar fixed flat style="background-color:rgba(0,0,0,0)">
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/insumon_logo.png" width="100px" alt="insumon_logo" :style="breakPoint === 'xs' ? '' : 'margin: 100px'" />
        </router-link>
      </v-toolbar-title>
      <v-spacer/>
      <v-toolbar-items>
         <v-btn flat to="/about"><span class="toolbar-item">소개</span></v-btn>
         <v-btn flat class="toolbar-item" color="white" to="/AboutTeam"> 팀원 소개 </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content v-if="breakPoint === 'xs' || breakPoint === 'sm'">
      <div style="position: relative;">
        <img width="100%" src="../assets/insumon_background_xs.png" alt="insumon_background" />
      </div>
      <div style="position: absolute; top: 130px; left: 55px">
        <span style="font-weight:bolder ; font-size:20px"> 어려운 보험? <br/> 인슈몬 </span>
        <span style="font-size:20px"> 에게 <br/>
        물어보세요! </span>
        </div>
        <div style="position: absolute; top: 230px; left: 18px">
        <v-layout row wrap>
        <v-btn flat width="30px" to="/ComingSoon">
          <img src="../assets/google_play.png" width="30px" />
        </v-btn>
        <v-btn flat width="30px" style="margin-left: -20px" to="/ComingSoon">
          <img src="../assets/app_store.png" width="30px" />
        </v-btn>
        </v-layout>
        <p style="font-size: 12px; margin-left:35px">Google Play &emsp;App Store</p>
      </div>
    </v-content>
    <v-content v-else-if="breakPointAll.width >= 1100 && breakPointAll.width <= 1400">
      <div style="position: relative;">
        <img width="100%" src="../assets/insumon_background.png" alt="insumon_background" />
      </div>
      <div style="position: absolute; top: 230px; left: 130px">
        <span style="font-weight:bolder ; font-size:25px"> 어려운 보험? <br/> 인슈몬 </span>
        <span style="font-size:25px"> 에게 <br/>
        물어보세요! </span>
        </div>
        <div style="position: absolute; top: 370px; left: 100px">
        <v-layout row wrap>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/google_play.png" width="50px" />
        </v-btn>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/app_store.png" width="50px" />
        </v-btn>
        </v-layout>
        <p style="margin-top:10px; margin-left:13px">Google Play&ensp;&emsp;&emsp; App Store</p>
      </div>
    </v-content>
    <v-content v-else-if="breakPointAll.width >= 1400 && breakPointAll.width <= 1600">
      <div style="position: relative;">
        <img width="100%" src="../assets/insumon_background.png" alt="insumon_background" />
      </div>
      <div style="position: absolute; top: 230px; left: 130px">
        <span style="font-weight:bolder ; font-size:30px"> 어려운 보험? <br/> 인슈몬 </span>
        <span style="font-size:30px"> 에게 <br/>
        물어보세요! </span>
        </div>
        <div style="position: absolute; top: 380px; left: 105px">
        <v-layout row wrap>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/google_play.png" width="50px" />
        </v-btn>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/app_store.png" width="50px" />
        </v-btn>
        </v-layout>
        <p style="margin-top:10px; margin-left:15px">Google Play&ensp;&emsp;&emsp; App Store</p>
      </div>
    </v-content>
    <v-content v-else-if="breakPointAll.width >= 1600 && breakPointAll.width <= 2000">
      <div style="position: relative;">
        <img width="100%" src="../assets/insumon_background.png" alt="insumon_background" />
      </div>
      <div style="position: absolute; top: 270px; left: 250px">
        <span style="font-weight:bolder ; font-size:35px"> 어려운 보험? <br/> 인슈몬 </span>
        <span style="font-size:35px"> 에게 <br/>
        물어보세요! </span>
        </div>
        <div style="position: absolute; top: 450px; left: 225px">
        <v-layout row wrap>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/google_play.png" width="50px" />
        </v-btn>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/app_store.png" width="50px" />
        </v-btn>
        </v-layout>
        <p style="margin-top:10px; margin-left:15px">Google Play&ensp;&emsp;&emsp; App Store</p>
      </div>
    </v-content>
    <v-content v-else-if="breakPointAll.width >= 2000">
      <div style="position: relative;">
        <img width="100%" src="../assets/insumon_background.png" alt="insumon_background" />
      </div>
      <div style="position: absolute; top: 350px; left: 300px">
        <span style="font-weight:bolder ; font-size:40px"> 어려운 보험? <br/> 인슈몬 </span>
        <span style="font-size:40px"> 에게 <br/>
        물어보세요! </span>
        </div>
        <div style="position: absolute; top: 550px; left: 290px">
        <v-layout row wrap>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/google_play.png" width="50px" />
        </v-btn>
        <v-btn flat width="50px" to="/ComingSoon">
          <img src="../assets/app_store.png" width="50px" />
        </v-btn>
        </v-layout>
        <p style="margin-top:10px; margin-left:15px">Google Play&ensp;&emsp;&emsp; App Store</p>
      </div>
    </v-content>
  <v-footer color="white" app>
     <span>&copy; Insumon</span>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Home",
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
.toolbar-item {
  font-weight:bolder
}
</style>
