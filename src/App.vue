<template>
    <v-app>
        <AppBar />
        <NavBar />
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import NavBar from "./components/NavBar.vue";
export default {
    name: "App",
    components: { AppBar, NavBar },
    data: () => ({
        //
    }),
};
</script>
