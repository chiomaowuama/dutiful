<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'
import useValidate from '@vuelidate/core'
import { required, email, minLength} from '@vuelidate/validators'
import {reactive, computed} from 'vue'
import { useRouter } from 'vue-router'




const router = useRouter()
const state = reactive({
    email: '',
    password: '',

})
const rules = computed(() => {
    return{
        email:{ required, email },
        password:{required, minLength: minLength(6)},
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
   const requesting = await fetch('https://testapi.dutiful.ng/v2/auth/login',  signoption)
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
        <p class="signup-message"> jump right back in</p>
        <h3 class="started1">Login </h3>
        
        <div class="getstarted-div-form">
            <form action="" class="getstarted-form"  @submit.prevent="submitForm">
                
                <label for="">Email</label>
                <input type="email" v-model="state.email">
                <span v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                </span>
                <label for="" >Password</label>
                <div class="passwordpart">
                    <input type="password" v-model="state.password">
                    <svg class="eyes" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2882 0.00481888L10.002 0C5.86108 0 2.12926 2.92308 0.0609149 7.70583C-0.020305 7.89364 -0.020305 8.10636 0.0609149 8.29416L0.204239 8.61679C2.24638 13.0931 5.77544 15.8644 9.71179 15.9952L9.998 16C14.1389 16 17.8707 13.0769 19.9391 8.29416C20.0213 8.10399 20.0202 7.88839 19.9361 7.69904L19.7968 7.38563C17.7497 2.90091 14.2192 0.135466 10.2882 0.00481888ZM10.009 1.48942L10.2479 1.49456L10.5149 1.50845C13.7122 1.73483 16.6525 4.10553 18.429 7.9991L18.4197 8.02313C16.5987 12.0005 13.5569 14.3853 10.2589 14.505L10.004 14.5088L9.74693 14.5053L9.48061 14.4915C6.38271 14.2721 3.52637 12.0344 1.73914 8.3597L1.57 7.9991L1.72658 7.66619C3.61118 3.77314 6.69148 1.49027 10.009 1.48942ZM9.99967 4.11346C7.83927 4.11346 6.08867 5.85313 6.08867 8.0002C6.08867 10.1465 7.83946 11.8859 9.99967 11.8859C12.16 11.8859 13.9117 10.1463 13.9117 8.0002C13.9117 5.85325 12.1602 4.11346 9.99967 4.11346ZM9.9992 5.60378C11.3314 5.60378 12.4112 6.6764 12.4112 8.0002C12.4112 9.32312 11.3313 10.3956 9.9992 10.3956C8.66742 10.3956 7.5882 9.32339 7.5882 8.0002C7.5882 6.67614 8.6673 5.60378 9.9992 5.60378Z" fill="#A16AE8"/>
                    </svg>
                </div>
                <span v-if="v$.password.$error">
                    {{ v$.password.$errors[0].$message }}
                </span>
                <div class="logiin-forgetpassword">
                    <div class="for-p2">
                    <p> <span class="colored-span"><RouterLink to="/forgotpassword">forgot password ?</RouterLink></span></p>
                    </div>
                </div>
                <button class="getstarted-btn" type="submit">login</button>
                <p class="signing-in">Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></p>

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
.signup-message{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 20px;
   width:40%;
   margin:auto;
    color: #686868;
    padding-top:3%;
}
.started1{
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
    margin-bottom: -3%;
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
    font-size: 16spx;
    line-height: 23px;
    /* identical to box height */
    letter-spacing: -0.005em;
    color: #603F8B;
    
}
.getstarted-form input{
    box-sizing: border-box;
    width: 456px;
    height: 40px;
    outline: none;
    font-size:20px;
    background: #F8FAFD;
    border: 2px solid #E7EAF1;
    border-radius: 6px;
}
.logiin-forgetpassword{
  /* border:2px solid green; */
  width:90%;
    padding:0;
    display:flex;
    
    justify-content:end;
    align-content: end;
    background-color: white;
   
}

.getstarted-check p{
    /* border:2px solid green; */
  margin:3% 0;
  
}

.getstarted-check input{
    width:20px;
    /* border:2px solid yellow; */
    /* margin:0px; */
}

.colored-span{
    color: #603F8B;
    font-weight: 700;
    background-color: white;
    /* border:2px solid yellow; */
}
.colored-span a {
    background-color: white;
    color: #603F8B;
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
width:97%;
margin-top:5%;
color: #FFFFFF;
height: 58px;
/* left: 477px; */
/* top: 1065px; */
}
.getstarted-btn a{
    color: #FFFFFF;
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
.signing-in a:hover{
    background-color: white;
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
.for-p2 p{
    background-color: white;

}
@media screen and (max-width: 900px){
    .getstated-container{
    /* border:2px solid green; */
    padding:5% 0;

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
.started1{
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
    .logiin-forgetpassword{
  /* border:2px solid green; */
  width:500px;
    padding:0;
    display:flex; 
    justify-content:end;
    align-content: end;
    background-color: white;
    font-size:20px;
   
}   
.started1{
    /* border:2px solid red; */
    width:65%;
}
}
</style>