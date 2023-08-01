<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import {reactive, computed} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
    email: '',


})
const rules = computed(() => {
    return{
        email:{ required, email },
        
    }
})

const v$ = useValidate( rules, state )
// console.log(state);
// return {state, v$ }
async function signing(v$){
   const signoption = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify(state),
   }
   const requesting = await fetch('https://testapi.dutiful.ng/v2/auth/password/email',  signoption)
   const respondoption = await requesting.json();
   if(  requesting.status == 200){
    alert("User is Registered")
    router.push('/otppage')
   }
   else {
    alert("User not Registered")
   }
}

async function submitForm(){
   const result = await v$.value.$validate()
    if(!v$.value.$error){
        alert("form submiting")
        signing(rules)
       
    }

   else{
        alert("form  fail validation")
    }
}

</script>

<template>
    <whiteNav/>
   <div class="getstated-container">
        <h3 class="started">Forgot password </h3>
        <p class="signup-message1">Enter your email and we'll send you a  meail to reset your password</p>

       
        <div class="getstarted-div-form">
            <form action="" class="getstarted-form"  @submit.prevent="submitForm">
                <label for="" >Email</label>
                <div class="passwordpart">
                    <input type="email" v-model="state.email" >
                    <svg class="eyes" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2666 7.06112L12.0012 10.4954C11.194 11.1283 10.0624 11.1283 9.25518 10.4954L4.95312 7.06112" stroke="#A16AE8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.88787 1.5H15.3158C16.6752 1.51525 17.969 2.08993 18.896 3.0902C19.823 4.09048 20.3022 5.42903 20.222 6.79412V13.322C20.3022 14.6871 19.823 16.0256 18.896 17.0259C17.969 18.0262 16.6752 18.6009 15.3158 18.6161H5.88787C2.96796 18.6161 1 16.2407 1 13.322V6.79412C1 3.87545 2.96796 1.5 5.88787 1.5Z" stroke="#A16AE8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <span v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                </span>
                <div class="getstarted-check">
                    <div>
                    <input type="checkbox" class="the-check">
                    </div>
                    <div class="for-p">
                    <p>I agree to Dutiful's <span class="colored-span">terms and conditions</span></p>
                    </div>
                </div>
                <button class="getstarted-btn">Sign up</button>
                <p class="signing-in">Already have an account? <RouterLink to="/login">Login</RouterLink></p>

            </form>
        </div>
   </div>
    <footerpage/>
</template>
<style>
.getstated-container{
    /* border:2px solid green; */
    padding:5% 0;

}
.signup-message1{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 20px;
   width:40%;
   margin:auto;
   margin-bottom: 3%;
    color: #686868;
}
.started{
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */
    color: #1E1E4B;
    /* text-align: center; */
    width:40%;
    margin:1% auto;
    /* border:2px solid yellow; */
}
/* .buttonsection{
    border:2px solid yellow;
} */
.button-section-inside{
    /* border:2px solid red; */
    width:40%;
    margin:auto;
    display:flex;
    gap:2.5rem
    /* justify-content: center; */
    /* align-content: center; */
}
.botton-section-inside1{
    /* border:2px solid blue; */
    width:30%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px;
    box-sizing: border-box;
    position: relative;
    /* border: 1px solid #603F8B; */
    border-radius: 11px;
}

.botton-section-inside1:hover{
    border: 1px solid #603F8B;
}
.botton-section-inside1 .click{
    border:2px solid green;
    position: absolute;
    width:25%;
    top:-15px;
    left:130px;
   display:none
}
.botton-section-inside1:hover .click{
    border:2px solid yellow;
   display:block;
   border: 1px solid #603F8B;
    
    
}
/* the form part */
/* .getstarted-div-form{
    border:2px solid yellow;
} */
.getstarted-form{
    /* border:2px solid yel/low; */
    display:grid;
    gap:1rem;
    width:40%;
    margin:auto;
}
.getstarted-form label{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */
    letter-spacing: -0.005em;
    color: #603F8B;
    
}
.getstarted-form input{
    box-sizing: border-box;
    width: 486px;
    height: 50px;
    outline: none;
    font-size:20px;
    background: #F8FAFD;
    border: 2px solid #E7EAF1;
    border-radius: 6px;
}
.getstarted-check{
    /* border:2px solid red; */
    padding:0;
    display:grid;
    grid-template-columns: 1fr 11fr;
   
}

.getstarted-check p{
    /* border:2px solid green; */
  margin:3% 0
  
}

