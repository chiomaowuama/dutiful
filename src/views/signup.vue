<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'
import useValidate from '@vuelidate/core'
import { required, alpha,  email, minLength, maxLength, sameAs} from '@vuelidate/validators'
import {reactive, computed} from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const state = reactive({
    text: '',
    email: '',
    number: '',
    password: '',
    confirm: '',
})
const rules = computed(() => {
    return{
        text:{ required, alpha, minLength: minLength(6) },
        email:{ required, email },
        number:{ required,  maxLength: maxLength(11), minLength: minLength(10) },
        password:{required, minLength: minLength(6)},
        confirm:{required, sameAs: sameAs(state.password)},
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
   const requesting = await fetch('https://testapi.dutiful.ng/v2/auth/register',  signoption)
   const respondoption = await requesting.json();
   console.log(requesting);
}

async function submitForm(){
   const result = await v$.value.$validate()
    if(!v$.value.$error){
        alert("form successful")
        signing(rules)
        router.push('/otppage')
    }

   else{
        alert("form  fail validation")
    }
}
</script>

<template>
    <whiteNav/>
   <div class="getstated-container">
        <p class="signup-message"> sign up for free</p>
        <h3 class="started">Get started </h3>
        <div class="buttonsection" >
            <div class="button-section-inside">
                <div class="botton-section-inside1 first">
                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8.57881" cy="5.77803" r="4.77803" stroke="#603F8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00002 17.2014C0.998732 16.8655 1.07385 16.5337 1.2197 16.2311C1.67736 15.3158 2.96798 14.8307 4.03892 14.611C4.81128 14.4462 5.59431 14.336 6.38217 14.2815C7.84084 14.1533 9.30793 14.1533 10.7666 14.2815C11.5544 14.3367 12.3374 14.4468 13.1099 14.611C14.1808 14.8307 15.4714 15.27 15.9291 16.2311C16.2224 16.8479 16.2224 17.564 15.9291 18.1808C15.4714 19.1419 14.1808 19.5812 13.1099 19.7918C12.3384 19.9634 11.5551 20.0766 10.7666 20.1304C9.57937 20.2311 8.38659 20.2494 7.19681 20.1854C6.92221 20.1854 6.65677 20.1854 6.38217 20.1304C5.59663 20.0773 4.81632 19.9641 4.04807 19.7918C2.96798 19.5812 1.68652 19.1419 1.2197 18.1808C1.0746 17.8747 0.999552 17.5401 1.00002 17.2014Z" stroke="#603F8B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Regular user</p>
                    <svg class="click" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="19" cy="19" r="19" fill="#603F8B"/>
                    <path d="M25.7104 14.21C25.6175 14.1163 25.5069 14.0419 25.385 13.9911C25.2632 13.9403 25.1324 13.9142 25.0004 13.9142C24.8684 13.9142 24.7377 13.9403 24.6159 13.9911C24.494 14.0419 24.3834 14.1163 24.2904 14.21L16.8404 21.67L13.7104 18.53C13.6139 18.4368 13.5 18.3634 13.3751 18.3142C13.2503 18.265 13.1169 18.2409 12.9828 18.2432C12.8486 18.2456 12.7162 18.2743 12.5931 18.3278C12.47 18.3813 12.3587 18.4585 12.2654 18.555C12.1722 18.6515 12.0989 18.7655 12.0497 18.8903C12.0005 19.0152 11.9763 19.1485 11.9787 19.2827C11.981 19.4169 12.0097 19.5493 12.0632 19.6723C12.1167 19.7954 12.1939 19.9068 12.2904 20L16.1304 23.84C16.2234 23.9337 16.334 24.0081 16.4559 24.0589C16.5777 24.1097 16.7084 24.1358 16.8404 24.1358C16.9725 24.1358 17.1032 24.1097 17.225 24.0589C17.3469 24.0081 17.4575 23.9337 17.5504 23.84L25.7104 15.68C25.8119 15.5864 25.893 15.4727 25.9484 15.3462C26.0038 15.2197 26.0324 15.0831 26.0324 14.945C26.0324 14.8069 26.0038 14.6703 25.9484 14.5438C25.893 14.4173 25.8119 14.3036 25.7104 14.21Z" fill="white"/>
                    </svg>
                </div>
                <div class="botton-section-inside1 second">
                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_471_1829)">
    <path d="M18.6667 20.5H10.6667V15.1667H9.33333V20.5H5.33333V15.1667H4V20.5C4 20.8536 4.14048 21.1928 4.39052 21.4428C4.64057 21.6929 4.97971 21.8333 5.33333 21.8333H18.6667C19.0203 21.8333 19.3594 21.6929 19.6095 21.4428C19.8595 21.1928 20 20.8536 20 20.5V15.1667H18.6667V20.5Z" fill="#B1BDCA"/>
    <path d="M22.5273 9.34666L19.8073 3.90666C19.6969 3.68452 19.5268 3.49758 19.316 3.36685C19.1052 3.23612 18.862 3.1668 18.614 3.16666H5.38733C5.13927 3.1668 4.89617 3.23612 4.68536 3.36685C4.47454 3.49758 4.30438 3.68452 4.19399 3.90666L1.47399 9.34666C1.38113 9.53299 1.33318 9.73848 1.33399 9.94666V12C1.33339 12.3115 1.44189 12.6134 1.64066 12.8533C1.93443 13.1901 2.29726 13.4597 2.70448 13.6437C3.11171 13.8278 3.55378 13.922 4.00066 13.92C4.72984 13.9211 5.43678 13.669 6.00066 13.2067C6.56453 13.6692 7.27132 13.9221 8.00066 13.9221C8.73 13.9221 9.43679 13.6692 10.0007 13.2067C10.5645 13.6692 11.2713 13.9221 12.0007 13.9221C12.73 13.9221 13.4368 13.6692 14.0007 13.2067C14.5645 13.6692 15.2713 13.9221 16.0007 13.9221C16.73 13.9221 17.4368 13.6692 18.0007 13.2067C18.6301 13.7235 19.4354 13.9761 20.2473 13.9115C21.0591 13.8468 21.8143 13.4699 22.354 12.86C22.5552 12.621 22.6661 12.319 22.6673 12.0067V9.94666C22.6681 9.73848 22.6202 9.53299 22.5273 9.34666ZM10.0007 10.1V11.1133L9.45399 11.8333C9.28618 12.0621 9.06686 12.2481 8.81379 12.3763C8.56072 12.5045 8.28102 12.5713 7.99733 12.5713C7.71364 12.5713 7.43393 12.5045 7.18087 12.3763C6.9278 12.2481 6.70848 12.0621 6.54066 11.8333L6.00066 11.0867V10.1L7.72733 4.5H10.6673L10.0007 10.1ZM18.0007 11.0867L17.4607 11.8333C17.2928 12.0621 17.0735 12.2481 16.8205 12.3763C16.5674 12.5045 16.2877 12.5713 16.004 12.5713C15.7203 12.5713 15.4406 12.5045 15.1875 12.3763C14.9345 12.2481 14.7151 12.0621 14.5473 11.8333L14.0007 11.0867V10.1L13.334 4.5H16.3007L18.0007 10.1V11.0867Z" fill="#B1BDCA"/>
    </g>
    <defs>
    <clipPath id="clip0_471_1829">
    <rect width="24" height="24" fill="white" transform="translate(0 0.5)"/>
    </clipPath>
    </defs>
                    </svg>

                    <p>Service provider</p>
                    <svg class="click twice" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="19" cy="19" r="19" fill="#603F8B"/>
                    <path d="M25.7104 14.21C25.6175 14.1163 25.5069 14.0419 25.385 13.9911C25.2632 13.9403 25.1324 13.9142 25.0004 13.9142C24.8684 13.9142 24.7377 13.9403 24.6159 13.9911C24.494 14.0419 24.3834 14.1163 24.2904 14.21L16.8404 21.67L13.7104 18.53C13.6139 18.4368 13.5 18.3634 13.3751 18.3142C13.2503 18.265 13.1169 18.2409 12.9828 18.2432C12.8486 18.2456 12.7162 18.2743 12.5931 18.3278C12.47 18.3813 12.3587 18.4585 12.2654 18.555C12.1722 18.6515 12.0989 18.7655 12.0497 18.8903C12.0005 19.0152 11.9763 19.1485 11.9787 19.2827C11.981 19.4169 12.0097 19.5493 12.0632 19.6723C12.1167 19.7954 12.1939 19.9068 12.2904 20L16.1304 23.84C16.2234 23.9337 16.334 24.0081 16.4559 24.0589C16.5777 24.1097 16.7084 24.1358 16.8404 24.1358C16.9725 24.1358 17.1032 24.1097 17.225 24.0589C17.3469 24.0081 17.4575 23.9337 17.5504 23.84L25.7104 15.68C25.8119 15.5864 25.893 15.4727 25.9484 15.3462C26.0038 15.2197 26.0324 15.0831 26.0324 14.945C26.0324 14.8069 26.0038 14.6703 25.9484 14.5438C25.893 14.4173 25.8119 14.3036 25.7104 14.21Z" fill="white"/>
                    </svg>
                </div>
            </div>
        </div>
        <div class="getstarted-div-form">
            <form class="getstarted-form" @submit.prevent="submitForm">
                <label for="">Full name</label>
                <input type="text" v-model="state.text">
                <span v-if="v$.text.$error">
                    {{ v$.text.$errors[0].$message }}
                </span>
                <label for="">Email</label>
                <input type="email" v-model="state.email">
                <span v-if="v$.email.$error">
                    {{ v$.email.$errors[0].$message }}
                </span>
                <label for="">Phone number</label>
                <input type="number" v-model="state.number">
                <span v-if="v$.number.$error">
                    {{ v$.number.$errors[0].$message }}
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
                 <label for="">Re-enter password</label>
                 <div class="passwordpart">
                    <input type="password" v-model="state.confirm" >
                    <svg class="eyes" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.2882 0.00481888L10.002 0C5.86108 0 2.12926 2.92308 0.0609149 7.70583C-0.020305 7.89364 -0.020305 8.10636 0.0609149 8.29416L0.204239 8.61679C2.24638 13.0931 5.77544 15.8644 9.71179 15.9952L9.998 16C14.1389 16 17.8707 13.0769 19.9391 8.29416C20.0213 8.10399 20.0202 7.88839 19.9361 7.69904L19.7968 7.38563C17.7497 2.90091 14.2192 0.135466 10.2882 0.00481888ZM10.009 1.48942L10.2479 1.49456L10.5149 1.50845C13.7122 1.73483 16.6525 4.10553 18.429 7.9991L18.4197 8.02313C16.5987 12.0005 13.5569 14.3853 10.2589 14.505L10.004 14.5088L9.74693 14.5053L9.48061 14.4915C6.38271 14.2721 3.52637 12.0344 1.73914 8.3597L1.57 7.9991L1.72658 7.66619C3.61118 3.77314 6.69148 1.49027 10.009 1.48942ZM9.99967 4.11346C7.83927 4.11346 6.08867 5.85313 6.08867 8.0002C6.08867 10.1465 7.83946 11.8859 9.99967 11.8859C12.16 11.8859 13.9117 10.1463 13.9117 8.0002C13.9117 5.85325 12.1602 4.11346 9.99967 4.11346ZM9.9992 5.60378C11.3314 5.60378 12.4112 6.6764 12.4112 8.0002C12.4112 9.32312 11.3313 10.3956 9.9992 10.3956C8.66742 10.3956 7.5882 9.32339 7.5882 8.0002C7.5882 6.67614 8.6673 5.60378 9.9992 5.60378Z" fill="#A16AE8"/>
                    </svg>
                </div>
                <span v-if="v$.confirm.$error">
                    {{ v$.confirm.$errors[0].$message }}
                </span>
                <div class="getstarted-check">
                    <div>
                    <input type="checkbox" class="the-check">
                    </div>
                    <div class="for-p">
                    <p>I agree to Dutiful's <span class="colored-span">terms and conditions</span></p>
                    </div>
                </div>
                <button class="getstarted-btn" type="submit">Sign up</button>
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
    /* border:2px solid red;; */
}
/* .buttonsection{
    border:2px solid yellow;
    width:100%;
} */
.button-section-inside{
    /* border:2px solid red; */
    width:40%;
    margin:auto;
    display:flex;
    gap:2.5rem;
    margin-bottom:-2%;
    /* justify-content: center; */
    /* align-content: center; */
}
.botton-section-inside1{
    /* border:2px solid blue; */
    width:25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 8px;
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
    left:110px;
   display:none
}
.botton-section-inside1:hover .click{
    border:none;
   display:block;
   /* border: 1px solid #603F8B; */
    
    
}
.first:hover{
    padding-top:10px;
    padding-bottom:10px;
}
.second{
    /* border:2px solid green; */
    width:29%;
}
.second:hover .click {
    /* border:2px solid red; */
    /* width:80%; */
    padding:0px 0px;
    left:115px;
    
}

