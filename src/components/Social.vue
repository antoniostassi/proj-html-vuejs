<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="row social mt-5 pt-5">
        <div class="col-3">
            <div class="first w-100 h-100"></div>
        </div>
        <div class="col-6">
            <div class="panel w-100 h-100 text-center">
                <span class="serif-regular light-font small-title">MADE FOR SHARING</span>
                <h2 class="serif-bold dark-font mt-3">Let's stay in touch</h2>
                <div class="bakery-btn m-auto mt-4 btn-bg-color px-4 py-2 rounded serif-regular"><i class="fa-brands fa-instagram me-2"></i>Follow us</div>
            </div>
        </div>
        <div class="col-3">
            <div class="second w-100 h-100"></div>
        </div>
    </div>

    <div class="row social mt-3">
        <div class="col-3">
            <div class="third w-100 h-100"></div>
        </div>
        <div class="col-3">
            <div class="fourth w-100 h-100"></div>
        </div>
        <div class="col-3">
            <div class="fifth w-100 h-100"></div>
        </div>
        <div class="col-3">
            <div class="sixth w-100 h-100"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    .social > *{
        height:350px;
    }

    .first {
        background-image: url("../assets/images/social-1.jpg");
        background-size:cover;
    }

    .second {
        background-image: url("../assets/images/social-2.jpg");
        background-size:cover;
    }

    .third {
        background-image: url("../assets/images/social-3.jpg");
        background-size:cover;
    }

    .fourth {
        background-image: url("../assets/images/social-4.jpg");
        background-size:cover;
    }

    .fifth {
        background-image: url("../assets/images/social-5.jpg");
        background-size:cover;
    }

    .sixth {
        background-image: url("../assets/images/social-6.jpg");
        background-size:cover;
    }

    .panel {
        background-color: #F3EEF4;
        padding:100px 50px;
        span {
            font-size:0.7rem;
        }
    }

    .bakery-btn {
        transition: all 1s;
        &:hover {
            background-color: white;
            color:$btn-dark-color;
        }
    }

    
</style>
