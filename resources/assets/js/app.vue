<template>
    <search></search>
    <map></map>
</template>

<script type="text/babel">
    import map from './components/map.vue';
    import search from './components/search.vue';

    export default {
        replace: false,

        components: { map, search },

        methods: {
            init() {
                this.$broadcast('MapsApiLoaded');
            }
        }
    }
</script>

<style lang="scss">
</style>