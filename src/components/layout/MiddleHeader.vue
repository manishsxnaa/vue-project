<template>
    <div class="row">
        <div class="col-md-3 col-xs-12 col-lg-3"></div>
        <div class="col-md-6 col-xs-12 col-lg-6">
            <h2 class="Register">{{dataMiddle.title}}</h2>
            <p class="EnterMail">{{dataMiddle.desc}}</p>
        </div>
        <div class="col-md-3 col-xs-12 col-lg-3"></div>
    </div> 
</template>

<script>
export default {
    name: "MiddleHeader",
    props:["dataMiddle"]
}
</script>