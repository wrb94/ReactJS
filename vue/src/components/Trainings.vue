<template>
<div class="col-xs-12 col-sm-8 col-sm-offset-2">
<SingleTraining v-for="training in trainings" 
:training="training" @trainingWasChosen="chooseTraining($event)">
</SingleTraining>
<TrainingModal v-if="showModal">
</TrainingModal>
</div>            
</template>

<script>
import SingleTraining from './SingleTraining.vue'
import TrainingModal from './TrainingModal.vue'
import mock from '../mock.js'

export default{
  data(){
    return{
      trainings: mock,
      chosenTraining: {},
      showModal:false
    }
  },
  components: {
    SingleTraining,
    TrainingModal
  },
  methods: {
    chooseTraining(data){
      this.chosenTraining=data
      this.showModal=true
    }
  }
}
</script>