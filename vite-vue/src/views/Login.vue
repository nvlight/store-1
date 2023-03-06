<template>
    <h1>view/Login</h1>
    <div class="bg-purple-500">
        <h1 class="text-3xl text-white font-bold">
            Hello {{ store.state.user.name }} !
        </h1>
        <h1 class="text-3xl text-white font-bold">
            Email: {{ email }}
        </h1>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import store from "../store/index.js";

const email = computed( () => store.state.user.email )

</script>

<style scoped>

</style>
