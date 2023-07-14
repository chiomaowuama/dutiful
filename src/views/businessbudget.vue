<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'
import {onMounted,ref } from 'vue';
 
const prices = ref("");

async function pricings(){
    let allprice = await fetch('https://testapi.dutiful.ng/v2/plans');
    let priceresult = await allprice.json();

    prices.value = priceresult.data
    
}
 function printplanprice(price){
    if(price <= 0){
        return 'Free';
    }
    return "<sup class='supside'>NGN</sup>"+ price.toLocaleString() +" " + "<sub class='subside'>/year</sub>";
   
}
onMounted(() => {
    pricings();
 
    
})
</script>

<template>
    <whiteNav/>
   <div class="getting-in-touch">
        <div class="getting-in-touch-first">
            <h3>Frequentyly Asked Questions</h3>
            <p>Read the responses to some of our most asked questions to learn how Dutiful's unique solution addresses these issues.</p>
        </div>
        <div class="questions-askedone">
            <div class="wrapperone shrinking"  v-for="(plan, id) in prices" :key="id" >
                <div class="questions-headone">
                    <h3>{{ plan.name }}</h3>
                    <h2 v-html="printplanprice(plan.price)"></h2>
                    
                </div>
                <div class="collapsibleone" >
                    <input type="checkbox" :id="'collapsible-head' + id">
                    <label :for="'collapsible-head' + id"> Get started</label>
                    <div class="collapsibleone-text" v-for="(feature, id) in plan.features" :key="id" >
                        <div class="each-markand-text" >
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17 1.5L6 12.5L1 7.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>{{ feature }}</p>

                        </div>
                       
                        
                    </div>
                </div>

            </div>
           

        </div>
        <div class="closedup">
            <p class="thebig-P">Features Overview</p>
            <div class="beneatall-business">
                <div class="beneat-ul">
                    <p>Features&service</p>
                    <ul>
                        <li>Access to dashboard</li>
                        <li>No of business listings</li>
                        <li>No products/listings</li>
                        <li>No of Images</li>
                        <li>Keywords</li>
                        <li>Display service hours and prices</li>
                        <li>Display adress,contact and email</li>
                        <li>instant chat</li>
                        <li>Reviews and ratings</li>
                        <li>profile visibility</li>
                        <li>inatant notification</li>
                        <li>display website and social network</li>
                        <li>quotes</li>
                        <li>Bookmarks</li>
                        <li>Number of profile views</li>
                        <li>Verified badge(Gold)</li>
                        <li>Latest Offers</li>
                        <li>Accept &sell appointment</li>
                        <li>24/7 service and support </li>
                        
                    </ul>
                </div>
                <div class="questions-askedone">
                    
                        <div class="wrapperone movemore" >
                            <div class="questions-head">
                                <h2></h2>  
                            </div>
                            <div class="collapsibleone" >
                                <input type="checkbox" :id="'collapsible-head' + id">
                                <label :for="'collapsible-head' + id"> Get started</label>
                                <div class="bigmarkdiv">
                                    <div class="each-markand-text1" >
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                        

                                    </div>
                                    <div class="each-markand-text1">
                                    
                                        <p>2 businesses</p>
                                        

                                    </div>
                                    <div class="each-markand-text1">
                                        <p>2</p>
                                

                                    </div>
                                    <div class="each-markand-text1">
                                    <p>2</p>
                                        

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 6L18 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 6L18 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                            

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 6L18 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 6L18 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    

                                    </div>
                                </div>

                            </div>

                        </div>
                        <div class="wrapperone movemore"  >
                            <div class="questions-head">
                                <h2></h2>
                            </div>
                            <div class="collapsibleone">
                                <input type="checkbox" id="collapsible-head7">
                                <label for="collapsible-head7">Get started</label>
                                    <div class="bigmarkdiv">
                                        <div class="each-markand-text1">
                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        

                                        </div>
                                    <div class="each-markand-text1">
                                        <p>6 businesses</p>

                                    </div>
                                    <div class="each-markand-text1">
                                        <p>6</p>

                                    </div>
                                    <div class="each-markand-text1">
                                        <p>4</p>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
               

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                        

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>

                                    </div>
                                    <div class="each-markand-text1">
                                    
                                        <p>purple</p>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 6L6 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M6 6L18 18" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>



                                    </div>

                                    </div>    
                            </div>
                        </div>
                        <div class="wrapperone movemore">
                            <div class="questions-head">
                            
                            </div>
                            <div class="collapsibleone">
                                <input type="checkbox" id="collapsible-head8">
                                <label for="collapsible-head8">Get started</label>
                                    <div class="bigmarkdiv">
                                        <div class="each-markand-text1">
                                            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                    
                                        <p>10 businesses</p>

                                    </div>
                                    <div class="each-markand-text1">
                                        
                                        <p>10</p>

                                    </div>
                                    <div class="each-markand-text1">
                                    
                                        <p>6</p>

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    
                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                        

                                    </div>
                                    <div class="each-markand-text1">
                                        <p>Gold</p>
                                        

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    
                                    </div>
                                    <div class="each-markand-text1">
                                        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.6663 2L7.99967 16.6667L1.33301 10" stroke="#AC64CE" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    

                                    </div>

                                    </div>
                                    
                                    

                            </div>
                        

                        </div>
                    
             

        </div>
            </div>
        </div>  
   </div>
    <footerpage/>