/* the form part */
.getstarted-div-form{
    /* border:2px solid yellow; */
    width:100%;
}
.getstarted-form{
    /* border:2px solid yellow; */
    display:grid;
    gap:1rem;
   
    width:40%;
    margin:auto;
}
.getstarted-form label{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
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
    /* border:2px solid green; */
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
margin-top:0%;
color: #FFFFFF;
height: 58px;
width:91%;
/* border:2px solid green; */
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
    left:80%;
}
@media screen and (max-width: 900px){
    .getstated-container{
    /* border:2px solid green; */
    padding:5% 0;
    padding-top:20%;

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
.buttonsection{
    /* border:2px solid yellow; */
    width:100%;
    /* max-width:fit-content; */
    /* width:100%; */
}
.button-section-inside{
    /* border:2px solid red; */
    width:70%;
    margin:auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:2rem;
    justify-content: center;
    align-content: center;

}
.botton-section-inside1{
    /* border:2px solid blue; */
    width:100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:1rem;
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
    left:90px;
   display:none
}
.botton-section-inside1:hover .click{
    /* border:2px solid yellow; */
   display:block;
   /* border: 1px solid #603F8B; */
    
    
}
.second{
    /* border:2px solid green; */
    width:100%;
    justify-content: center;
    gap:1rem;
}
.second:hover .click {
    /* border:2px solid red; */
    /* width:80%; */
    padding:0px 0px;
    left:95px;
    
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
width:266px;
/* border:2px solid green */
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
    top:20px;
    left:75%;
}
}
@media screen  and (max-width: 1180px) and (min-width: 768px){
    .getstated-container{
    /* border:2px solid blue; */
    padding:5% 0;
    padding-top:15%;

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
    width:65%;
    margin:1% auto;
    /* border:2px solid red; */
}
.signup-message{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 20px;
    line-height: 20px;
   width:65%;
   margin:none;
    color: #686868;
}
    .buttonsection{
    /* border:2px solid yellow; */
    width:100%;
    /* max-width:fit-content; */
    /* width:100%; */
}
.button-section-inside{
    /* border:2px solid red; */
    width:70%;
    margin:auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:2rem;
    justify-content: center;
    align-self: center;
    padding-left:10%;

}
.botton-section-inside1{
    /* border:2px solid blue; */
    width:70%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:1rem;
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
    left:140px;
   display:none;
}
.botton-section-inside1:hover .click{
    /* border:2px solid yellow; */
   display:block;
   /* border: 1px solid #603F8B; */
    
    
}
.second{
    /* border:2px solid green; */
    width:70%;
    justify-content: center;
    gap:1rem;
}
.second:hover .click {
    /* border:2px solid red; */
    /* width:80%; */
    padding:0px 0px;
    left:150px;
    
}



/* the form part */

.getstarted-form{
    /* border:2px solid yellow; */
    display:grid;
    gap:1rem;
    width:65%;
    margin:auto;
}
.getstarted-form label{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    /* identical to box height */
    letter-spacing: -0.005em;
    color: #603F8B;
    
}
.getstarted-form input{
    box-sizing: border-box;
    width: 500px;
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
width: 500px;
/* border:2px solid green */
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
    width: 466px;
    position: relative;
}
.eyes{
    /* border:2px solid yellow; */
    position: absolute;
    width:50px;
    top:20px;
    left:90%;
}


}
</style>