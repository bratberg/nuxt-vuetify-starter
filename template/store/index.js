import { toggle, set } from '../assets/js/helpers';

export const state = () => ({
    dark: false,
    showLeftMenu: false,
    showRightMenu: false,
    miniMenu: false,
    clipMenu: false,
    fixedFooter: true,
});

export const mutations = {
    SET_showLeftMenu: set('showLeftMenu'),
    SET_showRightMenu: set('showRightMenu'),

    TOGGLE_dark: toggle('dark'),
    TOGGLE_miniMenu: toggle('miniMenu'),
    TOGGLE_clipMenu: toggle('clipMenu'),
    TOGGLE_fixedFooter: toggle('fixedFooter'),
};
