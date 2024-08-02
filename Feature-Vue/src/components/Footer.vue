<template>
    <footer>
        <h1>Sources:</h1>
        <hr>
        <slot />
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
@import '../assets/mixins.scss';
    footer {
        position: absolute;
        bottom:0;
        width: 100vw;
        background-color: #2c3e50;
        color: white;
        @include respond(tab-land) {
            display: none;
        }
        @include respond(tab-port) {
            display: none;
        }
        @include respond(phone) {
            display: none;
            
        }
        h1{
            position: absolute;
            top:.2rem;
            left:3.5rem;
        }
        hr {
            position: absolute;
            top:2.6rem;
            left:3.5rem;
            color: white;
            width:78vw;
            margin: 0 auto;
            font-size: .01rem;
        @include respond(big-desktop){
            width:54vw;
        }
        @include respond(desktop) {
           width:80vw;
        }
        }
        ul {
            margin-top: 3rem;
            li {
                list-style-type: none;
                text-align: left;
                margin:1rem;
                a {
                    color: white;
                    text-decoration: none;
                    font-size: .9rem;
                }
            }
        }
    }
</style>