<script setup>
import Popup from '@/components/popup.vue';
import footerpage from '@/components/footerpage.vue';
import whiteNav from '@/components/whiteNav.vue';
import { ref} from 'vue'


const popupTriggers = ref({
  buttonTrigger: false,
  timedTrigger: false,
});

const TogglePopup = (trigger) => {
  popupTriggers.value[trigger] = !popupTriggers.value[trigger];
};


</script>

<template>
    <whiteNav/>
          
    <div class="promoting-detiful-sections">
        <div class="first-promoting-dutiful">
            <h3>Enjoy a passive income stream</h3>
            <p>Are you interested in making money with Dutiful? It's really simple. Earn up to 10% commission on every sale made on the Dutiful's standard and premium plans. Simply promote Dutiful on your website, blog, Facebook, Instagram, Twitter, and other social media platforms.</p>
        </div>
        <div class="second-promoting-dutiful">
            <div class="second-promoting-dutiful-img">
                <div class="the-image-dutiful">
                    <img src="@/assets/trumphetandimages.png" alt="">
                </div>

            </div>
            <div class="second-promoting-dutiful-text">
                <h3 class="firsth3">Why Promote Dutiful?</h3>
                <p>Dutiful is the fastest growing business or service listing platform in Nigeria with massive potential of becoming the biggest marketplace to find service providers and businesses. It is more than a business directory...user friendly, can be downloaded from Google Play for your convenience, properly managed and much more.</p>
                <p>It is more than a business directory...user friendly, can be downloaded from Google Play for your convenience, properly managed and much more.</p>
                <p>Dutiful provides the best support that no business directory platform offers its users in the market.</p>
                <p>Ready to build more wealth?</p>
                <button @click="() => TogglePopup('buttonTrigger')">Join out affiliate progerm</button>

              <Popup v-if="popupTriggers.buttonTrigger" 
			    :TogglePopup="() => TogglePopup('buttonTrigger')">
                <div class="dutifulhead">
                <h3 class="little-popup-h3">Join Affiliate Program</h3>
                <svg width="38"  height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.00098 36.9988L36.9997 0.999992" stroke="#603F8B" stroke-width="2.67947"/>
                <path d="M36.999 36.9988L1.00025 0.999995" stroke="#603F8B" stroke-width="2.67947"/>
                </svg>

                </div>
                <form action="" class="little-popup">
                    <label for="">Full name</label>
                    <input type="email" class="little-popup-input">
                    <label for="">Email</label>
                    <input type="email"  class="little-popup-input">
                    <label for="">Website url</label>
                    <div class="select-dutiful">
                        <div class="select-dutiful-option">
                            <p>Instagram</p>
                            <svg width="12px" height="12px" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6673 0.66671L6.00065 5.33338L1.33398 0.66671" stroke="#200E32" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div class="select-dutiful-input">
                            <p>Enter instagram URL</p>
                        </div>
                    </div>
                    <label for="">platform statistics (such as number of followers,etc)</label>
                    <input type="text"  class="little-popup-input">
                    <div class="dutiful-another">
                        <p>Add another platform</p>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 0V14" stroke="#603F8B" stroke-width="2"/>
<path d="M14 7L2.98023e-07 7" stroke="#603F8B" stroke-width="2"/>
                        </svg>
                    </div>
                    <label for="">How do you intend to promote Dutiful</label>
                    <input type="text" class="last-dutiful">
                </form>
              </Popup>
            </div>
        </div>
    </div>
    <footerpage/>
