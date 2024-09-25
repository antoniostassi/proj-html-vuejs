<script>
    import {store} from '../store';
    import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
    export default {
        data(){
            return{
                store
            }
        },
        components: {
            Splide,
            SplideSlide,
            SplideTrack
        }
    }
</script>

<template>
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
</template>

<style lang="scss" scoped>
</style>