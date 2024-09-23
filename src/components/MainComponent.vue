<script>
import OurProducts from './OurProducts.vue';
import Weddings from './Weddings.vue';

    export default {
        data(){
            return{

            }
        },
        components:{
            OurProducts,
            Weddings
        }
    }
</script>

<template>
    <main>
        <div class="container-xxl">

            <!-- Our Products Section -->
            <OurProducts/>
            <Weddings/>
            
            
            <section> <!-- Biscuits Prices -->
                <div class="row">
                    <div class="col-4 text-center">
                        <h2>Find a freshly baked product perfect for you</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, cupiditate?</p>
                        <button>Shop All Products</button>
                    </div>
                    <div class="col-8">
                        <div class="carousel four-img">
                            <!-- shop carousel -->
                        </div>
                    </div>
                </div>
            </section>
            
            <section> <!-- big images section -->

            </section>

            <section> <!-- stores locations -->

            </section>

            <section> <!-- social images -->

            </section>

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
