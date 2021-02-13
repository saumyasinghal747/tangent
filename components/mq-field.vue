<template>
<span>
  <span ref='field'></span>
</span>
</template>

<script>
export default {
  name: 'mq-field',
  mounted(){
    this.$mq(this.$refs.field);

  }
}
</script>

<style scoped>

</style>
