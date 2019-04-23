<template>
  <div>
    <!-- <v-header></v-header> -->
    <v-rule></v-rule>
    <!-- <v-footer></v-footer> -->
  </div>

</template>
<script>
import publicHeader from '@/components/publicHeader'
import publicFooter from '@/components/publicFooter'
import rule from '@/components/rule'
  export default {
    name:'template',
    components:{
      'v-header':publicHeader,
      'v-footer':publicFooter,
      'v-rule':rule
    }
  }
</script>
