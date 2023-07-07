<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'

</script>

<template>
    <whiteNav/>
   <div class="getstated-container">
      
        <div class="getstarted-div-form">
            <form action="" class="getstarted-form">
              <div class="the-images-icon">
                    <svg class="emailimage" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.4" d="M73.3346 53.134C73.3346 62.434 65.868 69.9673 56.568 70.0007H56.5346H23.5013C14.2346 70.0007 6.66797 62.5007 6.66797 53.2007V53.1673C6.66797 53.1673 6.68797 38.414 6.71464 30.994C6.71797 29.6007 8.31797 28.8207 9.40797 29.6873C17.328 35.9707 31.4913 47.4273 31.668 47.5773C34.0346 49.474 37.0346 50.544 40.1013 50.544C43.168 50.544 46.168 49.474 48.5346 47.5407C48.7113 47.424 62.558 36.3107 70.598 29.924C71.6913 29.054 73.298 29.834 73.3013 31.224C73.3346 38.5873 73.3346 53.134 73.3346 53.134" fill="#603F8B"/>
                    <path d="M71.5908 18.912C68.7042 13.472 63.0242 9.99866 56.7708 9.99866H23.5042C17.2508 9.99866 11.5708 13.472 8.68417 18.912C8.0375 20.1287 8.34417 21.6453 9.42084 22.5053L34.1708 42.302C35.9042 43.702 38.0042 44.3987 40.1042 44.3987C40.1175 44.3987 40.1275 44.3987 40.1375 44.3987C40.1475 44.3987 40.1608 44.3987 40.1708 44.3987C42.2708 44.3987 44.3708 43.702 46.1042 42.302L70.8542 22.5053C71.9308 21.6453 72.2375 20.1287 71.5908 18.912" fill="#603F8B"/>
                    </svg>
              </div>
              

                <p class="signup-message2">An OTP has been sent to chioma12198@gmail.com.check your email to get the code.</p>
                <button class="getstarted-btn"><RouterLink to="/otpsendingpage">Next</RouterLink></button>
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
.the-images-icon{
    /* border:2px solid green; */
    width:20%;
    background-color: #F8F3FF;
    border-radius: 70px;
    margin:auto;
}
.emailimage{
    margin:auto;
    width:80%;
    margin-left:10%;
}
.signup-message2{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 20px;
   width:90%;
   text-align: center;
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
.the-images-icon{
    /* border:2px solid green; */
    width:40%;
    background-color: #F8F3FF;
    border-radius: 70px;
    margin:auto;
}
.emailimage{
    margin:auto;
    width:80%;
    margin-left:10%;
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
</style>