</template>
<style>
/* .promoting-detiful-sections{
 border:2px solid green;
} */
.first-promoting-dutiful{
    /* border:2px solid yellow; */
    padding-top:5%;
}
.first-promoting-dutiful h3{
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */
    text-align: center;
    color: #1E1E4B;
}
.first-promoting-dutiful p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 143.02%;
/* or 29px */
text-align: center;
color: #656565;
width:70%;
margin:auto;


}
/* the second section */
.second-promoting-dutiful{
    /* border:2px solid blue; */
    display:grid;
    padding:3%;
    margin:10% 0;
    grid-template-columns: 1fr 1fr;
}
/* .second-promoting-dutiful-img{
    border:2px solid yellow;
    width:90%;
    background: #603F8B;
    border-radius: 14px;
} */
.the-image-dutiful{
    /* border:2px solid blue; */
    background: #603F8B;
    border-radius: 14px;
    width:80%;
    margin:auto;
    height:430px;
    position:relative;
}
.second-promoting-dutiful-img  img{
    /* border:2px solid green; */
    width:100%;
    /* height:350px; */
    left:-40px;
    position:absolute;

}
/* .second-promoting-dutiful-text{
    border:2px solid brown;
} */
.second-promoting-dutiful-text .firsth3{
    /* border:2px solid brown; */
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 143.02%;
    /* or 51px */
    color: #1E1E4B;
    margin-bottom:5% ;
}
.second-promoting-dutiful-text p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 18px;
line-height: 143.02%;
/* or 29px */
color: #656565;
}
.second-promoting-dutiful-text button{
    background: #532F82;
    border:none;
    box-shadow: 2px 8px 8px rgba(86, 86, 86, 0.25);
    border-radius: 6px;
    margin-top:5%;
    margin-bottom:1%;
    padding:13px 0%;
    width:100%;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 143.02%;
    /* identical to box height, or 26px */
    color: #FFFFFF;
    cursor:pointer;
}

.second-promoting-dutiful-text button:hover{
    background: #3c2160;
}
/* the popup */
.little-popup-h3{
    /* border:2px solid red; */
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 143.02%;
    /* or 51px */
    color: #1E1E4B;
}
.dutifulhead{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-items:center;
}
.dutifulhead svg{
    width:25px;
    /* border:2px solid green; */
}
.little-popup{
    /* border:2px solid green; */
    /* padding:5% 0; */
    margin-top:5%;
    display:grid;
}
.little-popup label{
    width:100%;
    /* border:2px solid blue; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 15px;
line-height: 23px;

/* identical to box height */

letter-spacing: -0.005em;

color: #A16AE8;

}
.little-popup-input{
    box-sizing: border-box;
/* position: absolute; */
width: 415px;
height: 30px;
/* left: 0px; */
/* top: 31px; */
margin-bottom:3%;
background: #F8FAFD;
border: 2px solid #E7EAF1;
border-radius: 6px;
}
.select-dutiful{
    /* border:2px solid yellow; */
    display:grid;
    width: 415px;
    background: #F8FAFD;
    border: 2px solid #E7EAF1;
    border-radius: 6px;
    margin-bottom: 5%;
    grid-template-columns: 3fr 9fr;
}
.select-dutiful-option{
    /* border:2px solid green; */
    display:flex;
    border: 1px solid #E7EAF1;
    border-left:none;
    border-top:none;
    border-bottom:none;
    /* padding:5% ; */
    justify-content: center;
    align-items: center;
    gap:1rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.005em;
    color: #000000;

}
.select-dutiful-input{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 18px;
line-height: 23px;
/* identical to box height */
letter-spacing: -0.005em;
color: #BFC5D2;
}
.select-dutiful-option svg{
    /* border:2px solid green; */
    width:15px;
}
/* .select-dutiful-input{
    border:2px solid yellow;
} */

.last-dutiful{
    /* border:2px solid yellow; */
    box-sizing: border-box;
    width: 415px;
    height: 30px;
    margin-bottom:5%;
    background: #F8FAFD;
    border: 2px solid #E7EAF1;
    border-radius: 6px;
}
.dutiful-another{
    /* border:2px solid blue; */
    display:flex;
    width:50%;
    justify-content:start;
    align-items:center;
    gap:1rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.005em;
    background: #F5EEFF;
    border-radius: 38px;
    color: #603F8B;
    margin-bottom:3%;
}

@media screen and (max-width: 900px){
    /* .promoting-detiful-sections{
 border:2px solid green;
} */
.first-promoting-dutiful{
    /* border:2px solid yellow; */
    padding-top:5%;
}
.first-promoting-dutiful h3{
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 49px;
    /* identical to box height */
    text-align: center;
    color: #1E1E4B;
}
.first-promoting-dutiful p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 143.02%;
/* or 29px */
text-align: center;
color: #656565;
width:70%;
margin:auto;


}
/* the second section */
.second-promoting-dutiful{
    /* border:2px solid blue; */
    display:grid;
    padding:3%;
    margin:10% 0;
    grid-template-columns: 1fr ;
}

