<script>

    import HeaderComponent from './components/HeaderComponent.vue';
    import MainComponent from './components/MainComponent.vue';
    import FooterComponent from './components/FooterComponent.vue';
    import FixedNav from './components/FixedNav.vue';

    export default {
        data(){
            return{
                
            }
        },
        components:{
            HeaderComponent,
            MainComponent,
            FooterComponent,
            FixedNav
        }
    }
</script>

<template>
    <FixedNav/>
    <HeaderComponent/>
    <MainComponent/>
    <FooterComponent/>
</template>

<style lang="scss">

</style>
