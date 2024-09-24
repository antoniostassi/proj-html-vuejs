<script>
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
            Social
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
        
        <section> <!-- Last section -->
            <div class="big-bg">
                <div class="container">
                    <span>TRY OUR SEASONAL PRODUCTS</span>
                    <h2>Order for pick-up or delivery to your home</h2>
                    <button>Shop Now</button>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>

</style>