.the-image-dutiful{
    /* border:2px solid blue; */
    background: #603F8B;
    border-radius: 14px;
    width:95%;
    margin:auto;
    height:260px;
    position:relative;
}
.second-promoting-dutiful-img  img{
    /* border:2px solid green; */
    width:100%;
    /* height:350px; */
    left:-20px;
    position:absolute;

}
/* .second-promoting-dutiful-text{
    border:2px solid brown;
} */
.second-promoting-dutiful-text h3{
    /* border:2px solid brown; */
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 143.02%;
    /* or 51px */
    color: #1E1E4B;
    margin-bottom:5%;
    margin-top:8%;
}
.second-promoting-dutiful-text p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 15px;
line-height: 143.02%;
/* or 29px */
color: #656565;
}
.second-promoting-dutiful-text button{
    background: #532F82;
    border:none;
    box-shadow: 2px 8px 8px rgba(86, 86, 86, 0.25);
    border-radius: 6px;
    margin-top:5%;
    margin-bottom:1%;
    padding:18px 25%;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 143.02%;
    /* identical to box height, or 26px */
    color: #FFFFFF;
    cursor:pointer;
}
.second-promoting-dutiful-text button:hover{
    background: #3c2160;
}
/* the popup */
.dutifulhead{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-items:center;
}
.dutifulhead svg{
    width:35px;
    /* border:2px solid green; */
}
.little-popup{
    /* border:2px solid green; */
    /* padding:5% 0; */
    margin-top:5%;
    display:grid;
}
.little-popup label{
    width:100%;
    /* border:2px solid blue; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 12px;
line-height: 23px;

/* identical to box height */

letter-spacing: -0.005em;

color: #A16AE8;

}
.little-popup-input{
    box-sizing: border-box;
/* position: absolute; */
width: 295px;
height: 30px;
/* left: 0px; */
/* top: 31px; */
margin-bottom:3%;
background: #F8FAFD;
border: 2px solid #E7EAF1;
border-radius: 6px;
}
.select-dutiful{
    /* border:2px solid yellow; */
    display:grid;
    width: 295px;
    background: #F8FAFD;
    border: 2px solid #E7EAF1;
    border-radius: 6px;
    margin-bottom: 5%;
    grid-template-columns: 3fr 9fr;
}
.select-dutiful-option{
    /* border:2px solid green; */
    display:flex;
    border: 1px solid #E7EAF1;
    border-left:none;
    border-top:none;
    border-bottom:none;
    /* padding:5% ; */
    justify-content: center;
    align-items: center;
    gap:1rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 15px;
    line-height: 23px;
    letter-spacing: -0.005em;
    color: #000000;

}
.select-dutiful-input{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 18px;
line-height: 23px;
/* identical to box height */
letter-spacing: -0.005em;
color: #BFC5D2;
}
.select-dutiful-option svg{
    /* border:2px solid green; */
    width:15px;
}
/* .select-dutiful-input{
    border:2px solid yellow;
} */

.last-dutiful{
    /* border:2px solid yellow; */
    box-sizing: border-box;
    width: 295px;
    height: 30px;
    margin-bottom:5%;
    background: #F8FAFD;
    /* border: 2px solid #E7EAF1; */
    border-radius: 6px;
}
.dutiful-another{
    /* border:2px solid blue; */
    display:flex;
    width:70%;
    justify-content:start;
    align-items:center;
    gap:1rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: -0.005em;
    background: #F5EEFF;
    border-radius: 38px;
    color: #603F8B;
    margin-bottom:3%;
}
.little-popup-h3{
    /* border:2px solid red; */
    font-family: 'Recoleta Alt';
    font-style: normal;
    font-weight: 600;
    font-size: 5px;
    line-height: 63.02%;
    /* or 51px */
    color: #1E1E4B;
}

}
</style>