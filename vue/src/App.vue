<template>
<div class="wrapper">
        <div class="containter">
        <trainings></trainings> 
        </div>
</div>
</template>

<script>
import Trainings from './components/Trainings.vue'

export default {
  data () {
    return {
      message: "<span>Hello</span>",
      fruits: ["a","b","c"]
    }
  },
  methods:{
    showMsg(){
      console.log('clicked');
    }
  },
  components:{
    trainings: Trainings
  }
}
</script>

<style scoped>
.wrapper {
        background-color: #ffd700;
        overflow: hidden;
      }
</style>
