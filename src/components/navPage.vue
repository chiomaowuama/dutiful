<template>
    
        <div class="nav"> 
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
               <p class="bars"></p>
               <p class="bars"></p>
            </label>
            <label for="" class="logo"><svg width="120" height="55" viewBox="0 0 120 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.7628 53.7715H0V23.9669H10.8058C15.3184 23.9669 18.9414 25.3125 21.6746 28.0038C24.4078 30.695 25.7744 34.3246 25.7744 38.8924C25.7744 43.4624 24.4078 47.0853 21.6746 49.7611C18.9414 52.4369 15.3041 53.7737 10.7628 53.7715ZM6.64313 47.5059H10.5111C12.9529 47.5059 14.9498 46.7773 16.5018 45.3202C18.0539 43.8631 18.8266 41.7183 18.82 38.8857C18.82 36.0289 18.0472 33.8708 16.5018 32.4115C14.9564 30.9522 12.9595 30.2236 10.5111 30.2259H6.64313V47.5059Z" fill="#F4F4F4"/>
                <path d="M41.9219 53.7714C41.7928 53.0782 41.7361 52.3734 41.753 51.6685C41.2102 52.5427 40.396 53.215 39.4349 53.5826C38.3962 54.0205 37.2803 54.2457 36.1531 54.245C33.687 54.245 31.7464 53.4722 30.3313 51.9268C28.9161 50.3814 28.2085 48.4342 28.2085 46.0851V32.885H34.5966V44.7406C34.5557 45.6859 34.8632 46.6134 35.4609 47.3469C36.0339 48.0092 36.8684 48.3404 37.9612 48.3404C38.4311 48.3625 38.9004 48.2855 39.3386 48.1143C39.7768 47.9432 40.1741 47.6817 40.5045 47.3469C40.8261 47 41.0757 46.5928 41.2388 46.1489C41.402 45.7049 41.4754 45.233 41.455 44.7605V32.8618H47.8464V50.016C47.8393 51.2665 47.909 52.5162 48.055 53.7582L41.9219 53.7714Z" fill="#F4F4F4"/>
                <path d="M59.4537 26.7785V32.8752H63.5336V38.4686H59.4537V46.2906C59.4537 47.7477 60.2264 48.4763 61.7718 48.4763C62.3374 48.4687 62.9005 48.3988 63.4508 48.2676V53.5662C62.6649 53.957 61.561 54.1524 60.1392 54.1524C57.98 54.1524 56.2778 53.5497 55.0327 52.3442C53.7875 51.1388 53.1638 49.4996 53.1616 47.4265V38.4851H49.4592V32.8951H50.5123C51.5753 32.8951 52.3834 32.5805 52.9298 31.948C53.4969 31.257 53.7883 30.3805 53.7478 29.4875V26.7984L59.4537 26.7785Z" fill="#F4F4F4"/>
                <path d="M72.7828 53.7714H66.3914V32.8751H72.7828V53.7714Z" fill="#F4F4F4"/>
                <path d="M88.5925 38.2565H84.049V53.7714H77.6576V38.2565H74.3459V32.8751H77.6576V31.067C77.6576 28.6252 78.3663 26.6692 79.7836 25.1988C81.201 23.7285 83.156 22.9933 85.6485 22.9933C87.0504 22.9933 88.0594 23.1478 88.6753 23.4569V28.6694C88.0558 28.5236 87.4208 28.4536 86.7844 28.4608C86.0934 28.4471 85.4184 28.669 84.8703 29.09C84.325 29.5095 84.0512 30.238 84.049 31.2756V32.8751H88.5925V38.2565Z" fill="#F4F4F4"/>
                <path d="M103.713 53.7715C103.587 53.0779 103.532 52.3734 103.548 51.6686C103.004 52.5417 102.19 53.2136 101.23 53.5828C100.192 54.0209 99.0772 54.2461 97.9511 54.2451C95.4828 54.2451 93.5411 53.4724 92.1259 51.9269C90.7108 50.3815 90.0032 48.4398 90.0032 46.1018V32.9017H96.4277V44.7573C96.3868 45.7026 96.6944 46.63 97.292 47.3635C97.865 48.0258 98.6995 48.357 99.7923 48.357C100.262 48.3792 100.732 48.3022 101.17 48.131C101.608 47.9599 102.005 47.6984 102.336 47.3635C102.657 47.0164 102.906 46.6091 103.068 46.1652C103.231 45.7212 103.304 45.2495 103.283 44.7772V32.8785H109.674V50.0327C109.667 51.2832 109.737 52.5329 109.883 53.7748L103.713 53.7715Z" fill="#F4F4F4"/>
                <path d="M120 53.7714H113.609V23.3311H120V53.7714Z" fill="#F4F4F4"/>
                <path d="M79.1412 3.81234C78.7619 2.87757 78.1569 2.05131 77.3805 1.40726C76.604 0.763204 75.6801 0.321427 74.6914 0.121376C73.7026 -0.0786758 72.6797 -0.0307989 71.7139 0.260761C70.7481 0.552322 69.8696 1.07848 69.1567 1.79226L64.0634 6.88553C62.9685 7.97778 62.3293 9.44513 62.2752 10.9907C62.2211 12.5363 62.7561 14.0448 63.772 15.2109C64.0586 14.7418 64.3999 14.3082 64.7886 13.9194L69.8819 8.82614C71.0964 7.61535 72.7169 6.89804 74.4297 6.81301C76.1425 6.72798 77.826 7.28127 79.1544 8.36582C79.7395 6.90436 79.7395 5.2738 79.1544 3.81234H79.1412Z" fill="#F4F4F4"/>
                <path d="M78.8068 17.7543L69.68 26.8778L65.6464 22.8443C64.8237 22.0198 64.2724 20.9637 64.0664 19.8173C63.8604 18.6709 64.0096 17.4889 64.494 16.4297L64.5834 16.2442L64.6794 16.0621C64.9386 15.5897 65.2643 15.157 65.6464 14.7772L70.7397 9.68058C71.7736 8.65128 73.1618 8.05604 74.6202 8.01664C76.0786 7.97725 77.4969 8.4967 78.5849 9.46867L78.7339 9.60773L78.8068 9.68058L78.8797 9.75347C79.9177 10.831 80.4915 12.2727 80.4779 13.7688C80.4643 15.2649 79.8643 16.6959 78.8068 17.7543Z" fill="#A16AE8"/>
                </svg>
            </label>
            <ul>
                <li><a href="#" class="search">
                        <svg class="the-search" width="30" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="19.6106" cy="19.611" r="14.9809" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M30.0298 30.8086L35.9032 36.6667" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </a>
                </li>
                <li><a class="active" href="#">Business Directory</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Login</a></li>
                <li><a href="#" class="li-border">signup</a></li>
            </ul>
        </div>
    
