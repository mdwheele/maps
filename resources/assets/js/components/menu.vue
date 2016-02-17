<template>
    <div class="Menu" v-bind:class="active ? 'active' : ''">
        <h3>Campus Maps</h3>
        <nav>
            <ul class="nav">
                <li><a href="#"><i class="fa fa-map-o"></i> Map</a></li>
                <li><a href="#"><i class="fa fa-building-o"></i> Buildings</a></li>
                <li><a href="#"><i class="fa fa-car"></i> Parking</a></li>
                <li><a href="#"><i class="fa fa-print"></i> Printable Maps</a></li>
            </ul>
        </nav>
        <span class="Menu__close" @click="close"><i class="fa fa-times"></i></span>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                active: false
            }
        },

        methods: {
            open() {
                this.active = true;
            },

            close() {
                this.active = false;
            }
        },

        events: {
            'open-search-pressed': function() {
                this.close();
            },

            'open-menu-pressed': function() {
                this.open();
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    @import "include-media/dist/include-media";

    .Menu {
        position: absolute;
        z-index: 3;
        top: 0; bottom: 0;
        height: 100%;
        left: -320px;
        width: 320px;
        transform: translate(0, 0);
        transition: 0.25s ease;
        background: #fff;
        box-shadow: 0 -1px 24px rgba(0,0,0,0.4);

        &.active {
            transform: translate(320px, 0);
        }

        &__close {
            position: absolute;
            top: 7px;
            right: 15px;
            font-size: 1.7em;
            color: #888;
            cursor: pointer;
        }

        h3 {
            color: #888;
            border-bottom: 1px solid #d9d9d9;
            font-size: 1.4em;
            padding: 17px 20px 16px;
        }

        nav {
            padding: 10px;

            li {
                a {
                    i.fa {
                        width: 10%;
                        font-size: 1.3em;
                        text-align: center;
                    }

                    display: block;
                    padding: 10px;
                    color: #777;
                    font-size: 13px;
                    text-decoration: none;
                    transition: 0.1s ease;

                    &:hover {
                        color: #c00;
                    }
                }
            }
        }
    }
</style>