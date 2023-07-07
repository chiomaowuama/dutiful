<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'
import {onMounted,ref } from 'vue';

const alldetails = ref(null);


async function blogdetails(){
    let response = await fetch('https://testapi.dutiful.ng/v2/blog/how-to-start-the-new-year-with-huge-profit-margin-as-a-vendor/show');
    let result = await response.json();

    // console.log(result);
    alldetails.value = result.data
}

onMounted(() => {
    blogdetails();
})
</script>

<template>
    <whiteNav/>
    <div class="lead-container">
        <div class="lead-firstsection">
            <p class="lead-firstsection-p">Leads generation</p>
            <h3 class="lead-firstsection-h3">{{ alldetails.title }}</h3>
            <div class="lead-svg-first">
                <div class="calenda-lead">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2V5" stroke="#A0A0A0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 2V5" stroke="#A0A0A0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.5 9.09H20.5" stroke="#A0A0A0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A0A0A0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9945 13.7H12.0035" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29529 13.7H8.30427" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.29529 16.7H8.30427" stroke="#A0A0A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>Dec 15, 2021 <span>.</span> 5 mins read</p>
                </div>
                <div class="eyes-lead">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5799 12C15.5799 13.98 13.9799 15.58 11.9999 15.58C10.0199 15.58 8.41992 13.98 8.41992 12C8.41992 10.02 10.0199 8.42 11.9999 8.42C13.9799 8.42 15.5799 10.02 15.5799 12Z" stroke="#603F8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M11.9998 20.27C15.5298 20.27 18.8198 18.19 21.1098 14.59C22.0098 13.18 22.0098 10.81 21.1098 9.4C18.8198 5.8 15.5298 3.72 11.9998 3.72C8.46984 3.72 5.17984 5.8 2.88984 9.4C1.98984 10.81 1.98984 13.18 2.88984 14.59C5.17984 18.19 8.46984 20.27 11.9998 20.27Z" stroke="#603F8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <p>45 views</p>
                </div>
            </div>

        </div>
        <div class="lead-secondsection">
            <div class="lead-secondsection-first">
                <div class="lead-secondsection-first1">
                    <img src="@/assets/leadpassport.png" alt="">
                    <p>Damilola adebesin</p>
                </div>
                <div class="lead-secondsection-first2">
                    <svg width="134" height="44" viewBox="0 0 134 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="134" height="44" rx="22" fill="#F5EEFF"/>
