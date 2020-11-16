<template>
    <div>
        <Header v-bind:data="data" />
        <div class="MainContainer">
        </div>
        <form  @submit.prevent="login">        
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6">
                        <div class="row">
                            <div class="col-md-3 col-xs-12 col-lg-3"></div>
                            <div class="col-md-6 col-xs-12 col-lg-6">
                                <div class="alert" v-show="isShow"  v-bind:class="alertClass"  role="alert">
                                {{alertMsg}}
                                </div>
                            </div>
                        </div> 
                        <h2 class="LoginTitle">Welcome Back!</h2>
                        <p class="LoginInfo proxima-nova">Enter your email and password to login to your Popl profile</p>
                            
                        <div class="row">
                            <div class="col-md-12 col-xs-12 col-lg-12">
                                <input type="email" name="email" class="form-control mb-3" placeholder="Email" v-model="email" required>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-12 col-lg-12">
                                <input type="password" name="password" class="form-control mb-3" placeholder="Create password" v-model="password" required>
                            </div>
                        </div>
                        <input type="hidden" name="sAction" value="Auth">
                        <div class="row">
                            <div class="col-md-12 col-xs-12 col-lg-12">
                                <button  href="https://poplme.co?sAction=Register" class="btn btn-primary RegisterBtn RegBtnClicked"><b>Login</b></button>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-3 col-xs-12 col-lg-3"></div>
                            <div class="col-md-6 col-xs-12 col-lg-6">
                                <router-link class="ForgotPasswordURL forgot" to="/forgot-password">
                                    Forgot Password?
                                </router-link>
                            </div>
                            <div class="col-md-3 col-xs-12 col-lg-3"></div>
                        </div> 
                            
                        <br>
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                        <div class="col-md-6 col-xs-12 col-lg-6">
                            <router-link class="btn btn-primary LoginBtn mb-3" to="/register">
                                <b>Don't have a profile? Join here</b>
                            </router-link>
                        </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
                <br>
                <div class="row">
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                    <div class="col-md-6 col-xs-12 col-lg-6 align-center">
                        <div class="PoweredBy"><strong> <a  class="PoweredBy">Patent Pending <i style="padding-top: 4px;" class="fa fa-check-circle"></i><br></a></strong></div> 
                    </div>
                    <div class="col-md-3 col-xs-12 col-lg-3"></div>
                </div>
            </div> 
        </form>
    </div>       
</template>

<script>
import Header from "../components/layout/Header.vue";
import axios from 'axios';

export default {
    name: "Login",
    data (){
        return {
            data :{
                link: "register",
                title: "Join"
            },
            email:'',
            password:'',
            isShow: false,
            alertClass: '',
            alertMsg: ''
        }
    },
    components:{
        Header
    },
    methods: {
        login(e){
            e.preventDefault();
            let newUser = {
                email: this.email,
                password: this.password
            };
            newUser = JSON.stringify(newUser);
            axios({
                method: 'POST',
                url: 'http://localhost:3000/users/login',
                responseType: 'json',
                data: newUser,
                headers: {'Content-Type': 'application/json'}
            })
            .then((data) => {
                this.isShow = true;
                this.alertClass = "alert-success";
                this.alertMsg = "You have successfully logged in.";
                
                this.email = '';
                this.password = '';
                this.$router.push('my-account');
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