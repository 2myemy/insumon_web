<template>
  <v-app id="info">
    <v-card flat height="100%">
    <v-toolbar flat style="background-color:rgba(0,0,0,0)">
      <v-toolbar-title>
        <router-link to="/">
          <img src="../assets/insumon_logo.png" width="100px" alt="insumon_logo" :style="breakPoint === 'xs' ? '' : 'margin: 100px'"/>
        </router-link>
      </v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
          row
          wrap
        >
          <v-flex xs6 text-xs-center>
            <p style="font-size: 27px; margin-top: 60px"> <strong>어려운 보험</strong>을 <br/> <strong>쉽게</strong> 설명해주는 <br/> 든든한 <strong>친구</strong></p>
            <v-card flat style="font-size: 12px; margin-top: 60px;"> 필요하다고 인지하고 있지만, 너무 어렵기 때문에<br/>
찾는 노력을 포기하고 설계사를 찾는 사람들.<br/><br/>

그런 사람들을 위해 보험을 쉽게 대화로 설명해주고, <br/> 가입과
보상까지의 과정을 도와주는 인슈몬이 탄생하게 되었습니다. </v-card>
          </v-flex>
          <img width="400px" src="../assets/insumon_intro.jpg"/>
        </v-layout>
      </v-container>
      <!-- <v-container fluid grid-list-xl>
        <v-tabs
          centered
          icons-and-text
        >
          <v-tab href="#tab-1">
            <v-icon x-large color="blue darken-2">find_in_page</v-icon>
            장점1
          </v-tab>
          <v-tab href="#tab-2">
            <v-icon x-large color="blue darken-2">supervisor_account</v-icon>
            장점2
          </v-tab>
          <v-tab href="#tab-3">
            <v-icon x-large color="blue darken-2">airplanemode_active</v-icon>
            장점3
          </v-tab>
          <v-tab href="#tab-4">
            <v-icon x-large color="blue darken-2">comment</v-icon>
            장점4
          </v-tab>
          <v-tab href="#tab-5">
            <v-icon x-large color="blue darken-2">location_on</v-icon>
            장점5
          </v-tab>
          <v-tab-item :value="'tab-1'">
            <v-card>111</v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-2'">
            <v-card>222</v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-3'">
            <v-card>333</v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-4'">
            <v-card>444</v-card>
          </v-tab-item>
          <v-tab-item :value="'tab-5'">
            <v-card>555</v-card>
          </v-tab-item>
        </v-tabs>
      </v-container> -->
    </v-content>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "About",
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
</style>
