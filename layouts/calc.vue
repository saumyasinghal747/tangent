<template>
  <v-app dark>

        <nuxt />

  </v-app>
</template>

<script>
export default {
  data () {
    return {
      name:'calc',
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-chart-bell-curve-cumulative',
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
