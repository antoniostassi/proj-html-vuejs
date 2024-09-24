<script>
import BeforeFooterCTA from './BeforeFooterCTA.vue';
import Jumbotrons from './Jumbotrons.vue';
import Locations from './Locations.vue';
import OurProducts from './OurProducts.vue';
import Social from './Social.vue';
import Weddings from './Weddings.vue';

    export default {
        data(){
            return{

            }
        },
        components:{
            OurProducts,
            Weddings,
            Jumbotrons,
            Locations,
            Social,
            BeforeFooterCTA
        }
    }
</script>

<template>
    <main>
        <div class="container-xxl">
            <!-- Our Products Section -->
            <OurProducts/>
            <Weddings/>
            <Jumbotrons/>
            <Locations/>
            <Social/>
        </div>

        <BeforeFooterCTA/>

    </main>
</template>

<style lang="scss" scoped>

</style>
