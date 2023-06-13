<template>
    <div class="popup">
        <div class="popup-inner">
            <slot />
            <button @click="TogglePopup()" class="popup-close">close popup</button>
        </div>
    </div>
    
</template>

<script>
export default{
    props: ['TogglePopup']
}


</script>
<style>
.popup{
    position:fixed;
    left:0;
    right:0;
    top:0;
    bottom:0;
    z-index:99;
    background-color:rgba(0, 0, 0, 0.2);
    /* border:2px solid green; */
    display:flex;
    align-items:center;
    justify-content:center;
}
.popup-inner{
    background: white;
    padding:42px;
}
@media screen and (max-width: 900px){
    .popup{
    position:fixed;
    left:0;
    right:0;
    top:0%;
    bottom:0;
    z-index:99;
    background-color:rgba(0, 0, 0, 0.2);
    /* border:2px solid blue; */
    display:flex;
    align-items:center;
    justify-content:center;
}
.popup-inner{
    background: white;
    padding:42px;
    /* border:2px solid yellow; */
}
}
</style>