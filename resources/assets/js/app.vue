<template>
    <menu></menu>
    <search></search>
    <map></map>
</template>

<script type="text/babel">
    import Map from './components/Map.vue';
    import Search from './components/Search.vue';
    import Menu from './components/Menu.vue';

    export default {
        replace: false,

        components: { Map, Search, Menu },

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