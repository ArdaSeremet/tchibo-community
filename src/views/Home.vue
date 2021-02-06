<template>
  <div class="home">
    <HomeProduct :currentProductNumber="this.$route.params.id || null" />
  </div>
</template>

<script>
import HomeProduct from '@/components/HomeProduct.vue'

export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    HomeProduct
  }
}
</script>
