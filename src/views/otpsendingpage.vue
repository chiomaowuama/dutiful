<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'

</script>

<template>
    <whiteNav/>
   <div class="getstated-container">
      
        <div class="getstarted-div-form">
            <form action="" class="getstarted-form-otp">
               
                <div class="otpsendpart">
                    <input type="text" >
                    <input type="text" >
                    <input type="text" >
                    <input type="text" >
                    
                </div>
              

                <p class="signup-message2">Enter OTP code that was sent to your email, segunsolaru@gmail.com. 
.</p>
                <button class="getstarted-btn">Next</button>
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
.getstarted-form-otp{
    /* border:2px solid blue; */
    display:grid;
    gap:1rem;
    width:40%;
    margin:auto;
}
.getstarted-form-otp label{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    /* identical to box height */
    letter-spacing: -0.005em;
    color: #603F8B;
    
}
.getstarted-form-otp input{
    box-sizing: border-box;
    /* width: 486px; */
    height: 60px;
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
.otpsendpart{
    /* border:2px solid green; */
    display:grid;
  align-content: center;
  
    grid-template-columns: repeat(4, 1fr);
}
.otpsendpart input{
    /* border:2px solid yellow; */
    width:70%;
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