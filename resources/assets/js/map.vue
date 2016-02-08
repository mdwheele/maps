<template>
    <div id="map" v-el:map></div>
</template>

<script type="text/babel">
    export default {
        events: {
            MapsApiLoaded() {
                console.info('Initializing Maps');
                this.createMap();
            }
        },

        methods: {
            createMap() {
                this.map = new google.maps.Map(this.$els.map, {
                    zoom: 14,
                    center: { lat: 42, lng: -85 },
                    disableDefaultUI: true,
                });
            }
        }
    }
</script>

<style lang="scss">
</style>