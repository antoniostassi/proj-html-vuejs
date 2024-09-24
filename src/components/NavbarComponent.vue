<script>
    import {store} from '../store';
    export default {
        data(){
            return{
                currentlyOn:0,
                store
            }
        }
    }
</script>

<template>
    <nav>
        <ul class="d-flex justify-content-end pt-3">
            <li v-for="(link, index) in store.navbarItems" :key="index" class="px-4" @click="currentlyOn=index">
                <a :href="link.linkURL" class="dark-font serif-regular">{{link.linkName.toUpperCase()}}</a>
                <div :class="index == currentlyOn ? 'active-page' : 'under-a'"></div>
            </li> <!-- Header list will be here -->
            <li class="me-4 px-2"><a href="#"><i class="fa-solid fa-cart-shopping dark-text"></i></a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/components/NavbarComponent.scss';
</style>
