<script>
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
    import { store } from '../store.js';

    export default {
        data(){
            return{
                store
            }
        },
        components:{
            Splide,
            SplideSlide,
            SplideTrack
        },
        computed:{
            offsetProducts() {
                return 5;
            }
        },
        setup() {
            const options = {
                rewind: true,
                gap   : '1rem',
            };
        return { options };
        }
    }
</script>

<template>
    <section> <!-- Wedding -->
        <div class="text-center">
            <span class="serif-regular small-title light-font">CORPORATE & WEDDINGS</span>
            <h2 class="serif-bold dark-font">Baking Special Moments</h2>
        </div>

        <div class="d-flex mt-5 justify-content-between">
            <div class="my-col-6">
                <img src="../assets/images/corporate-bg.jpg" alt="Corporate">
            </div>
            <div class="my-col-6 position-relative d-flex align-content-end">
                <div id="hover-wedding"></div>
            </div>
        </div>

        <div class="d-flex shop-all">
            <div class="col-3 text-center">
                <h2 class="serif-bold dark-font">Find a freshly baked product perfect for you</h2>
                <p class="m-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consequuntur laborum voluptatum recusandae porro accusamus!</p>
            </div>
            <div class="col-9 ps-5">
                <Splide :has-track="false" aria-label="..." :options="{ autoWidth:true, overflow:true, pagination:false}">
                    <SplideTrack>
                        <SplideSlide v-for="(k, index) in store.ourProducts" :key="index">
                            <img style="width:210px; margin:0 10px" :src="`/src/assets/images/${k.productImg}`" :alt="k.productName" >
                            <p class="text-center serif-bold pt-2 dark-font m-0">{{ k.productName }}</p>
                            <p class="text-center serif-regular dark-font m-0">{{ k.productPrice }}</p>
                        </SplideSlide>
                    </SplideTrack>
                </Splide>
            </div>
        </div>
    </section>
    
    
</template>

<style lang="scss" scoped>
    @import "../assets/scss/components/Weddings.scss";
</style>
