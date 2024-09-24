<script>
    import {store} from '../store';
    export default {
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="container-fluid p-5">
        <div class="row">
            <div class="col-7 px-5">
                <img src="../assets/images/avada-bakery-logo.png" alt="Logo" style="width:130px;">
                <ul class="mt-5 d-flex gap-4 p-0">
                    <li v-for="(link, index) in store.navbarItems"><a :href="link.linkURL" class="light-font serif-regular">{{link.linkName}}</a></li>
                </ul>
            </div>
            <div class="col"></div>
        </div>
        
    </div>
</template>

<style scoped>

</style>
