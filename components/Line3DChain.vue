
<template>
  <div><slot></slot></div>
</template>
<script>
import * as THREE from 'three'
export default {
  name: 'Line3DChain',
  provide () {
    return {
      parentObj: this.curObj
    }
  },
  inject: {
    parentObj: { name: 'parentObj', default: null }
  },
  props: {
    color:{type:Number, default:0xffffff},
    name: { type: String },
    obj: { type: Object },
    scale: { type: [Object, Number] }, // { x, y, z }
    position: { type: Object }, // { x, y, z }
    rotation: { type: Object }, // { x, y, z }
    coords:{type:Array}
  },
  watch: {
    scale: {
      deep: true,
      handler (v) {
        this.setScale(v)
      }
    },
    position: {
      deep: true,
      handler (v) {
        Object.assign(this.curObj.position, v)
      }
    },
    rotation: {
      deep: true,
      handler (v) {
        Object.assign(this.curObj.rotation, v)
      }
    },
    obj (obj) {
      this.curObj = obj
    },
    curObj (obj, oldObj) {
      this.unsetObj(oldObj)
      this.setObj(obj)
    }
  },
  data () {

    let curObj = this.obj
    // this.obj = new Object3D() // holder
    if (!curObj) {
      const points = [];
      //points.push( new THREE.Vector3( 0, 0, 10 ) );
      for (const coord of this.coords){
        points.push( new THREE.Vector3( ...coord) );
      }

      const material = new THREE.LineBasicMaterial( { color: this.color,linewidth: 10, } );
      const geometry = new THREE.BufferGeometry().setFromPoints( points );
      curObj = new THREE.Line(geometry, material)
    }
    return { curObj }
  },
  // ready => mounted + (nextTick?)
  // http://rc.vuejs.org/guide/migration.html#ready-deprecated
  mounted () {
    this.setObj(this.curObj)
  },
  // detached => destroyed + (nextTick?)
  // http://rc.vuejs.org/guide/migration.html#detached-deprecated
  // but we use beforeDestroy to clean up
  beforeDestroy () {
    this.unsetObj(this.curObj)
  },
  methods: {
    setObj (obj) {
      // fix vue 2.0 `this.constructor.name` becomes `VueComponent`
      // obj.name = obj.name || this.constructor.name
      obj.name = this.name || obj.name || obj.type
      this.setScale(this.scale)
      Object.assign(obj.position, this.position)
      Object.assign(obj.rotation, this.rotation)
      if (this.parentObj) {
        this.parentObj.add(obj)
      }
      this.$emit('update:obj', obj)
    },
    unsetObj (obj) {
      this.$emit('update:obj', null)
      if (this.parentObj) {
        this.parentObj.remove(obj)
      }
    },
    setScale (v) {
      if (v && typeof v === 'number') {
        v = { x: v, y: v, z: v }
      }
      Object.assign(this.curObj.scale, v)
    },
    dispatchEvent (name, detail, options = {}) {
      // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
      let e = new CustomEvent(name, {
        detail,
        bubbles: true,
        cancelable: true,
        ...options
      })
      return this.$el.dispatchEvent(e)
    }
  }
}
</script>
