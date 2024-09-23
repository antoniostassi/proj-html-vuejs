<script>
    export default {
        data(){
            return{
                navbarItems: [
                    "HOME",
                    "SHOP",
                    "ABOUT",
                    "GALLERY",
                    "LOCATIONS",
                    "JOURNAL",
                    "CONTACT",
                    "MY ACCOUNT"
                ],
                currentlyOn:0
            }
        }
    }
</script>

<template>
    <nav>
        <ul class="d-flex justify-content-end pt-3">
            <li v-for="(btn, index) in navbarItems" :key="index" class="px-4" @click="currentlyOn=index">
                <a href="#" class="dark-font serif-regular">{{btn}}</a>
                <div :class="index == currentlyOn ? 'active-page' : 'under-a'"></div>
            </li> <!-- Header list will be here -->
            <li class="me-4 px-2"><a href="#"><i class="fa-solid fa-cart-shopping dark-text"></i></a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/components/NavbarComponent.scss';
</style>
