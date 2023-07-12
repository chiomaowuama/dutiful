<script setup>
import footerpage from '@/components/footerpage.vue'
import whiteNav from '@/components/whiteNav.vue'
import {onMounted,ref } from 'vue';

let blogs = ref(null);
// let searchresponds = ref(null);
let search = ref(null);
let searchresponds = ref([]);
let rest = ref(null);
const searchTerm = ref(search.value);

async function blogdetails(){
    let details = await fetch('https://api.dutiful.ng/v2/blog?per_page=50&page=1');
    let blogresult = await details.json();
    
    blogs.value = blogresult.data.map(blog => {
        return{
            id: blog.id,
            pictitle: blog.title,
            picture: blog.image,
            date: blog.created_at,
        }

    })   
  
}
async function searchAll() {
  const searchTerm = search.value;
  console.log(searchTerm);
  
  const requestOptions = {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ search: searchTerm })
  };

  try {
    const response = await fetch('https://api.dutiful.ng/v2/blog/search?per_page=50&page=1', requestOptions);
    const data = await response.json();
    rest.value = data
    
  
    const filteredResults = data.data.filter(searchResponse => {
     
       return searchResponse.title.toLowerCase().includes(searchTerm.toLowerCase());
   
    });

  
    const searchResults = filteredResults.map(searchResponse => {
      return {
        title: searchResponse.title,
        picture: searchResponse.image,
      };
    });

    searchresponds.value = searchResults;
   
  } catch (error) {
    console.error(error);
  }
}
console.log(rest.value);
onMounted(() => {
    blogdetails();
})
</script>
<template>
    <whiteNav/>
   <div class="blogstartup">
        <h3 class="blog-h3">Blog</h3>
        <div class="categories-and-filter">
            <div class="categories">
                <input type="text" v-model="search">
                <button @click="searchAll()">click me </button>
                <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.24106 1.2459C1.53326 0.94784 1.99051 0.920743 2.31272 1.16461L2.40503 1.2459L9 7.97342L15.595 1.2459C15.8872 0.94784 16.3444 0.920743 16.6666 1.16461L16.7589 1.2459C17.0511 1.54396 17.0777 2.01037 16.8386 2.33904L16.7589 2.43321L9.58198 9.7541C9.28978 10.0522 8.83254 10.0793 8.51033 9.83539L8.41802 9.7541L1.24106 2.43321C0.919645 2.10534 0.919645 1.57376 1.24106 1.2459Z" fill="#603F8B" stroke="#603F8B"/>
                    </svg>
            </div>
            <div class="filter">
                <p>filter</p>
                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.7599 3.71376C5.7599 2.62681 4.86462 1.74192 3.76229 1.74192C2.66113 1.74192 1.76467 2.62681 1.76467 3.71376C1.76467 4.80072 2.66113 5.68561 3.76229 5.68561C4.86462 5.68561 5.7599 4.80072 5.7599 3.71376ZM7.52457 3.71376C7.52457 5.76109 5.83754 7.42753 3.76229 7.42753C1.68821 7.42753 0 5.76109 0 3.71376C0 1.66643 1.68821 0 3.76229 0C5.83754 0 7.52457 1.66643 7.52457 3.71376ZM20 3.714C20 3.23323 19.6047 2.84304 19.1177 2.84304H11.8825C11.3954 2.84304 11.0002 3.23323 11.0002 3.714C11.0002 4.19476 11.3954 4.58495 11.8825 4.58495H19.1177C19.6047 4.58495 20 4.19476 20 3.714ZM14.2397 15.2862C14.2397 16.3732 15.135 17.2581 16.2374 17.2581C17.3397 17.2581 18.235 16.3732 18.235 15.2862C18.235 14.1981 17.3397 13.3144 16.2374 13.3144C15.135 13.3144 14.2397 14.1981 14.2397 15.2862ZM12.4751 15.2862C12.4751 13.2377 14.1621 11.5725 16.2374 11.5725C18.3126 11.5725 19.9996 13.2377 19.9996 15.2862C19.9996 17.3336 18.3126 19 16.2374 19C14.1621 19 12.4751 17.3336 12.4751 15.2862ZM0.883161 14.4149H8.11715C8.6042 14.4149 8.99949 14.8051 8.99949 15.2859C8.99949 15.7667 8.6042 16.1568 8.11715 16.1568H0.883161C0.396111 16.1568 0.000823515 15.7667 0.000823515 15.2859C0.000823515 14.8051 0.396111 14.4149 0.883161 14.4149Z" fill="#603F8B"/>
                </svg>

            </div>
        </div>
        <!-- v-if="search != null" -->
        {{ searchTerm }}
        <div class="blogs-menu"  v-if="searchTerm == null" >
            <div class="each-menu" v-for="(blog, id) in blogs" :key="id" >
                <div class="each-menu-top">
                    
                    <img :src="blog.picture" alt="" class="svg" >
                </div>
                <div class="the-menu-bottom">
                    <p class="the-menu-bottom-p">{{ blog.pictitle }}</p>
                    <div class="bottom-blog">
                        <div class="bottom-blog1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 9.09H20.5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6937 13.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6937 16.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9945 13.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9945 16.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29529 13.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29529 16.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>24,Aug, 2021</p>
                        </div>
                        <div class="bottom-blog2"> 
                            <p>2 mins read</p>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
     
        <div class="blogs-menu" v-else >
            <div class="each-menu" v-for="(searchrespond, index) in searchresponds" :key="index">
                <div class="each-menu-top">
                    
                    <img :src="searchrespond.picture" alt="" class="svg" >
                </div>
                <div class="the-menu-bottom">
                    <p class="the-menu-bottom-p">{{ searchrespond.title }}</p>
                    <div class="bottom-blog">
                        <div class="bottom-blog1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M16 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M3.5 9.09H20.5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6937 13.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.6937 16.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9945 13.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11.9945 16.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29529 13.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.29529 16.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>24,Aug, 2021</p>
                        </div>
                        <div class="bottom-blog2"> 
                            <p>2 mins read</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="the-lowerbatch">
            <h3>Trending articles</h3>
            <div class="logos">
                <div class="blogs-menu1 logos-slide" >
                    <div class="each-menu1" v-for="(blog, id) in blogs" :key="id">
                    <div class="each-menu-top1">
                        <!-- <svg width="104" height="104" viewBox="0 0 104 104" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53.429 55.64C49.269 63.1367 41.5124 63.7867 36.139 57.07L35.1857 55.8567C29.5957 48.8367 21.709 49.7033 17.679 57.72L10.2257 72.67C5.02571 83.07 12.609 95.3333 24.2224 95.3333H79.5157C90.739 95.3333 98.3224 83.85 93.9024 73.4933L80.339 41.8167C75.7457 31.07 67.2957 30.6367 61.619 40.8633" stroke="white" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M43.207 21.6667C43.207 28.86 37.4004 34.6667 30.207 34.6667C23.0137 34.6667 17.207 28.86 17.207 21.6667C17.207 14.4733 23.0137 8.66667 30.207 8.66667C31.767 8.66667 33.2404 8.92667 34.5837 9.44667" stroke="white" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg> -->
                        <img :src="blog.picture" alt="" class="svg2" >
                    </div>
                    <div class="the-menu-bottom1">
                        <p class="the-menu-bottom-p1">{{ blog.pictitle }}</p>
                        <div class="bottom-blog5">
                            <div class="bottom-blog3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.5 9.09H20.5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.6937 13.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.6937 16.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9945 13.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9945 16.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.29529 13.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.29529 16.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>24,Aug, 2021</p>
                            </div>
                            <div class="bottom-blog4"> 
                                <p>2 mins read</p>
                            </div>
                        </div>
                    </div>
                    </div>
                          
                </div>
                <div class="blogs-menu1 logos-slide" >
                    <div class="each-menu1" v-for="(blog, id) in blogs" :key="id">
                    <div class="each-menu-top1" >
                        
                        <img :src="blog.picture" alt="" class="svg2" >
                    </div>
                    <div class="the-menu-bottom1">
                        <p class="the-menu-bottom-p1">{{ blog.pictitle }}</p>
                        <div class="bottom-blog5">
                            <div class="bottom-blog3">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 2V5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M3.5 9.09H20.5" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="#A6A6D2" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.6937 13.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.6937 16.7H15.7027" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9945 13.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9945 16.7H12.0035" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.29529 13.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.29529 16.7H8.30427" stroke="#A6A6D2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <p>24,Aug, 2021</p>
                            </div>
                            <div class="bottom-blog4"> 
                                <p>2 mins read</p>
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
.blogstartup{
    /* border:2px solid yellow; */
    padding:3%;
}
.blog-h3{
    /* border:2px solid green; */
    font-family: 'Recoleta Alt';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 49px;
/* identical to box height */

text-align: center;

color: #1E1E4B;
margin:0% 0% 5%;
}
.categories-and-filter{
    /* border:2px solid red; */
    width:23%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;

}
.categories{
    /* border:2px solid yellow; */
    border: 1px solid #B7B7D6;
border-radius: 6px;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:1rem;
  padding:15px;
  font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 25px;
display: flex;
align-items: center;

color: #603F8B;
}
.filter{
    /* border:2px solid yellow; */
    border: 1px solid #B7B7D6;
border-radius: 6px;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:1rem;
  font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 25px;
display: flex;
align-items: center;

color: #603F8B;
}
/* the each menu */
.blogs-menu{
    /* border:2px solid yellow; */
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:3rem;
    row-gap:5rem;
    margin-top:5%;


}
.each-menu{
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEEEFF;
    border-radius: 12px;
/* border: 1px solid #EEEEFF; */
/* border:2px solid yellow; */
border-radius: 12px;
box-sizing: border-box;
/* width:22%; */
}
.each-menu-top{
    /* border:2px solid green; */
    background: #B7B7D6;
   
border-radius: 6px;
display:flex;
justify-content:center;
align-content: center;
padding:0% 0;
height:250px;
width:90%;
margin:auto;

}
.each-menu-top .svg{
    width:100%;
  
    
    
  

    /* border:2px solid blue; */
}
.bottom-blog{
    /* border:2px solid red; */
    margin-top:10%;
    display:flex;
    justify-content:space-between;
    align-content: center;

}
.bottom-blog1{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    gap:1rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;

}

