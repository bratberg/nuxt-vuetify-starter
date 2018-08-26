<template>
    <v-app :dark="dark">

        <!-- Left Nav -->
        <v-navigation-drawer
            :mini-variant.sync="miniMenu"
            :clipped="clipMenu"
            :value = "showLeftMenu"
            @input="updateLeftMenu"
            fixed app>
            <v-list>
                <v-list-tile
                    router
                    :to="item.to"
                    :key="i"
                    v-for="(item, i) in items"
                    exact>
                    <v-list-tile-action>
                        <v-icon v-html="item.icon" />
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title v-text="item.title" />
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <!-- Toolbar -->
        <toolbar :title="title" />

        <!-- Content -->
        <v-content>
            <v-container>
                <nuxt />
            </v-container>
        </v-content>

        <!-- Right Nav -->
        <v-navigation-drawer
            :right="right"
            :value="showRightMenu"
            @input="updateRightMenu"
            fixed temporary>
            <v-list>
                <v-list-tile @click.native="right = !right">
                    <v-list-tile-action>
                        <v-icon light>compare_arrows</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>

        <!-- Footer -->
        <v-footer :fixed="fixedFooter" app>
            <v-flex px-3>
                <span v-text="`© ${ new Date().getFullYear() }`" />
            </v-flex>
        </v-footer>

    </v-app>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import toolbar from '~/components/toolbar'

    export default {
        components: {
            toolbar,
        },

        data () {
            return {
                title: 'Template',
                items: [
                    { icon: 'apps', title: 'Welcome', to: '/' },
                    { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' },
                ],
                right: true,
            }
        },

        methods: {
            ...mapMutations({
                setRightMenu: 'SET_showRightMenu',
                setLeftMenu: 'SET_showLeftMenu',
            }),
            updateLeftMenu (state) { if (!state) this.setLeftMenu(false) },
            updateRightMenu (state) { if (!state) this.setRightMenu(false) },
        },

        computed: {
            ...mapState({
                dark: 'dark',
                showLeftMenu: 'showLeftMenu',
                showRightMenu: 'showRightMenu',
                miniMenu: 'miniMenu',
                clipMenu: 'clipMenu',
                fixedFooter: 'fixedFooter',
            }),
        },
    }
</script>
