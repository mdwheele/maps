<template>
    <map></map>
</template>

<script type="text/babel">
    import map from './map.vue';

    export default {
        replace: false,

        components: { map },

        methods: {
            init() {
                this.$broadcast('MapsApiLoaded');
            }
        }
    }
</script>

<style lang="scss">
    #map {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>