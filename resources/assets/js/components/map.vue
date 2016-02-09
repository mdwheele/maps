<template>
    <div class="Map" v-el:map></div>
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
                    zoom: 16,
                    center: { lat: 35.782, lng: -78.675 },
                    disableDefaultUI: true,
                });
            }
        }
    }
</script>

<style lang="scss">
    .Map {
        display: block;
        width: 100%;
        height: 100%;
    }
</style>