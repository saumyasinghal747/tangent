<template>
  <div id="demo">
    <client-only>
    <renderer :size="size">
      <!---<dat-gui :setup="uiSetup" :model="ui"></dat-gui>--->
      <scene>
        <orbit-controls :position="ui.camera" :rotation="{ x: 2, y: 0, z: 3 }">
          <camera></camera>
          <audio-listener></audio-listener>
        </orbit-controls>
        <light
          :hex="0xefefff"
          :intensity="2"
          :position="{ x: 50, y: 50, z: 50 }"
        ></light>
        <light
          :hex="0xefefff"
          :intensity="2"
          :position="{ x: -50, y: -50, z: -50 }"
        ></light>

        <div :key="ui.sysKey">


          <oimo-world :options="{ gravity: [0, 0, 0] }">
            <space-system :m-scale="10 ** 4">
              <space-object >
                <oimo-body :options="{ move: false, density: 1 }">
                  <!-- the axes -->
                  <cube ></cube>
                  <!-- playing around with parametric geometry --->
                  <mesh >
                    <Material
                      :options="materialOptions"
                    :color="0x28a745"
                    type="MeshNormal"
                    />
                    <Geometry  type="Parametric" :args="[(u,v,p)=>{
                      p.setX(u*20-10);
                      p.setY(v*20-10)
                    p.setZ(Math.pow(36-p.x*p.x-p.y*p.y, 1/2))

                  },100,100000]"></Geometry>
                  </mesh>

                  <!--gonna need a for-loop for those lines!-->
                  <div v-for='({x,y,c}, s) of pointSets' :key='s'>
                    <Line3DChain
                      v-for='(xline, i) of x'
                      :coords='xline'
                      :key='"x"+i+":"+s'
                      :color='c'
                    />
                    <Line3DChain
                      v-for='(yline, j) of y'
                      :coords='yline'
                      :key='"y"+j+":"+s'
                      :color='c'
                    />
                  </div>

                </oimo-body>
              </space-object>
            </space-system>
          </oimo-world>
        </div>
      </scene>
    </renderer></client-only>

  </div>

</template>

<script>
import Cube from '@/components/Cube.vue';
import * as THREE from 'three';

export default {
  components: { Cube },
  props: {
  pointSets:{type:Array}
  /**
   * array of objects {x, y, c}
   **/
},
  data() {
    const ui = this.getModel()
    return {
      //textures: ['cobblestone', 'diamond', 'redwool'],
      ui,
      uiSetup: this.setupPanel,
      size: {
        w: window.innerWidth,
        h: window.innerHeight
      },
      materialOptions: {
        color:2664261,
        side:THREE.DoubleSide,
        opacity:0.6,
        transparent: true
      }
    }
  },
  created() {
    // hack: loop animation via vue key prop
    setInterval(() => {
      this.ui.sysKey += 1
    }, 7000)
  },
  methods: {
    getModel() {
      const ui = {
        camera: {
          x: 20,
          y: 20,
          z: 8
        },
        ocean: {
          y: -200
        },
        sf03: {
          scale: 1
        },

      }
      return ui
    },
    setupPanel(gui, ui) {
      const fc = gui.addFolder('Camera')
      fc.add(ui.camera, 'x', -50, 50).step(0.01)
      fc.add(ui.camera, 'y', -50, 50).step(0.01)
      fc.add(ui.camera, 'z', -50, 50).step(0.01)
      fc.open()
    }
  }
}
</script>

<style lang="scss" scoped></style>
