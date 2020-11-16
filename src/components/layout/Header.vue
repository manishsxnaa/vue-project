<template>
    <div>
        <div class="PoplPanel">
            <div class="MainContainer text-center">
                <div class="MainCol align-center" style="text-align: left; margin-left: 25px">
                </div>
                <div id="test"  class="MainCol align-center">
                        <router-link to="/">
                        <img alt="Popl logo" class="rippllogo" src="../../assets/images/poplLogoBlack.png">
                    </router-link>
                </div>
                <div class="MainCol">
                    <div class="EditProfilei" style="color: #85c6df; text-align: right; margin-right: 10px;">
                        <router-link class="LogoutProfile" style="margin-right: 10px" :to="data.link">
                            <b>{{data.title}}</b>
                        </router-link>
                    </div>
                </div>
            </div>        
        </div><br><br><br>
    </div>
</template>

<script>
export default {
    name: "Header",
    props:["data"]
}
</script>