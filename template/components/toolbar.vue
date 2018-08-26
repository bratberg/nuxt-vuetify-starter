<template>
    <v-toolbar :clipped-left="clipped"
        color="primary"
        dense dark fixed app>
        <v-toolbar-side-icon @click="toggleLeftMenu" />

        <v-btn icon @click.stop="toggleMiniMenu">
            <v-icon v-html="miniMenu ? 'chevron_right' : 'chevron_left'" />
        </v-btn>

        <v-btn icon @click.stop="toggleClipMenu">
            <v-icon>web</v-icon>
        </v-btn>

        <v-btn icon @click.stop="toggleFixedFooter">
            <v-icon>remove</v-icon>
        </v-btn>

        <v-toolbar-title v-text="title" />

        <v-spacer />

        <v-btn icon @click.stop="toggleDark">
            <v-icon>invert_colors</v-icon>
        </v-btn>

        <v-btn icon @click.stop="toggleRightMenu">
            <v-icon>menu</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
    import { mapMutations, mapState } from 'vuex'

    export default {
        name: 'toolbar',

        props: [
            'title',
        ],

        data() {
            return {
                miniVariant: false,
                clipped: false,
            }
        },

        methods: {
            ...mapMutations({
                toggleLeftMenu: 'TOGGLE_showLeftMenu',
                toggleRightMenu: 'TOGGLE_showRightMenu',

                toggleDark: 'TOGGLE_dark',
                
                toggleMiniMenu: 'TOGGLE_miniMenu',
                toggleClipMenu: 'TOGGLE_clipMenu',

                toggleFixedFooter: 'TOGGLE_fixedFooter',
            }),
        },

        computed: {
            ...mapState({
                miniMenu: 'miniMenu',
            }),
        },

    }
</script>
