<template>
  <div class="modal fade bs-example-modal-sm in" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content" style="padding: 10px; overflow: hidden;">
        <h1>Start</h1>
        <div class="col-xs-8 col-xs-offset-2">
          <div class="panel panel-primary">
            <div class="panel-heading">Zestaw 1</div>
            <div class="panel-body">
              <p>Opis</p>
            </div>
            <div class="list-group">
              <li class="list-group-item">Cwiczenie 1</li>
              <li class="list-group-item">Cwiczenie 2</li>
              <li class="list-group-item">Cwiczenie 3</li>
            </div>
            <button class="btn btn-primary center-block" style="margin-top: 20px; margin-bottom: 20px;">Edytuj</button>
          </div>

          <form class="form-inline col-xs-12" style="margin-bottom: 30px;">
            <h3>Cele</h3>
            <div class="form-group">
              <label class="control-label">Czas</label>
              <input class="form-control" type="text" placeholder="Podaj w minutach"
              v-model="time">
              <p>{{time}}</p>
            </div>
            <div class="form-group">
              <label class="control-label">Ciężar</label>
              <input class="form-control" type="number" placeholder="Podaj ilość w kg"
              v-model="weight">
            </div>
            <p>{{weight}}</p>
          </form>
        </div>
        <div class="col-xs-12">
          <button class="btn btn-primary center-block">Rozpocznij trening</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      'training': Object
    },
    data(){
      return {
        time:'',
        weight:0
      }
    }
  }
</script>