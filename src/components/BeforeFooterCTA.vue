<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<template>

    <div class="container-fluid cta-bg">
        <div class="container-xxl">
            <span class="serif-regular small-title text-white">TRY OUR SEASONAL PRODUCTS</span>
            <h2 class="serif-bold text-white mt-3 pb-4">Order for pick-up or delivery to <br>your home</h2>
            <div class="bakery-btn serif-regular dark-font px-4 py-2 rounded mt-4">Shop Now</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    .cta-bg {
        max-height:450px;
        background-image: url('../assets/images/call-to-action-bg.jpg');
        background-size:cover;
        margin-top:110px;

        .container-xxl {
            padding: 120px;

            .small-title {
                font-size:0.7rem;
            }

            .bakery-btn {
                background-color: white;
                transition:all 1s;
                &:hover {
                    background-color:$btn-dark-color;
                    color:white;
                }
            }

        }

    }
</style>