</template>
<style>
.beneatall-business{
    /* border:10px solid yellow; */
    display:grid;
    grid-template-columns: 1fr 2fr;
 
    
    
}
.getting-in-touch{
    /* border:2px solid green; */
    padding-top:7%;
}
.beneat-ul p{
    /* border:2px solid green; */
 
    padding-left:30px;
    /* padding-right:30px; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 28px;
line-height: 24px;
width:80%;
padding-top:2%;
margin:auto;
margin-top:10%;
margin-bottom: 10%;
/* or 150% */
/* border:2px solid yellow; */

color: #656565;
}
.beneat-ul li{
    /* border:2px solid green; */
    padding-left:30px;
    /* padding-right:30px; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 18px;
line-height: 24px;
width:80%;
padding-top:5%;
margin:auto;
text-transform: capitalize;
/* or 150% */
/* border:2px solid yellow; */

color: #656565;
}
.getting-in-touch-first{
    /* border:2px solid yellow; */
    background-color: #532F82;
    background-image: url("@/assets/backgroungontouch.png");
    background-size:contain;
    height:250px;
    padding-top:20%;
    background-repeat: repeat;
    

}
.getting-in-touch-first h3{
    font-family: 'Recoleta Alt';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 49px;
/* identical to box height */
text-align: center;
color: #FFFFFF;
}
.getting-in-touch-first p{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 20px;
    line-height: 143.02%;
    /* identical to box height, or 29px */
    text-align: center;
    color: #EDDFFF;

}
/* the scrollside */
.questions-askedone{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding:3% 5%;
    padding-bottom: 0%;
    gap:3rem;
    

}
/* small test */
.supside{
  
    font-family: Recoleta Alt;
    font-size: 16px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;

}
.subside{
    font-family: Recoleta Alt;
    font-size: 20px;
    font-weight: 600;
    line-height: 29px;
    letter-spacing: 0em;
    text-align: left;

}
.questions-headone{
    /* border:2px solid red; */
    /* display:grid; */
    /* justify-content: start; */
    /* align-items: center; */
    /* gap:5%; */
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #1E1E4B;
    margin-bottom: 5%;

}
.questions-headone h3{
    /* border:2px solid red; */
    display:block;
    font-size: 22px;
}
.questions-headone h2{
    /* border:2px solid yellow; */
    height:40px;

}
/* collapsible txt */
.collapsibleone{
    max-width:100%;
    overflow:hidden;
    font-weight:500;
    /* border:2px solid green; */
}
.collapsibleone input{
    display:none;
}
.collapsibleone label{
    position: relative;
    font-weight: 600;
    background-color:#fff;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgda(0, 0, 0, .08);
    /* color:#1c1c6b; */
    display:block;
    margin:0px;
    cursor:pointer;
    padding:15px;
    padding-left:0;
    border-radius:4px;
    z-index:1;
    text-align: center;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 143.02%;
    color: #FFFFFF;
    background-color: #532F82;
    box-shadow: 2px 8px 8px rgba(86, 86, 86, 0.25);
    border-radius: 6px;
   

    
}
.collapsibleone label:after{
    content:"";
    position:absolute;
    top:15px;
    right:15px;
    width:18px;
    height:18px;
    background: url(arrow.svg) no-repeat 0 0;
    transition: all 0.3s ease;
}
.collapsibleone input:checked + label:after{
    transform:rotate(90deg);
}
.collapsibleone-text{
    max-height: 1px;
    overflow: hidden;
    border-radius: 4px;
    line-height:1.4;
    /* position:relative; */
    /* top:-100%; */
    /* left:15px; */
    /* border:2px solid yellow; */
    height:45px;
    opacity: 0.5;
    transition: all 0.3s ease;
}
.each-markand-text1{
    /* border:2px solid green; */
    margin:10% 0;
    text-align: center;
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 24px;
color: #656565;
}
.collapsibleone .collapsibleone-text{
    max-height:500px;
    /* border:2px solid yellow; */
    padding-bottom: 25px;
    background:#fff;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgda(0, 0, 0, .08);
    opacity: 1;
    top:0;

}
.collapsibleone-text h5{
    margin-bottom:10px;
    padding:15px 15px 0;
    color:#1c1c6b;

}
.collapsible-text p{
    padding-left:5px;
    padding-right:5px;
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 18px;
line-height: 24px;
/* or 150% */
/* border:2px solid yellow; */

color: #656565;

}
.upanddown{
    /* border:2px solid yellow; */
    margin:2% 0;
}
.wrapperone{
    /* border:2px solid blue; */
    padding-bottom:2%;
  
}


