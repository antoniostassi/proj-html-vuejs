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

        <div class="container-xxl">
            <div class="row">
                <div class="col-3">
                    <img src="/src/assets/images/avada-bakery-logo.png" alt="Logo">
                </div>
                <div class="col-9">
                    <NavbarComponent/>
                </div>
            </div>
        
        </div>
        <!-- Logo + NavBar-->
        
        <!-- First section "The Perfect Fresh Bread"-->
        <section>
            <div class="container-xxl">
                <h2>The Perfect Fresh Bread</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, fugit. Unde asperiores porro natus, dolores magnam quo quas fugiat architecto.</p>
                <button>Explore our products</button>
            </div>
        </section>
    </header>
    
</template>

<style lang="scss" scoped>

</style>
