<template>
    <div>
        <Header v-bind:data="data" />
        <div class="container">            
            <div class="row">
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
                <div class="col-md-6 col-xs-12 col-lg-6">  
                </div>
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
            </div>
            <form @submit.prevent="register">  
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <div class="alert" v-show="isShow"  v-bind:class="alertClass"  role="alert">
                        {{alertMsg}}
                        </div>
                    </div>
                </div> 
                <MiddleHeader v-bind:dataMiddle="dataMiddle" />
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <input onkeypress='return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))' type="text" name="name" class="form-control mb-3" placeholder="Username" v-model="name" required>
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>    
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <input type="email" name="email" class="form-control mb-3" placeholder="Email" v-model="email" required>
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <input type="password" name="password" class="form-control mb-3" placeholder="Create password" v-model="password" required>
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <button type="submit" class="btn btn-primary RegisterBtn mb-3"><b>Create profile</b></button>
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <p class="bl" style="text-align: center; font-size: 12px; margin-top: -10px">
                            By registering, you agree to our 
                            <router-link class="forgot" to="/terms">
                                Terms
                            </router-link>
                            and 
                            <router-link class="forgot" to="/privacy-policy">
                                Privacy Policy
                            </router-link>
                            </p> 
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                        <div class="col-md-6 col-xs-12 col-lg-6">
                            <router-link class="btn btn-primary LoginBtn mb-3" to="/login">
                            <b>Already set up? Log in here</b>
                        </router-link>
                        </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6 align-center">
                        
                        <div class="PoweredBy"><strong> <a class="PoweredBy">Patent Pending <i style="padding-top: 4px;" class="fa fa-check-circle"></i><br></a></strong></div> 
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <input type="hidden" name="sAction" value="SaveMember">  
            </form> 
        </div>
    </div>    
</template>

<script>
import Header from "../components/layout/Header.vue";
import MiddleHeader from "../components/layout/MiddleHeader.vue";
import axios from 'axios';

export default {
    name: "Register",
    data (){
        return {
            data :{
                link: "login",
                title: "Back"
            },
            dataMiddle :{
                title: "Set up your Popl!",
                desc: "Enter your information below to set up your Popl"
            },
            name:'',
            email:'',
            password:'',
            isShow: false,
            alertClass: '',
            alertMsg: ''
        }
    },
    components:{
        Header,
        MiddleHeader
    },
    methods: {
        register(e){
            e.preventDefault();
            let newUser = {
                name: this.name,
                email: this.email,
                password: this.password
            };
            newUser = JSON.stringify(newUser);
            axios({
                method: 'POST',
                url: 'http://localhost:3000/users/register',
                responseType: 'json',
                data: newUser,
                headers: {'Content-Type': 'application/json'}
            })
            .then((data) => {
                this.isShow = true;
                this.alertClass = "alert-success";
                this.alertMsg = "You have successfully register in our platform. please login now.";

                this.name = '';
                this.email = '';
                this.password = '';
            })
            .catch((error) => {
                let {data} = error.response;
                this.isShow = true;
                this.alertClass = "alert-danger";
                this.alertMsg = data.msg;
            });
        }
    }
}
</script>