<path d="M29.2685 18.54L27.5085 19.16C27.4152 18.5467 27.1152 17.9933 26.6085 17.5C26.1019 16.9933 25.4019 16.74 24.5085 16.74C23.7218 16.74 23.0685 16.9667 22.5485 17.42C22.0285 17.8733 21.7685 18.4333 21.7685 19.1C21.7685 19.62 21.9218 20.06 22.2285 20.42C22.5485 20.78 23.0019 21.0267 23.5885 21.16L25.7085 21.62C26.8819 21.8733 27.7885 22.3533 28.4285 23.06C29.0685 23.7533 29.3885 24.6 29.3885 25.6C29.3885 26.7467 28.9352 27.7333 28.0285 28.56C27.1219 29.3867 25.9419 29.8 24.4885 29.8C22.9018 29.8 21.6552 29.3867 20.7485 28.56C19.8552 27.72 19.3352 26.7267 19.1885 25.58L21.0685 24.98C21.1485 25.8333 21.4818 26.5533 22.0685 27.14C22.6552 27.7267 23.4552 28.02 24.4685 28.02C25.4018 28.02 26.1219 27.8067 26.6285 27.38C27.1352 26.9533 27.3885 26.4133 27.3885 25.76C27.3885 25.2267 27.2085 24.7667 26.8485 24.38C26.4885 23.98 25.9619 23.7067 25.2685 23.56L23.2485 23.12C22.1952 22.8933 21.3552 22.4467 20.7285 21.78C20.1018 21.1133 19.7885 20.2667 19.7885 19.24C19.7885 18.12 20.2418 17.14 21.1485 16.3C22.0685 15.4467 23.1752 15.02 24.4685 15.02C25.9219 15.02 27.0352 15.3733 27.8085 16.08C28.5818 16.7867 29.0685 17.6067 29.2685 18.54ZM33.5663 23.84V29.5H31.6863V15.02H33.5663V21C34.2063 20.0667 35.1797 19.6 36.4863 19.6C37.593 19.6 38.4397 19.9533 39.0263 20.66C39.6263 21.3667 39.9263 22.28 39.9263 23.4V29.5H38.0463V23.72C38.0463 22.1067 37.2997 21.3 35.8063 21.3C35.113 21.3 34.573 21.54 34.1863 22.02C33.7997 22.4867 33.593 23.0933 33.5663 23.84ZM42.2168 26.92C42.2168 26.0933 42.4835 25.4333 43.0168 24.94C43.5501 24.4333 44.2568 24.12 45.1368 24L47.7368 23.62C48.2301 23.5533 48.4768 23.3133 48.4768 22.9C48.4768 22.3933 48.3035 21.98 47.9568 21.66C47.6101 21.34 47.0901 21.18 46.3968 21.18C45.7568 21.18 45.2501 21.36 44.8768 21.72C44.5035 22.0667 44.2835 22.5333 44.2168 23.12L42.4168 22.7C42.5101 21.78 42.9301 21.0333 43.6768 20.46C44.4235 19.8733 45.3168 19.58 46.3568 19.58C47.7168 19.58 48.7235 19.9133 49.3768 20.58C50.0301 21.2333 50.3568 22.0733 50.3568 23.1V27.92C50.3568 28.4933 50.3968 29.02 50.4768 29.5H48.6368C48.5701 29.1 48.5368 28.6667 48.5368 28.2C48.2701 28.6267 47.8768 29 47.3568 29.32C46.8501 29.64 46.2101 29.8 45.4368 29.8C44.4901 29.8 43.7168 29.52 43.1168 28.96C42.5168 28.3867 42.2168 27.7067 42.2168 26.92ZM45.6968 28.22C46.5368 28.22 47.2101 27.9933 47.7168 27.54C48.2235 27.0867 48.4768 26.3667 48.4768 25.38V24.94L45.5368 25.38C45.1101 25.4467 44.7701 25.6 44.5168 25.84C44.2635 26.08 44.1368 26.4067 44.1368 26.82C44.1368 27.1933 44.2768 27.52 44.5568 27.8C44.8501 28.08 45.2301 28.22 45.6968 28.22ZM58.5255 19.78V21.78C58.2455 21.74 57.9722 21.72 57.7055 21.72C55.9455 21.72 55.0655 22.7067 55.0655 24.68V29.5H53.1855V19.88H55.0255V21.56C55.6122 20.3333 56.5722 19.72 57.9055 19.72C58.1189 19.72 58.3255 19.74 58.5255 19.78ZM61.5516 23.7H66.8116C66.785 22.98 66.545 22.3933 66.0916 21.94C65.6383 21.4733 64.9983 21.24 64.1716 21.24C63.425 21.24 62.8116 21.4867 62.3316 21.98C61.8516 22.46 61.5916 23.0333 61.5516 23.7ZM67.0916 26.2L68.7116 26.76C68.4316 27.6533 67.9116 28.3867 67.1516 28.96C66.3916 29.52 65.4716 29.8 64.3916 29.8C63.045 29.8 61.8983 29.34 60.9516 28.42C60.0183 27.4867 59.5516 26.2333 59.5516 24.66C59.5516 23.1933 60.005 21.98 60.9116 21.02C61.8183 20.06 62.8983 19.58 64.1516 19.58C65.605 19.58 66.7383 20.04 67.5516 20.96C68.365 21.8667 68.7716 23.0867 68.7716 24.62C68.7716 24.86 68.7583 25.06 68.7316 25.22H61.4916C61.505 26.0733 61.785 26.7733 62.3316 27.32C62.8916 27.8667 63.5783 28.14 64.3916 28.14C65.765 28.14 66.665 27.4933 67.0916 26.2Z" fill="#603F8B"/>
<path d="M92 26C94.2091 26 96 24.2091 96 22C96 19.7909 94.2091 18 92 18C89.7909 18 88 19.7909 88 22C88 24.2091 89.7909 26 92 26Z" stroke="#603F8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M106 35C108.209 35 110 33.2091 110 31C110 28.7909 108.209 27 106 27C103.791 27 102 28.7909 102 31C102 33.2091 103.791 35 106 35Z" stroke="#603F8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M106 17C108.209 17 110 15.2091 110 13C110 10.7909 108.209 9 106 9C103.791 9 102 10.7909 102 13C102 15.2091 103.791 17 106 17Z" stroke="#603F8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M102.638 15.1625L95.3633 19.8375" stroke="#603F8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M95.3633 24.1625L102.638 28.8375" stroke="#603F8B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div class="lead-secondsection-second">
                <!-- <svg width="266" height="266" viewBox="0 0 266 266" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M136.655 142.31C126.015 161.484 106.175 163.147 92.4321 145.968L89.9937 142.864C75.6962 124.909 55.5246 127.126 45.2171 147.63L26.1537 185.868C12.8537 212.468 32.2496 243.833 61.9529 243.833H203.376C232.082 243.833 251.478 214.463 240.173 187.973L205.482 106.954C193.734 79.4676 172.121 78.3592 157.602 104.516" stroke="white" stroke-width="16.625" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M110.508 55.4167C110.508 73.815 95.6561 88.6667 77.2578 88.6667C58.8595 88.6667 44.0078 73.815 44.0078 55.4167C44.0078 37.0183 58.8595 22.1667 77.2578 22.1667C81.2478 22.1667 85.0161 22.8317 88.452 24.1617" stroke="white" stroke-width="16.625" stroke-linecap="round" stroke-linejoin="round"/>
                </svg> -->
                <img :src="alldetails.image" alt="catImage" class="svg">
            </div>
            <div class="lead-secondsection-third">
                <p v-html="alldetails.body"></p>
            </div>
            <div class="lead-secondsection-fourth">
                <h3>Comments</h3>
                <div class="lead-secondsection-fourth1">
                    <div class="lead-secondsection-fourth1-img">
                        <img src="@/assets/leadpassport2.png" alt="">
                    </div>
                    <div class="lead-secondsection-fourth1-p">
                        <p class="lead-color">Joshua adebayo</p>
                        <p class="brown-color little-gaps">04 aug,2010</p>
                        <p class="brown-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id gravida ultrices sit in egestas volutpat, ipsum risus lectus. Lobortis enim quis quis mollis molestie. Tincidunt a dictum urna malesuada ultrices dignissim eu. At hac sodales sem amet felis a aliquam id. Integer metus aliquam nisl maecenas aliquet semper.</p>
                    </div>
                </div>
                <div class="lead-secondsection-fourth1">
                    <div class="lead-secondsection-fourth1-img">
                        <img src="@/assets/leadpassport3.png" alt="">
                    </div>
                    <div class="lead-secondsection-fourth1-p">
                        <p class="lead-color">Joshua adebayo</p>
                        <p class="brown-color little-gaps">04 aug,2010</p>
                        <p class="brown-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id gravida ultrices sit in egestas volutpat, ipsum risus lectus. Lobortis enim quis quis mollis molestie. Tincidunt a dictum urna malesuada ultrices dignissim eu. At hac sodales sem amet felis a aliquam id. Integer metus aliquam nisl maecenas aliquet semper.</p>
                    </div>
                </div>
            </div>
            <div class="lead-secondsection-fifth">
                <div  class="lead-secondsection-fifth1">
                    <p>Add a comment?</p>
                    <h5>Why choose us ?</h5>
                </div>
                <div  class="lead-secondsection-fifth2">
                    <textarea name="" id="" cols="90" rows="10"></textarea>
                </div>
                <div  class="lead-secondsection-fifth3">
                    <button>Post comment</button>
                </div>
            </div>
            <!-- <div>
                <ul>
                    <li v-for="(category, index) in alldetails?.categories" :key="index + 1">{{ category.name }}</li>
                   
                </ul>
            </div> -->

        </div>
    </div>
    <footerpage/>
