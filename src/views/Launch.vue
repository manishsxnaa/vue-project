<template>
    <div>
        <div class="PoplPanel">
            <div class="MainContainer text-center">
                <div class="MainCol align-center" style="text-align: left; margin-left: 25px">
                </div>
                <div id="test" onclick="bar()" class="MainCol align-center"><a href="https://poplme.co"><img alt="Popl logo" class="rippllogo" src="../assets/images/poplLogoBlack.png">
               
                </a></div>
                <div class="MainCol">
                    <div class="EditProfilei" style="color: #85c6df; text-align: right; margin-right: 10px;">
                        <a style="padding-left: 10px; margin-right: 11px;" href="https://poplme.co?sAction=Login" class="col-xs-12"><b></b></a>
                    </div>
                </div>
            </div>        
        </div>
        <div class="container">
            <br><br><br>
            <div class="row">
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
                <div class="col-md-6 col-xs-12 col-lg-6">
                    <br><br>
                    <h2 class="Register" style="white-space: nowrap; width: 100%; text-align: center;" >Welcome to Popl 💥</h2>
                    
                </div>
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
            </div>
            <p class="EnterMail">What would you like to do?</p>
            <br>
            <div class="row">
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
                <div class="col-md-6 col-xs-12 col-lg-6" style="text-align: center">
                    <router-link to="/login"  style="margin-top: 1rem;" class="btn btn-primary Login mb-3"><b>Login</b></router-link>
                </div>
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
            </div>
            
            <div class="lines">OR</div>
            <div class="row">
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6" style="text-align: center">
                        <router-link to="/register"  style="margin-top: 1rem;" class="btn btn-primary Join mb-3"><b>Register</b></router-link>
                    </div>
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
            </div>
            <br><br>
            <div class="row">
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
                <div class="col-md-6 col-xs-12 col-lg-6 align-center">
                    
                    <div class="PoweredBy"><strong> <a class="PoweredBy">Patent Pending <i style=" padding-top: 10px;" class="fa fa-check-circle"></i><br></a></strong><a target="_blank" rel="noopener noreferrer" href="https://popl.co" style="color: #000"><hr class="hr" /><strong style="font-size: 18px; padding-left: 4px;">Popl &copy;</strong></a></div> 
                </div>
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
            </div>
        </div>
    </div>    
</template>

<script>
export default {
    name: "Launch"
}
</script>

<style scoped>
@import url('../assets/css/style.css');
</style>