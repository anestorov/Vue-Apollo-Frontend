<template>
    <v-container>
        <v-row>
            <v-col></v-col>
        </v-row>
        <v-row>
            <v-col align="center">
                <v-card width="400">
                    <v-card-title>Log In</v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-row dense>
                                <v-col>
                                    <v-text-field label="username" outlined v-model="username"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row dense>
                                <v-col>
                                    <v-text-field
                                        label="password"
                                        type="password"
                                        outlined
                                        v-model="password"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                        </v-form>
                        <v-alert v-model="alert" type="error" outlined dense>Invalid Login !</v-alert>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer />
                        <v-btn outlined @click="logIn()">Log In</v-btn>
                        <v-spacer />
                        <v-btn outlined>Cancel</v-btn>
                        <v-spacer />
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import gql from "graphql-tag";
import { onLogin } from "@/vue-apollo";
export default {
    data() {
        return {
            username: null,
            password: null,
            alert: null,
        };
    },
    methods: {
        logIn() {
            this.alert = false;
            this.$apollo
                .query({
                    query: gql`
                    {
                        logIn(username:"${this.username}",password:"${this.password}") {
                            token
                        }
                    }
                `,
                    fetchPolicy: "no-cache",
                })

                .then(({ data }) => {
                    if (data?.logIn?.token) {
                        console.log(this.$apollo);
                        onLogin(
                            this.$apollo?.provider?.clients?.defaultClient,
                            data?.logIn?.token
                        ).then(() => {
                            let goto = localStorage.getItem("last-page");
                            if (goto) this.$router.push(goto);
                        });
                    } else this.alert = true;
                })
                .catch(() => {
                    this.alert = true;
                });
        },
    },
};
</script>