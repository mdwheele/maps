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

    /**
     * Vue directive to focus on an element when component
     * finishes loading.
     */
    Vue.directive('focus', function() {
        var el = this.el;
        Vue.nextTick(() => el.focus());
    });

    /**
     * Vue filter to truncate a string to the specified length.
     * @param {String} value The value string.
     */
    Vue.filter('truncate', function(value, length) {
        if(value.length < length) {
            return value;
        }

        length = length - 3;

        return value.substring(0, length) + '...';
    });
</script>

<style lang="scss">
</style>