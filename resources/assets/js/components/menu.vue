<template>
    <div class="Menu" v-bind:class="active ? 'active' : ''">
        <h3>Menu</h3>
        <nav>
            <ul class="nav">
                <li><a href="#">Some</a></li>
                <li><a href="#">Relevant</a></li>
                <li><a href="#">Navigation</a></li>
                <li><a href="#">Items</a></li>
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
        left: -15.625em;
        width: 15.625em;
        transform: translate(0, 0);
        transition: 0.25s ease;
        background: #0c0c0c;
        padding: 15px 20px 0;

        &.active {
            transform: translate(15.625em, 0);

            @include media('<=400px') {
                width: 300px;
            }
        }

        &__close {
            position: absolute;
            top: 3px;
            right: 15px;
            font-size: 2em;
            color: #777;
            cursor: pointer;
        }

        h3 {
            color: #777;
            text-transform: uppercase;
            border-bottom: 1px solid #777;
            font-size: 1.4em;
            padding-bottom: 10px;
        }

        nav {
            li {
                a {
                    display: block;
                    padding: 10px;
                    margin-bottom: 8px;
                    color: #777;
                    text-decoration: none;
                    transition: 0.1s ease;
                    border-radius: 3px;

                    &:hover {
                        color: #fff;
                        background: #222
                    }
                }
            }
        }
    }
</style>