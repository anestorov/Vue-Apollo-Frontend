<template>
    <v-navigation-drawer width="200" dark color="primary" clipped app expand-on-hover>
        <v-list nav dense>
            <v-list-item to="/">
                <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
                <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
            <v-list-item to="/about">
                <v-list-item-icon><v-icon>mdi-information</v-icon></v-list-item-icon>
                <v-list-item-title>About</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