</template>
<style>
.lead-container{
    /* border:2px solid green; */
    padding:3%;
}
/* .lead-firstsection{
    border:2px solid yellow;
} */
/* .lead-firstsection{
    border:2px solid blue;
} */
.lead-firstsection-p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 120%;
/* identical to box height, or 29px */
color: #603F8B;
}
.lead-firstsection-h3{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 36px;
line-height: 135%;
/* identical to box height, or 49px */
/* Text header color */
color: #011B44;
margin:1% 0;
}
.lead-svg-first{
    /* border:2px solid red; */
    display:grid;
    grid-template-columns: 1fr 1fr;
    width:40%;
}
.calenda-lead{
    /* border:2px solid green; */
    display:flex;
    justify-content: center;
    gap:1rem;
    align-items: center;
}
.eyes-lead{
    display:flex;
    justify-content: start;
    gap:1rem;
    align-items: center;
}
/* second section */
.lead-secondsection-first{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:2% 0;
}
.lead-secondsection-first1 p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 120%;
/* identical to box height, or 29px */


/* Light text color */

color: #5C5C5C;

}
.lead-secondsection-first1{
    /* border:2px solid green; */
    display:flex;
    justify-content: start;
    align-items: center;
    gap:1rem;
}
.lead-secondsection-first2{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: end;
}
.lead-secondsection-first2 svg{
    width:70%;
    /* border:2px solid green; */

}
/* second second section */
.lead-secondsection-second{
    background: #B7B7D6;
    border-radius: 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    padding:0% 0;
}
.lead-secondsection-second .svg{
    /* border:2px solid yellow; */
    width: 100%;
    height: 100%;
}
/* second third */
.lead-secondsection-third{
    /* border:2px solid green; */
    margin:2% 0;
}
.lead-secondsection-third p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 21px;
line-height: 33px;
/* or 150% */
color: #656565;
}
/* second fourth */
.lead-secondsection-fourth{
    /* border:2px solid blue; */
    margin:5% 0;
}
.lead-secondsection-fourth h3{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 120%;
/* or 38px */
color: #000000;
margin:1% 0;
}
.lead-secondsection-fourth1{
    /* border:2px solid yellow; */
    margin:3% 0;
    display:grid;
    grid-template-columns: 1fr 11fr;
}

