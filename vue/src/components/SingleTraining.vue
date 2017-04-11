<template>
<div class="col-xs-6">
              <div class="panel panel-primary">
                <div class="panel-heading">{{training.name}}</div>
                <div class="panel-body">
                  <p>{{training.description}}</p>
                  <button class="btn btn-primary center-block" @click="chooseTraining">Wybierz</button>
                </div>
              </div>
            </div>
</template>

<script>
export default {
  props: ['training'],
  methods: {
    chooseTraining(){
      this.$emit('trainingWasChosen', this.training)
    }
  }
}
</script>