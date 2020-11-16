<template>
    <div>
        <Header v-bind:data="data" />  
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
                <div class="col-md-6 col-xs-12 col-lg-6">
                    <h2 class="Info">Privacy Policy</h2>
                    <br>
                    <div class="row">
                        <div class="col-md-12 col-xs-12 col-lg-12">
                            <p class="proxima-nova" style="text-align: center;">Privacy Policy

                                Agreement between User and poplme.co
                                <br><br>
                                Welcome to poplme.co. The poplme.co website (the "Site") is comprised of various
                                web pages operated by Popl Co ("Popl"). poplme.co is offered to you conditioned on your
                                acceptance without modification of the terms, conditions, and notices contained herein (the
                                "Terms"). Your use of poplme.co constitutes your agreement to all such Terms. Please read
                                these terms carefully, and keep a copy of them for your reference.

                                poplme.co is a Social Networking Site.

                                This website will hold public user profiles that are shared with others in a social media fashion.
                                Users will be able to search for profiles by name. Nothing on this website is for sale at the
                                moment.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3 col-xs-12 col-lg-3"></div>
            </div>
        </div>    
    </div>    
</template>

<script>
import Header from "../components/layout/Header.vue";

export default {
    name: "PrivacyPolicy",
    data (){
        return {
            data :{
                link: "register",
                title: "Back"
            }
        }
    },
    components:{
        Header
    }
}
</script>