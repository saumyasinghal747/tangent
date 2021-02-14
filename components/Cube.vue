<template>
  <object3d v-bind='$attrs'>
  <Line3D :coord1='[-10, 0, 0]' :coord2='[10, 0, 0]'/>
    <Line3D :coord1='[0, -10, 0]' :coord2='[0, 10, 0]'/>
    <Line3D :coord1='[0, 0, -10]' :coord2='[0, 0, 10]'/>
  </object3d>
</template>

<script>
export default { props: { size: Number, texture: String } }
</script>

<style lang='scss' scoped></style>
