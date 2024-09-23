<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>

<template>
    <div class="buttons position-fixed">
        <div class="bakery-btn text-center btn-fixed border rounded p-2 mb-1">
            <i class="fa-solid fa-book"></i>
            <p class="p-0 m-0">Demos</p>
        </div>
        <div class="bakery-btn text-center btn-fixed border rounded p-2">
            <i class="fa-solid fa-dollar-sign" style="color:#65BC7B; font-size:0.7rem;">
                <span style="font-size:1.1rem;" class="serif-bold" >39</span>
            </i>
            <p class="p-0 m-0">On Sale</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .buttons {
        top:100px;
        right:50px;

        p {
            font-size:0.7rem;
        }

    }
</style>
