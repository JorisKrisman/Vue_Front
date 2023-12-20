<template>

    <div class="container mt-4">
        <div class="card">
            <div class="card-header">
                <h4>Add Beers</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="name" class="form-label">Name</label>
                    <input type="text" v-model="model.brewer.name" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Brewer</label>
                    <input type="text" v-model="model.brewer.brewer" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="mb-3">
                    <label for="name" class="form-label">Type</label>
                    <input type="text" v-model="model.brewer.type" class="form-control" id="name" placeholder="Name">
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveBeer" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

export default{
    name: 'beersCreate',
    data(){
        return{
          model: {
              name: '',
              brewer: '',
              type: '',
          }
        }
    },
    methods: {
        saveBeer(){
            axios.post('http://localhost:3000/beers', this.model)
            .then((res) => {

                console.log(res.data);
                alert(res.data.message);

                this.model = {
                    name: '',
                    brewer: '',
                    type: '',
                }
            })  
        }
    }
}
</script>