.lead-secondsection-fourth1-img img{
    /* border:2px solid blue; */
    width:80px;
}
.brown-color{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 22px;
line-height: 27px;
/* or 123% */
color: #737373;

}
.little-gaps{
    margin:1% 0;
}

.lead-color{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 120%;
/* or 24px */


color: #000000;

}
/* the second fifthpart */
.lead-secondsection-fifth1{
    /* border:2px solid green; */
    width:70%;
    display:grid;
    grid-template-columns: 1fr 1fr;

}
.lead-secondsection-fifth1 p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 22px;
line-height: 27px;
/* or 123% */

/* border:2px solid yellow; */
margin-left:15%;
color: #B6B6E5;

}
.lead-secondsection-fifth1 h5{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 33px;
/* identical to box height, or 138% */
color: #1E1E4B;

}
/* .lead-secondsection-fifth2{
    border:2px solid yellow;
} */
.lead-secondsection-fifth2 textarea{
    /* border:2px solid green; */
    border:none;
    outline:none;
    font-size :15px;
}
.lead-secondsection-fifth3 button{
    background: #603F8B;
border-radius: 6px;
font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 27px;
/* identical to box height, or 123% */


color: #FFFFFF;
padding:15px 20px;
border:none;

}

@media screen and (max-width: 900px){
    .lead-container{
    /* border:2px solid green; */
    padding:3%;
}
/* .lead-firstsection{
    border:2px solid yellow;
} */
/* .lead-firstsection{
    border:2px solid blue;
} */
.lead-firstsection-p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 120%;
/* identical to box height, or 29px */
color: #603F8B;
}
.lead-firstsection-h3{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 700;
font-size: 23px;
line-height: 135%;
/* identical to box height, or 49px */
/* Text header color */
color: #011B44;
margin:1% 0;
}
.lead-svg-first{
    /* border:2px solid red; */
    display:grid;
    grid-template-columns: 2fr 1fr;
    width:100%;
    margin:5% 0;
}
.calenda-lead{
    /* border:2px solid green; */
    display:flex;
    justify-content: center;
    gap:1rem;
    align-items: center;
}
.eyes-lead{
    display:flex;
    justify-content: start;
    gap:1rem;
    align-items: center;
}
/* second section */
.lead-secondsection-first{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin:2% 0;
}
.lead-secondsection-first1 p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 120%;
/* identical to box height, or 29px */


