<template>
    <div class="Search" v-if="!active">
        <span class="input-group-btn">
            <button class="btn btn-secondary" type="button" @click="openMenu"><i class="fa fa-bars"></i></button>
        </span>
        <input class="Search__input" type="text" @click="open" placeholder="Search NC State Maps">
        <span class="Search__submit">
            <button class="btn btn-secondary" @click="open" type="button"><i class="fa fa-search"></i></button>
        </span>
    </div>

    <div class="SearchOverlay" v-if="active">
        <form class="SearchOverlay__Form" @submit.prevent="search">
            <input type="text" v-model="query" placeholder="Search..." v-focus>
        </form>

        <div class="SearchOverlay__Content">
            <div class="SearchOverlay__Column">
                <h2>People</h2>
                <a class="SearchOverlay__Media" href="#">
                    <img src="http://placehold.it/50x50" alt="TooltipStylesInspiration"/>
                    <h3>Joshua Page</h3>
                </a>
                <a class="SearchOverlay__Media" href="#">
                    <img src="http://placehold.it/50x50" alt="TooltipStylesInspiration"/>
                    <h3>Page Halloway</h3>
                </a>
                <a class="SearchOverlay__Media" href="#">
                    <img src="http://placehold.it/50x50" alt="TooltipStylesInspiration"/>
                    <h3>Andrew Page</h3>
                </a>
                <a class="SearchOverlay__Media" href="#">
                    <img src="http://placehold.it/50x50" alt="TooltipStylesInspiration"/>
                    <h3>Griffin Page</h3>
                </a>
            </div>
            <div class="SearchOverlay__Column">
                <h2>Buildings</h2>
                <a class="SearchOverlay__Media" href="#" v-for="n in 1">
                    <img src="http://placehold.it/50x50" alt="TooltipStylesInspiration"/>
                    <h3>Page Hall</h3>
                </a>
            </div>
        </div>

        <span class="SearchOverlay__Close" @click="close"><i class="fa fa-times"></i></span>
    </div>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                active: false,
                query: ''
            }
        },

        methods: {
            search() {
                console.info('Searching for ' + this.query);
                this.close();
            },

            open() {
                this.active = true;
                this.$root.$broadcast('open-search-pressed');
            },

            close() {
                this.active = false;
                this.query = '';
                this.$root.$broadcast('close-search-pressed');
            },

            openMenu() {
                this.$root.$broadcast('open-menu-pressed')
            }
        }
    }
</script>

<style lang="sass" rel="stylesheet/scss">
    @import 'bootstrap/scss/bootstrap';
    @import "include-media/dist/include-media";

    .Search {
        @extend .input-group;

        position: absolute;
        z-index: 2;
        width: 380px;
        top: 10px;
        left: 10px;

        @include media('<=400px') {
            width: calc(100% - 20px);
        }

        &__input {
            @extend .form-control;

            font-size: 14px;
            padding: 8px 7px 7px 10px;

            @include hover-focus-active {
                border-color: $btn-secondary-border;
                border-right-color: transparent;
            }
        }

        &__submit {
            @extend .input-group-btn;

            button {
                border-left: none;
                left: -2px;
            }
        }

        input, button {
            @include plain-hover-focus {
                outline: none;
                @include box-shadow(none);
            }
        }
    }

    .SearchOverlay {
        position: absolute;
        width: 100vw;
        height: 100vh;
        overflow: scroll;
        z-index: 3;
        background: rgba(0,0,0,0.65);

        &__Close {
            position: absolute;
            top: 0.5em; right: 1em;
            color: #ffffff;
            font-size: 40px;
        }

        &__Form {
            width: 80%;
            height: 140px;
            margin: 0 auto;
            transform: translate3d(0, 2em, 0);

            input {
                width: 100%;
                height: 100%;
                padding: 0 10% 0 10px;
                font-weight: bold;
                border: none;
                background: transparent;
                font-size: 7em;
                color: #fff;
                transition: font-size 0.5s cubic-bezier(0.7,0,0.3,1);

                &:active {
                    border: none;
                }

                &:focus {
                    line-height: 1.5em;
                }

                @media screen and (max-width: 53.125em) {
                    font-size: 2em;
                    padding: 0 25% 0 10px;
                }
            }
        }

        &__Content {
            color: #333;
            margin-top: 4em;
            width: 100%;
            overflow: hidden;
            padding: 0 10.5%;
        }

        &__Column {
            width: 30%;
            padding: 0 0 6em;
            float: left;

            &:first-child {
                transition-delay: 0.4s;
            }

            &:nth-child(2) {
                transition-delay: 0.4s;
                margin: 0 5%;

                @media screen and (max-width: 53.125em) {
                    margin: 0;
                }
            }

            &:nth-child(3) {
                transition-delay: 0.4s;
            }

            h2 {
                font-size: 1em;
                letter-spacing: 1px;
                text-transform: uppercase;
                font-weight: bold;
                color: #ffffff;
                padding: 0.5em 0;
            }
            
            @media screen and (max-width: 53.125em) {
                float: none;
                width: auto;
                padding: 0 0 2em;
            }
        }

        &__Media {
            padding: 0.75em;
            display: block;
            margin: 0.3em 0;
            cursor: pointer;
            border-radius: 5px;
            background: rgba(118,117,128,0.5);

            &:hover, &:focus {
                background: rgba(118,117,128,0.8);
            }

            img {
                display: inline-block;
                width: 50px;
                margin: 0 10px 0 0;
                vertical-align: middle;
            }

            h3 {
                vertical-align: middle;
                font-size: 0.85em;
                display: inline-block;
                margin: 0;
                width: calc(100% - 70px);
                color: rgba(255,255,255,0.7);

                &:hover {
                    color: rgba(255,255,255,1);
                }
            }
        }
    }
</style>