<template>
    <div>
        <Header v-bind:data="data" />
        <div class="container">
            <form method="post" action="https://poplme.co" id="EnterEmail">
                <MiddleHeader v-bind:dataMiddle="dataMiddle" />
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <input type="email" required="" id="sEmail" name="sEmail" class="form-control mb-3" placeholder="Email">
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <button type="button" onclick="CheckForm()"  class="btn btn-primary RegisterBtn mb-3"><b>Send 6 digit code</b></button>
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <router-link class="ForgotPasswordURL forgot" style="margin-right: 10px" to="/login">
                            Back to Login
                        </router-link>
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div> 
                <input type="hidden" name="sAction" value="SendResetPasswordCode">            
            </form>
        </div>          
    </div>
</template>

<script>
import Header from "../components/layout/Header.vue";
import MiddleHeader from "../components/layout/MiddleHeader.vue";

export default {
    name: "ForgotPassword",
    data (){
        return {
            data :{
                link: "login",
                title: "Back"
            },
            dataMiddle :{
                title: "Password Recovery",
                desc: "Enter the email address associated with your profile and we will email you a 6 digit code to reset your password!"
            },
        }
    },
    components:{
        Header,
        MiddleHeader
    }
}
</script>