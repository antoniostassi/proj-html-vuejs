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
                <ul class="mt-5 d-flex gap-4 p-0 mb-5">
                    <li v-for="(link, index) in store.navbarItems"><a :href="link.linkURL" class="light-font serif-regular">{{link.linkName}}</a></li>
                    <li class="me-4 px-2"><a href="#"><i class="fa-solid fa-cart-shopping dark-font"></i></a></li>   
                </ul>
                <span class="serif-regular small-title gray-font copytext">&copy Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by Wordpress</span>
            </div>
            <div class="col text-right">
                <h2 class="dark-font serif-bold">Subscribe to our Newsletter</h2>
                <form class="d-flex mt-5">
                    <input type="email" placeholder="Enter email address*" class="ps-3" style="border:1px solid black;" required>
                    <div class="bakery-btn btn-bg-color px-3 py-2 serif-regular ms-1" type="submit">Subscribe</div>
                </form>
                
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    .bakery-btn {
        border: 1px solid white;
        transition: all 1s;
        &:hover {
        background-color: white;
        color:$btn-dark-color;
        border: 1px solid $btn-dark-color;
    }
    }
    
</style>
