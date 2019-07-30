<template>
  <div>

  </div> 
</template>

<script>
export default {
  computed: {
    test: () => {
      return this.$store.getters.TEST
    }
  }
}
</script>

