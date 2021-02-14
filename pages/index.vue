<template>
  <v-container>
    <client-only>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="true"
      fixed
      app
stateless
    >
      <v-list>
        <v-list-item
          v-for='n in 1'
          :key='n'
        >
          <v-list-item-action>
            <v-icon>mdi-circle-outline</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- mathquill field here -->
            <client-only>
              <mq-field :model-value='e' @update:model-value='e = $event;'  />
            </client-only>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="true"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main style='padding:none'>
      <v-container>
      <graph/>

        {{generatePoints(e)}}
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }} Saumya Singhal</span>
    </v-footer></client-only>
  </v-container>
</template>

<script>
import generatePoints from '~/plugins/generatePoints';
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  layout:'calc',

  data () {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Tangent',
      e:"\\sqrt{x}",
      equations:[

      ]
    }
  },
  methods:{
    generatePoints
  }
}
</script>
<style>
.v-list-item {
  border-top:solid 1px rgba(100,100,100,0.9);
  border-bottom:solid 1px rgba(100,100,100,0.9);
}

.v-main{
  padding-left:64px !important;
}
</style>