/* Light text color */

color: #5C5C5C;

}
.lead-secondsection-first1{
    /* border:2px solid green; */
    display:flex;
    justify-content: start;
    align-items: center;
    gap:1rem;
}
.lead-secondsection-first2{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: end;
}
.lead-secondsection-first2 svg{
    width:70%;
    /* border:2px solid green; */

}
/* second second section */
.lead-secondsection-second{
    background: #B7B7D6;
    border-radius: 12px;
    display:flex;
    justify-content: center;
    align-items: center;
    padding:0% 0;
    margin:10% 0;
}
.lead-secondsection-second .svg{
    /* border:2px solid yellow; */
    width: 100%;
    height: 10%;
}
/* second third */
.lead-secondsection-third{
    /* border:2px solid green; */
    margin:2% 0;
}
.lead-secondsection-third p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 21px;
line-height: 33px;
/* or 150% */
color: #656565;
}
/* second fourth */
.lead-secondsection-fourth{
    /* border:2px solid blue; */
    margin:5% 0;
}
.lead-secondsection-fourth h3{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 120%;
/* or 38px */
color: #000000;
margin:1% 0;
}
.lead-secondsection-fourth1{
    /* border:2px solid yellow; */
    margin:3% 0;
    display:grid;
    grid-template-columns: 1fr 11fr;
}

.lead-secondsection-fourth1-img img{
    /* border:2px solid blue; */
    width:80px;
}
.brown-color{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 15px;
line-height: 27px;
/* or 123% */
color: #737373;

}
.little-gaps{
    margin:1% 0;
}

.lead-color{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 120%;
/* or 24px */


color: #000000;

}
/* the second fifthpart */
.lead-secondsection-fifth1{
    /* border:2px solid green; */
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;

}
.lead-secondsection-fifth1 p{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 27px;
/* or 123% */

/* border:2px solid yellow; */
margin-left:15%;
color: #B6B6E5;

}
.lead-secondsection-fifth1 h5{
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 33px;
/* identical to box height, or 138% */
color: #1E1E4B;

}
/* .lead-secondsection-fifth2{
    border:2px solid yellow;
} */
.lead-secondsection-fifth2 textarea{
    /* border:2px solid green; */
    border:none;
    outline:none;
    font-size :15px;
    /* border:2px solid red; */
    width:100%;
}
.lead-secondsection-fifth3 button{
    background: #603F8B;
border-radius: 6px;
font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 22px;
line-height: 27px;
/* identical to box height, or 123% */
color: #FFFFFF;
padding:15px 20px;
border:none;

}

}
</style>