.bottom-blog-p{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;
}
.bottom-blog2 p{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding-right:5px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
    text-align: right;
    color: #1E1E4B;

}
.the-menu-bottom-p{
    
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* or 150% */
    color: #1E1E4B;
    /* border:2px solid yellow; */
    margin:5% 0;
    padding:0 5%;
}



/* the down menu */
.blogs-menu1{
    /* border:2px solid yellow; */
    display:grid;
    width:100%;
    grid-template-columns:  repeat(8, 1fr);
    gap: 1.6rem;
    row-gap:2rem;
}
.the-menu-bottom1{
    /* border:2px solid blue; */
    width:205px;
}
.each-menu1{
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEEEFF;
    border-radius: 12px;
/* border: 1px solid #EEEEFF; */
/* border:2px solid yellow; */
display:grid;
grid-template-columns: 1fr 1fr;
border-radius: 12px;
box-sizing: border-box;
/* width:22%; */
}
.each-menu-top1{
    /* border:2px solid green; */
    background: #B7B7D6;
    height:160px;
  
border-radius: 6px;
display:flex;
justify-content: center;
align-content: center;
padding:0% 0;
width:170px;
}
.each-menu-top1 .svg2{
    width:100%;
    /* border:2px solid blue; */
}
.bottom-blog5{
    /* border:2px solid red; */
    margin-top:0%;
    display:grid;
    grid-template-columns: 2fr 1fr;
    /* justify-content:flex-start; */
    /* align-content: center; */

}
.bottom-blog3{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    gap:0rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 10px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;

}