.getstarted-check input{
    width:20px;
    /* border:2px solid yellow; */
    /* margin:0px; */
}

.colored-span{
    color: #603F8B;
    font-weight: 700;
}
.getstarted-btn{
    background: #532F82;
box-shadow: 2px 8px 8px rgba(86, 86, 86, 0.25);
border-radius: 6px;
font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 143.02%;
/* identical to box height, or 26px */
border:none;
margin-top:5%;
color: #FFFFFF;
height: 58px;
/* left: 477px; */
/* top: 1065px; */
}
.signing-in{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: -0.005em;
color: #A3B1BF;
}
.signing-in a{
    text-decoration: none;
    color: #603F8B;
    font-weight: 700;
}
.passwordpart{
    /* border:2px solid green; */
    position: relative;
}
.eyes{
    /* border:2px solid yellow; */
    position: absolute;
    width:50px;
    top:18px;
    left:85%;
}
@media screen and (max-width: 900px){
    .getstated-container{
    /* border:2px solid green; */
    padding:5% 0;

}
.signup-message1{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 20px;
   width:65%;
   /* margin:auto; */
   margin-bottom: 3%;
    color: #686868;
}
.signup-message{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 13px;
    line-height: 20px;
   width:70%;
   margin:auto;
    color: #686868;
}
.started{
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 49px;
    /* identical to box height */
    color: #1E1E4B;
    /* text-align: center; */
    width:70%;
    margin:1% auto;
    /* border:2px solid yellow; */
}
/* .buttonsection{
    border:2px solid yellow;
} */
.button-section-inside{
    /* border:2px solid red; */
    width:70%;
    margin:auto;
    display:flex;
    gap:2.5rem
    /* justify-content: center; */
    /* align-content: center; */
}
.botton-section-inside1{
    /* border:2px solid blue; */
    width:50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5px;
    box-sizing: border-box;
    position: relative;
    font-size: 11px;
    /* border: 1px solid #603F8B; */
    border-radius: 11px;
}

.botton-section-inside1:hover{
    border: 1px solid #603F8B;
}
.botton-section-inside1 .click{
    /* border:2px solid green; */
    position: absolute;
    width:25%;
    top:-15px;
    left:130px;
   display:none
}
.botton-section-inside1:hover .click{
    /* border:2px solid yellow; */
   display:block;
   border: 1px solid #603F8B;
    
    
}
/* the form part */
/* .getstarted-div-form{
    border:2px solid yellow;
} */
.getstarted-form{
    /* border:2px solid yellow; */
    display:grid;
    gap:1rem;
    width:70%;
    margin:auto;
}
.getstarted-form label{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 23px;
    /* identical to box height */
    letter-spacing: -0.005em;
    color: #603F8B;
    
}
.getstarted-form input{
    box-sizing: border-box;
    width: 266px;
    height: 50px;
    outline: none;
    font-size:20px;
    background: #F8FAFD;
    border: 2px solid #E7EAF1;
    border-radius: 6px;
}
.getstarted-check{
    /* border:2px solid red; */
    padding:0;
    display:grid;
    grid-template-columns: 1fr 11fr;
   
}

.getstarted-check p{
    /* border:2px solid green; */
  margin:3% 0
  
}

.getstarted-check input{
    width:20px;
    /* border:2px solid yellow; */
    /* margin:0px; */
}

.colored-span{
    color: #603F8B;
    font-weight: 700;
}
.getstarted-btn{
    background: #532F82;
box-shadow: 2px 8px 8px rgba(86, 86, 86, 0.25);
border-radius: 6px;
font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 143.02%;
/* identical to box height, or 26px */
border:none;
margin-top:5%;
color: #FFFFFF;
height: 58px;
/* left: 477px; */
/* top: 1065px; */
}
.signing-in{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 16px;
line-height: 20px;
text-align: center;
letter-spacing: -0.005em;
color: #A3B1BF;
}
.signing-in a{
    text-decoration: none;
    color: #603F8B;
    font-weight: 700;
}
.passwordpart{
    /* border:2px solid green; */
    position: relative;
}
.eyes{
    /* border:2px solid yellow; */
    position: absolute;
    width:50px;
    top:18px;
    left:85%;
}
}
@media screen  and (max-width: 1180px) and (min-width: 768px){
    .signup-message1{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 20px;
   width:65%;
   /* margin:auto; */
   margin-bottom: 3%;
    color: #686868;
}
}
</style>