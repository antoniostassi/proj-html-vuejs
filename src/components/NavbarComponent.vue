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
                ]
            }
        }
    }
</script>

<template>
    <nav>
        <ul class="d-flex justify-content-end pt-3">
            <li v-for="(btn, index) in navbarItems" :key="index" class="px-2"><a href="#" class="dark-text">{{btn}}</a></li> <!-- Header list will be here -->
            <li class="me-4 px-2"><a href="#"><i class="fa-solid fa-cart-shopping dark-text"></i></a></li>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
</style>
