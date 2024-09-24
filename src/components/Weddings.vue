<script>
    import ShoppingProducts from './ShoppingProducts.vue';
    export default {
        data(){
            return{
            }
        },
        components:{
            ShoppingProducts
        }
    }
</script>

<template>
    <section class="mt-5"> <!-- Wedding -->
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

        <ShoppingProducts/>
        
    </section>
    
    
</template>

<style lang="scss" scoped>
    @import "../assets/scss/components/Weddings.scss";
</style>
