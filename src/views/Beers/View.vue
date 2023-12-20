
import { RouterLink } from 'vue-router';
<template>
    <div>
        <div class="card">
            <div class="card-header">
                <h4>
                    Beers
                    <RouterLink to="/beers/create" class="btn btn-primary btn-sm float-end">
                        Add Beer
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Brewer</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.beers.length > 0">
                        <tr v-for="(beer, index) in this.beers" :key="index">
                            <td>{{ beer.id }}</td>
                            <td>{{ beer.naam }}</td>
                            <td>{{ beer.brouwer }}</td>
                            <td>{{ beer.type }}</td>
                            <td>
                                <RouterLink :to="{ path: '/beers/'+beer.id+'/edit'}" class="btn btn-success me-2">
                                    Edit
                                </RouterLink>
                                <button type="button" @click="deleteBeer(beer.id)" class="btn btn-danger">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                    <tbody v-else>
                        <tr>
                            <td colspan="4">Loading...</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
import { RouterLink } from 'vue-router';

    export default {
    name: 'beers',
    data() {
        return {
            beers: [],
        };
    },
    mounted() {
        this.getBeers();
    },
    methods: {
        getBeers() {
            axios.get("https://15euros.nl/api/bier_basic.php").then(res => {
                this.beers = res.data;
                //console.log(this.beers);
            });
        },

        deleteBeer(beerId) {
            
            if(confirm('Are you sure?')){
                axios.delete(`https://15euros.nl/api/bier_basic.php?id=${beerId}`)
                .then(res => {
                    console.log(res.data);
                    this.getBeers();
                });
            }
        }
    },
    components: { RouterLink }
}
</script> 

