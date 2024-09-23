<script>
    export default {
        data(){
            return{
                navbarItems: [
                    "Home",
                    "Shop",
                    "About",
                    "Gallery",
                    "Locations",
                    "Journal",
                    "Contact",
                    "My account"
                ]
            }
        }
    }
</script>

<template>
    <nav>
        <ul class="d-flex justify-content-end align-items-center">
            <li v-for="(btn, index) in navbarItems" :key="index" class="px-2"><a href="#">{{btn}}</a></li> <!-- Header list will be here -->
            <li class="me-4"><a href="#"><i class="fa-solid fa-cart-shopping"></i></a></li>
        </ul>
    </nav>
</template>

<style scoped>

</style>
