<template>
    <menu></menu>
    <search></search>
    <map></map>
</template>

<script type="text/babel">
    import map from './components/map.vue';
    import search from './components/search.vue';
    import menu from './components/menu.vue';

    export default {
        replace: false,

        components: { map, search, menu },

        methods: {
            init() {
                this.$broadcast('MapsApiLoaded');
            }
        }
    }

    Vue.directive('focus', function() {
        var el = this.el;
        Vue.nextTick(() => el.focus());
    });
</script>

<style lang="scss">
</style>