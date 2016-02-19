<template>
    <div class="Search">
        <div class="Search__Controls">
            <span class="input-group-btn">
                <button class="btn btn-secondary" type="button" @click="openMenu"><i class="fa fa-bars"></i></button>
            </span>
            <form @submit.prevent="search">
                <input class="Search__input" v-model="query" type="text" placeholder="Search NC State Maps">
            </form>
            <span class="Search__submit">
                <button class="btn btn-secondary" @click="search" type="button">
                    <i class="fa fa-search" v-if="!searching"></i>
                    <i class="fa fa-spinner fa-spin" v-if="searching"></i>
                </button>
            </span>
        </div>

        <div class="Search__Suggestions" v-if="active">
            <ul>
                <li class="Search__Suggestion" v-for="result in results" @click="close">
                    <i class="fa fa-map-marker"></i> {{ result.name | truncate 40 }}
                </li>
            </ul>
        </div>
    </div>

</template>

<script type="text/babel">
    import api from '../services/CampusMapApi.js'

    export default {
        data() {
            return {
                active: false,
                searching: false,
                query: '',
                results: []
            }
        },

        watch: {
            query(val, oldValue) {
                if (val.length < 3) {
                    this.close();
                    return;
                }

                this.search();
            }
        },

        methods: {
            search() {
                this.searching = true;

                api.buildingsMatching(this.query)
                    .then((results) => {
                        this.open();
                        this.searching = false;
                        this.results = results;
                    });
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
        position: absolute;
        z-index: 2;
        width: 380px;
        top: 10px;
        left: 10px;

        @include media('<=400px') {
            width: calc(100% - 20px);
        }

        &__Controls {
            @extend .input-group;
        }

        &__input {
            @extend .form-control;

            appearance: none;

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

        &__Suggestions {
            background: #fff;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px;
            border: 1px solid $btn-secondary-border;
            border-top-color: transparent;
            width: calc(100% - 2px);

            ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }
        }

        &__Suggestion {
            padding: 10px;
            cursor: pointer;

            i {
                font-size: 14pt;
                padding: 0 15px 0 8px;
            }

            @include hover {
                color: #ffffff;
                background-color: $btn-primary-bg;
            }
        }
    }
</style>