.bottom-blog-p1{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
   
    /* identical to box height, or 188% */
    color: #A6A6D2;
}
.bottom-blog4 p{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding-right:5px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 10px;
    line-height: 30px;
    
    /* identical to box height, or 188% */
    text-align: right;
    color: #1E1E4B;

}
.the-menu-bottom-p1{
    
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 12px;
    line-height: 30px;
    /* or 150% */
    color: #1E1E4B;
    /* border:2px solid yellow; */
    height:110px;
    width:90%;
    margin-left:5%;
    white-space: wrap;
    padding:0 3%;
    margin:5% 0;
}
/* the lower batch side  */
.the-lowerbatch{
    /* border:2px solid green; */
    margin:3% 0;
}
.the-lowerbatch h3{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 40px;

color: #1E1E4B;
margin:5% 0;
}
.logos{
    /* border:2px solid green; */
    display:flex;
    gap:1rem;
    /* box-sizing: border-box; */
    overflow:hidden;
    white-space: nowrap;
    padding:10px 0; 
}
.logos:hover .logos-slide{
    animation-play-state:paused;
}
.logos-slide{
    animation:5s slide infinite linear;
    /* border:2px solid yellow; */
}
@keyframes slide{
    from{
        transform:translateX(0)

    }
    to{
        transform: translateX(-100%);

    }
}

