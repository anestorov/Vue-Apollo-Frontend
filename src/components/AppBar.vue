<template>
    <v-app-bar app color="primary" dark dense clipped-left>
        NandTech LTD
        <v-spacer></v-spacer>

        <v-btn @click="logOut" outlined>
            <v-icon>mdi-logout</v-icon>Log Out
        </v-btn>
    </v-app-bar>
</template>
<script>
import { onLogout } from "@/vue-apollo";
export default {
    methods: {
        logOut() {
            onLogout(this.$apollo?.provider?.clients?.defaultClient).then(
                () => {
                    this.$router.push("/login");
                }
            );
        },
    },
};
</script>