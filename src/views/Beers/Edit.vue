<template>

    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Edit Beers</h4>
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
import axios from 'axios';

export default{
    name: 'beersCreate',
    data(){
        return{
            beerId: '',
            model: {
                name: '',
                brewer: '',
                type: '',
            }
        }
    },
    mounted() {

        this.beerId = this.$route.params.id;
        this.getBeersData(this.$route.params.id);
    },
    methods: {

        getBeersData(beerId){
            axios.patch(`http://localhost:3000/beers/${this.beerId}/edit`, this.model)
            .then(res => {
                console.log(res.data);

                this.model.beer.name = res.data;
            });
        },

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