@media screen and (max-width: 900px){
    .blogs-menu{
    /* border:2px solid yellow; */
    display:grid;
    grid-template-columns:  1fr;
    gap:7rem;
    row-gap:5rem;
    margin-top:5%;


}

/* start */
.blog-h3{
    /* border:2px solid green; */
    font-family: 'Recoleta Alt';
font-style: normal;
font-weight: 600;
font-size: 36px;
line-height: 49px;
/* identical to box height */

text-align: center;

color: #1E1E4B;
margin:0% 0% 5%;
}
.categories-and-filter{
    /* border:2px solid red; */
    width:100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    gap:1rem;

}
.categories{
    /* border:2px solid yellow; */
    border: 1px solid #B7B7D6;
border-radius: 6px;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:1rem;
  padding:15px;
  font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 25px;
display: flex;
align-items: center;

color: #603F8B;
}
.filter{
    /* border:2px solid yellow; */
    border: 1px solid #B7B7D6;
border-radius: 6px;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:1rem;
  font-family: 'Circular Std';
font-style: normal;
font-weight: 450;
font-size: 20px;
line-height: 25px;
display: flex;
align-items: center;

color: #603F8B;
}
/* the each menu */
.blogs-menu{
    /* border:2px solid yellow; */
    display:grid;
    grid-template-columns:  1fr;
    gap:7rem;
    row-gap:5rem;
    margin-top:5%;


}
.each-menu{
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEEEFF;
    border-radius: 12px;
/* border: 1px solid #EEEEFF; */
/* border:2px solid yellow; */
border-radius: 12px;
box-sizing: border-box;
/* width:22%; */
}
.each-menu-top{
    /* border:2px solid green; */
    background: #B7B7D6;
border-radius: 6px;
display:flex;
justify-content: center;
align-content: center;
padding:10% 0;
width:90%;
margin:auto;
}
.each-menu-top svg{
    width:30%;
    /* border:2px solid blue; */
}
.bottom-blog{
    /* border:2px solid red; */
    margin-top:10%;
    
    display:flex;
    justify-content:center;
    align-content: center;

}
.bottom-blog1{
    /* border:2px solid red; */
    display:flex;
    justify-content: center;
    align-items: center;
    gap:0rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;

}

.bottom-blog-p{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;
}
.bottom-blog2 p{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding-right:5px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
    text-align: right;
    color: #1E1E4B;

}
.the-menu-bottom-p{
    
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 17px;
    line-height: 30px;
    /* or 150% */
    color: #1E1E4B;
    /* border:2px solid yellow; */
    margin:5% 0;
    }
/* the down menu */
.blogs-menu1{
    /* border:2px solid yellow; */
    display:grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    row-gap:2rem;
}
/* .the-menu-bottom1{
    border:2px solid blue;
} */
.each-menu1{
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEEEFF;
    border-radius: 12px;
/* border: 1px solid #EEEEFF; */
/* border:2px solid yellow; */
display:grid;
grid-template-columns: 1fr 1fr;
border-radius: 12px;
box-sizing: border-box;
/* width:22%; */
}
.each-menu-top1{
    /* border:2px solid green; */
    background: #B7B7D6;
    height:150px;
border-radius: 6px;
display:flex;
justify-content: center;
align-content: center;
padding:0% 0;
}
.each-menu-top1 svg{
    width:25%;
    /* border:2px solid blue; */
}
.bottom-blog1{
    /* border:2px solid red; */
    margin-top:0%;
    display:grid;
    grid-template-columns: 2fr 1fr;
    /* justify-content:flex-start; */
    /* align-content: center; */

}
.bottom-blog3{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    gap:0rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 10px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;

}

.bottom-blog-p1{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;
}
.bottom-blog4 p{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding-right:5px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 10px;
    line-height: 30px;
    
    /* identical to box height, or 188% */
    text-align: right;
    color: #1E1E4B;

}
.the-menu-bottom-p1{
    
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 13px;
    line-height: 30px;
    /* or 150% */
    color: #1E1E4B;
    /* border:2px solid yellow; */
    margin:5% 0;
    }
.the-lowerbatch{
    /* border:2px solid green; */
    margin:3% 0;
}
.the-lowerbatch h3{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 40px;

color: #1E1E4B;
margin:5% 0;
}


/* slide */
.blogs-menu1{
    /* border:2px solid yellow; */
    display:grid;
    width:100%;
    grid-template-columns:  repeat(8, 1fr);
    gap: 1.6rem;
    row-gap:2rem;
}
.the-menu-bottom1{
    /* border:2px solid blue; */
    width:205px;
}
.each-menu1{
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #EEEEFF;
    border-radius: 12px;
/* border: 1px solid #EEEEFF; */
/* border:2px solid yellow; */
display:grid;
grid-template-columns: 1fr 1fr;
border-radius: 12px;
box-sizing: border-box;
/* width:22%; */
}
.each-menu-top1{
    /* border:2px solid green; */
    background: #B7B7D6;
    height:160px;
  
border-radius: 6px;
display:flex;
justify-content: center;
align-content: center;
padding:0% 0;
width:170px;
}
.each-menu-top1 .svg2{
    width:100%;
    /* border:2px solid blue; */
}
.bottom-blog5{
    /* border:2px solid red; */
    margin-top:0%;
    display:grid;
    grid-template-columns: 2fr 1fr;
    /* justify-content:flex-start; */
    /* align-content: center; */

}
.bottom-blog3{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    gap:0rem;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 10px;
    line-height: 30px;
    /* identical to box height, or 188% */
    color: #A6A6D2;

}

.bottom-blog-p1{
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 16px;
    line-height: 30px;
   
    /* identical to box height, or 188% */
    color: #A6A6D2;
}
.bottom-blog4 p{
    /* border:2px solid yellow; */
    display:flex;
    justify-content: center;
    align-items: center;
    padding-right:5px;
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 10px;
    line-height: 30px;
    
    /* identical to box height, or 188% */
    text-align: right;
    color: #1E1E4B;

}
.the-menu-bottom-p1{
    
    font-family: 'Circular Std';
    font-style: normal;
    font-weight: 450;
    font-size: 8px;
    line-height: 30px;
    /* or 150% */
    color: #1E1E4B;
    /* border:2px solid yellow; */
    height:110px;
    width:90%;
    margin-left:5%;
    white-space: wrap;
    padding:0 3%;
    margin:5% 0;
}
/* the lower batch side  */
.the-lowerbatch{
    /* border:2px solid green; */
    margin:3% 0;
}
.the-lowerbatch h3{
    /* border:2px solid yellow; */
    font-family: 'Circular Std';
font-style: normal;
font-weight: 500;
font-size: 32px;
line-height: 40px;

color: #1E1E4B;
margin:5% 0;
}
.logos{
    /* border:2px solid green; */
    display:flex;
    gap:1rem;
    /* box-sizing: border-box; */
    overflow:hidden;
    white-space: nowrap;
    padding:10px 0; 
}
.logos:hover .logos-slide{
    animation-play-state:paused;
}
.logos-slide{
    animation:5s slide infinite linear;
    /* border:2px solid yellow; */
}
@keyframes slide{
    from{
        transform:translateX(0)

    }
    to{
        transform: translateX(-100%);

    }
}

}
</style>