<template>
    <v-container>
        <v-card>
            <v-card-text>
                <ul>
                    <li v-for="(post,k) in postsCreated" :key="k">{{post.author}} / {{post.comment}}</li>
                </ul>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col>
                        <v-text-field label="author" v-model="author"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-text-field label="comment" v-model="comment"></v-text-field>
                    </v-col>
                    <v-col>
                        <v-btn @click="send()">SEND</v-btn>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import MM from "../graphql/MyMutation.gql"
import MyS from "../graphql/MyS.gql";
export default {
    name: "Home",
    data() {
        return {
            books: [],
            postsCreated: [],
            author:null,
            comment:null,

        };
    },
    methods: {
        send() {
            this.$apollo.mutate({
                mutation:MM,
                variables: {
                    makePostAuthor : this.author,
                    makePostComment : this.comment,
                }
            })
        }
    },
    apollo: {
        //books: {
        //query: MyQ,
        //},
        $subscribe: {
            postCreated: {
                query: MyS,
                result({ data }) {
                    this.postsCreated.push(data.postCreated);
                },
            },
        },
    },
};
</script>
