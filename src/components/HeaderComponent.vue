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
                <div class="container-xxl border">
                    <div class="description">
                        <span>FRESH & TASTY BAKERY EVERY DAY</span>
                        <h2>The Perfect Fresh <br>Bread</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit. Unde asperiores porro natus, dolores magnam quo quas fugiat architecto.</p>
                        <button>Explore our products</button>
                    </div>
                </div>

                
            </section>
        </div>
        
        
    </header>
    
</template>

<style lang="scss" scoped>
    img {
        width:180px;
        margin-left:20px;
    }
    .container-fluid {
        background-image: url("/src/assets/images/hero-header-bakery.jpg");
        background-size: cover;
        background-position:center;
        height: 800px;
    }
    section > .container-xxl {
        margin-top:70px;
    }

</style>
