<template>
  <v-container>
    <client-only>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="true"
      fixed
      app
    >
      <v-list>
        <v-list-item

        >
          <v-list-item-action>
            <v-icon>mdi-circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <!-- mathquill field here -->
            <span></span>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
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
    <v-main>
      <v-container>



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
      name:'calc',
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-circle',
          title: 'Calculator',
          to: '/'
        },
        {
          icon: 'mdi-help',
          title: 'Help',
          to: '/help'
        }
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: 'Tangent'
    }
  }
}
</script>
