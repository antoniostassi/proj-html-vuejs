<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<template>

    <section style="margin-top:120px;">
        <div class="jumbotron step-one w-100">
            <div class="backdrop-fx text-white">
                <div class="row">
                    <div class="col-6">
                        <h2 class="serif-bold">Tell us what you have in <br>mind</h2>
                    </div>
                    <div class="col-6">
                        <h2 class="serif-regular text-end">01</h2>
                        <div class="desc">
                            <span class="serif-regular small-title">MANUAL INGREDIENTS SELECTION</span>
                            <p class="serif-regular mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat debitis praesentium itaque et nisi, doloremque, voluptate id deleniti voluptatibus rerum consequuntur ab dolor amet odio nulla laudantium illo cumque incidunt? Recusandae aspernatur corporis praesentium maiores totam doloremque tenetur quam?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-6">
                <div class="step-two w-100">
                    <div class="backdrop-fx text-white">
                        <div class="row">
                            <div class="col-9">
                                <h2 class="serif-bold">We Start Baking</h2>
                                <div class="desc">
                                    <span class="serif-regular small-title">SWEET & DELICIOUS</span>
                                    <p class="serif-regular mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse fugiat debitis praesentium itaque et nisi, doloremque, voluptate id deleniti voluptatibus rerum consequuntur ab dolor amet odio nulla laudantium illo cumque incidunt? Recusandae aspernatur corporis praesentium maiores totam doloremque tenetur quam?</p>
                                </div>
                            </div>
                            <div class="col-3">
                                <h2 class="serif-regular text-end">02</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <!-- insert here --> 
            </div>
        </div>
        
    </section>
    
</template>

<style lang="scss" scoped>

    @import '../assets/scss/mixins.scss';
    .jumbotron.step-one {
        height:600px;
        background-image:url('../assets/images/bakery-process-1.jpg');
        background-size:cover;

        .backdrop-fx {
            @include bg-backdrop;
            padding:40px;

            h2.serif-bold {
                padding-top:20px;
                padding-left:30px;
                font-size:2.7rem;
            }

            h2.text-end {
                font-size:5rem;
                padding-right:40px;
            }

            .desc {
                margin-top:38%;
            }
        }
    }

    .step-two {
        height:600px;
        background-image: url('../assets/images/bakery-process-2.jpg');
        background-size:cover;
        background-position:right;

        .backdrop-fx {
            @include bg-backdrop;
            padding:40px;
        }

        h2.serif-bold {
            margin-top:18px;
            font-size: 2.5rem;
            padding-left:10px;
        }

        h2.serif-regular.text-end {
            font-size:5rem;
            padding-left:10px;
        }

        .desc {
            margin-top:60%;
        }
    }
    
    
</style>
