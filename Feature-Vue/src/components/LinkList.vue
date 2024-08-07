<template>  
        <ul>
            <li v-for="(nav, index) in navData" :key="index" ><a :href="nav.navUrl" >{{ nav.navText }}</a></li>
        </ul>  
</template>

<script setup>
   defineProps(["navData"])

</script>

<style lang="scss" scoped>
li {
    list-style-type: none;
    background-color: white;

    a {
       display: block;
       text-decoration: none;
       padding: 1rem;
       font-size: 1.5rem;
       
    }
}
</style>