.each-markand-text{
    /* border:2px solid green; */
    font-size:18px;
    font-weight:450;
    color:#656565;
    display:grid;
    grid-template-columns:1fr 11fr;
    gap:1rem;
    margin-top:3% ;
    justify-content: center;
    align-items: center;

    /* gap:1rem; */
}
.each-markand-text svg{
    /* border:2px solid blue; */
    margin-left:5px;
    height:18px;
    width:75%;
}
.thebig-P{
    font-family: Circular Std;
    font-size: 32px;
    font-weight: 550;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
    margin:3% ;

}
.movemore{
    margin-bottom: 20%;
    /* border:2px solid red; */
}
.each-markand-text1 svg{
    color:#AC64CE;
    /* border: 2px solid green; */
}
@media screen and (max-width: 900px){
    .getting-in-touch-first{
    /* border:2px solid yellow; */
    background-color: #532F82;
    background-image: url("@/assets/backgroungontouch.png");
    background-size:contain;
    height:250px;
    padding-top:2%;
    background-repeat: repeat;

}
.getting-in-touch-first h3{
    font-family: 'Recoleta Alt';
font-style: normal;
font-weight: 600;
font-size: 26px;
line-height: 49px;
/* identical to box height */
text-align: center;
color: #FFFFFF;
}
.getting-in-touch-first p{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 15px;
    width:80%;
    margin:auto;
    line-height: 143.02%;
    /* identical to box height, or 29px */
    text-align: center;
    color: #EDDFFF;

}
.questions-askedone{
    /* border:2px solid green; */
    display:grid;
    grid-template-columns:  1fr;
    padding:3%;
    gap:2rem;

}
.questions-headone h2{
    font-size: 24px;
}
.closedup{
    display:none;
}



/* the scrollable */

.collapsibleone{
    max-width:450px;
    overflow:hidden;
    font-weight:500;
    /* border:2px solid green; */
}
.collapsibleone input{
    display:none;
}
.collapsibleone label{
    position: relative;
    font-weight: 600;
    background-color:#fff;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgda(0, 0, 0, .08);
    /* color:#1c1c6b; */
    display:block;
    margin:10px;
    cursor:pointer;
    padding:15px;
    padding-left:0;
    border-radius:4px;
    z-index:1;
    text-align: center;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 143.02%;
    color: #FFFFFF;
    background-color: #532F82;
    box-shadow: 2px 8px 8px rgba(86, 86, 86, 0.25);
    border-radius: 6px;
   

    
}
.collapsibleone label:after{
    content:"";
    position:absolute;
    top:15px;
    right:15px;
    width:18px;
    height:18px;
    background: url(arrow.svg) no-repeat 0 0;
    transition: all 0.3s ease;
}
.collapsibleone input:checked + label:after{
    transform:rotate(90deg);
}
.collapsibleone-text{
    max-height: 1px;
    overflow: hidden;
    border-radius: 4px;
    line-height:1.4;
    position:relative;
    top:-100%;
    /* left:15px; */
    /* border:2px solid yellow; */
    height:45px;
    opacity: 0.5;
    transition: all 0.3s ease;
}
.each-markand-text1{
    /* border:2px solid green; */
    margin:10% 0;
    text-align: center;
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 24px;
color: #656565;
}
.collapsibleone input:checked ~ .collapsibleone-text{
    max-height:300px;
    /* border:2px solid yellow; */
    padding-bottom: 25px;
    background:#fff;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, .1), 0 4px 11px 0 rgda(0, 0, 0, .08);
    opacity: 1;
    top:0;

}
.collapsibleone-text h5{
    margin-bottom:10px;
    padding:15px 15px 0;
    color:#1c1c6b;

}
.collapsible-text p{
    padding-left:5px;
    padding-right:5px;
    font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 18px;
line-height: 24px;
/* or 150% */
/* border:2px solid yellow; */

color: #656565;

}
.upanddown{
    /* border:2px solid yellow; */
    margin:2% 0;
}
.wrapperone{
    border:2px solid blu*e;
    padding-bottom:2%;
  
}


.each-markand-text{
    /* border:2px solid green; */
    font-size:18px;
    font-weight:450;
    color:#656565;
    display:grid;
    grid-template-columns:1fr 11fr;
    gap:1rem;
    margin-top:3% ;
    justify-content: center;
    align-items: center;

    /* gap:1rem; */
}
.each-markand-text svg{
    /* border:2px solid blue; */
    margin-left:5px;
    height:18px;
    width:75%;
}
.thebig-P{
    font-family: Circular Std;
    font-size: 32px;
    font-weight: 550;
    line-height: 46px;
    letter-spacing: 0em;
    text-align: left;
    color:#000000;
    margin:3% ;

}
.movemore{
    margin-bottom: 20%;
    /* border:2px solid red; */
}
.each-markand-text1 svg{
    color:#AC64CE;
    /* border: 2px solid green; */
}
}
</style>