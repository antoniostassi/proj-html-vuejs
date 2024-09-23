<script>
    import {store} from '../store';
    export default {
        data(){
            return{
                store,
                currentCarouselImg: 0,
                secondCarouselImg: 1
            }
        },
        methods:{ 
            arrowBackward() {
                if (this.currentCarouselImg == 0) {
                    this.currentCarouselImg = store.ourProducts.length-1
                } else {
                    this.currentCarouselImg--;
                };
                this.getNxtImage();
            },
            arrowForward() {
                if (this.currentCarouselImg == this.store.ourProducts.length-1) {
                    this.currentCarouselImg = 0
                } else {
                    this.currentCarouselImg++;
                };
                this.getNxtImage();
            },
            getNxtImage() {
                if (this.currentCarouselImg === this.store.ourProducts.length-1) {
                    this.secondCarouselImg = 0;
                } else {
                    this.secondCarouselImg = this.currentCarouselImg+1 ;
                }
            }
        }
    }
</script>

<template>
    <section class="our-products pb-5">
        <div class="row">
            <div class="col-5 ps-3">
                <!-- our producs-->
                <span class="serif-regular small-title light-font">OUR PRODUCTS</span>
                <h2 class="serif-bold dark-font mt-3 mb-5">
                    All our delectable pastries are backed fresh in our Kitchen every morning, and are made with all-natural, 
                    all organic ingredients.
                </h2>
                <div class="bakery-btn dark-font serif-regular py-2 px-4 rounded btn-bg-color">
                    Start Shopping
                </div>

            </div>

            <div class="col-7">
                <div class="carousel w-100 d-flex position-relative">
                    <div class="backward-img light-font" @click="arrowBackward()">
                        <i class="fa-solid fa-circle-chevron-left"></i>
                    </div>
                    <div class="forward-img light-font" @click="arrowForward()">
                        <i class="fa-solid fa-circle-chevron-right"></i>
                    </div>
                    <div class="image mx-2" :style="{backgroundImage:`url('/src/assets/images/${store.ourProducts[currentCarouselImg].productImg}')`}">
                        <div class="d-flex align-items-center justify-content-center h-100">
                            <div class="product-description text-center serif-regular p-3 rounded dark-font">
                                <h4 class="m-0">{{ store.ourProducts[currentCarouselImg].productName }}</h4>
                                <p class="m-0">{{ store.ourProducts[currentCarouselImg].productCategory }}</p>
                                <h3 class="m-0">{{ store.ourProducts[currentCarouselImg].productPrice }}</h3>
                            </div>
                        </div>
                    </div>
                    <div class="image mx-2" :style="{backgroundImage:`url('/src/assets/images/${store.ourProducts[secondCarouselImg].productImg}')`}">
                        <div class="d-flex align-items-center justify-content-center h-100">
                            <div class="product-description text-center serif-regular p-3 rounded dark-font">
                                <h4 class="m-0">{{ store.ourProducts[secondCarouselImg].productName }}</h4>
                                <p class="m-0">{{ store.ourProducts[secondCarouselImg].productCategory }}</p>
                                <h3 class="m-0">{{ store.ourProducts[secondCarouselImg].productPrice }}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/components/OurProducts.scss';
</style>