</template>
<style> 
*{
    padding:0;
    margin:0;
    text-decoration: none;
    list-style:none;
    box-sizing:border-box;

}
body{
    width:100%
}
.nav{
    width:100%;
    background: #532F82;
    height:80px;
    /* border:2px solid red; */
    position: fixed;
    z-index: 3;

  
}
label.logo{
    color:white;
    font-size:35px;
    line-height:80px;
    padding:0 100px;
    font-weight:bold;
}

.nav ul{
    float:right;
    margin-right:20px;
  
}
.nav ul li{
    display:inline-block;
    line-height: 80px;
    margin:0 5px;

}
.nav ul li a{
    color:white;
    font-size:17px;
    padding:7px 13px;
    border-radius:3px;
    text-transform:uppercase;
}
a.active, a:hover{
    background:#61319f;
    transition:.5s;
}
.checkbtn{
    font-size:30px;
    color:white;
    float:right;
    line-height:80px;
    margin-right:40px;
    cursor:pointer;
    display:none;
}
#check{
    display:none;
}
.li-border{
    border:2px solid white;

}
.search{
    position:relative;
}
.search:hover{
    background-color:#532F82;
}
.search svg{

    position: absolute;
    
    width:30px;
    margin-left:-8px;
    top:0px;
    left:0;
   
}

.bars{
    color:white;
   /* display:block; */
    border:3px solid white;
    border-left:none;
    border-right:none;
    border-top:none;
    width:100%;
    height:25px;
}
 
@media  screen and (max-width:1400px){
    label.logo{
        font-size:30px;
        padding-left:50px;

    }
    .nav ul li a{
        font-size:16px;
    }
   
    
}
@media  screen and (max-width:858px){
    .checkbtn{
        display:block;
        
     
    }
    .checkbtn{
    /* border:2px solid green; */
    margin-top:7px;
    width:40px;
    display:grid;
    grid-template-columns: 1fr;

}  
    .nav ul{
    border:2px solid green;

        position: fixed ;
        width:100%;
        height:auto;
        min-height: 100vh;
        background-color:#271044;
        overflow:auto;
        top:80px;
        left:-100%;
        z-index: 3;
        text-align:center;
        transition:all .5s;
    }
    .nav ul li{
        display:block;
        line-height:30px ;
        margin:50px 0;
    }
    .nav ul li a{
        font-size:20px;
    }
    a:hover, a.active{
        background-color:none;
        color:#61319f;
    }
    #check:checked ~ ul{
        left:0;
    }
    .search{
        display:none;
    }
    .search svg{
        display:none
    }
    
}
</style>