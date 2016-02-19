import Fuse from 'fuse.js';
import Vue from 'vue';

export default {

    /**
     * @param {String} term
     * @return {Object}
     */
    buildingsMatching(term) {
        return new Promise((resolve, reject) => {
            Vue.http.get('https://maps.ncsu.edu/api/buildings', null, {
                params: {
                    q: term,
                    limit: 0
                }
            }).then((response) => {
                var response = response.data;

                var data = response.items.map((current, index, array) => {
                    return {
                        id: current.facilities_id,
                        name: current.display_name,
                        abbr: current.abbreviation,
                        street: current.street
                    }
                });

                var index = new Fuse(data, {
                    keys: ['name', 'abbr', 'street'],
                    threshold: 0.5
                });

                resolve(index.search(term).slice(0, 10));
            });
        });
    }
};