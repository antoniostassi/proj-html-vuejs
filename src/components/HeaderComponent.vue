<script>
import NavbarComponent from './NavbarComponent.vue';

    export default {
        data(){
            return{

            }
        },
        components:{
            NavbarComponent
        }
    }
</script>

<template>

    <header>

        <div class="container-fluid pt-2">
            <div class="row align-items-center">
                <!-- Logo + NavBar-->
                <div class="col-3">
                    <img src="/src/assets/images/avada-bakery-logo.png" alt="Logo" class="px-2">
                </div>
                <div class="col-9">
                    <NavbarComponent/>
                </div>
            </div>

                <!-- First section "The Perfect Fresh Bread"-->
            <section>
                <div class="container-xxl">
                    <div class="description">
                        <span class="light-font serif-regular">FRESH & TASTY BAKERY EVERY DAY</span>
                        <h2 class="dark-font serif-bold mt-2 mb-4">The Perfect Fresh Bread</h2>
                        <p class="subtitle-font serif-regular mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit. Unde asperiores porro natus, dolores magnam quo quas fugiat architecto.</p>
                        <button class="light-font serif-regular py-2 px-3 border-0 rounded bg-white">Explore our products</button>
                    </div>
                </div>

                
            </section>
        </div>
        
        
    </header>
    
</template>

<style lang="scss" scoped>
    @use "../assets/scss/components/HeaderComponent.scss";
    
</style>
