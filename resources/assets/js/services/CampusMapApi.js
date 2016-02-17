import Fuse from 'fuse.js';

export default {

    /**
     * @param {String} term
     * @return {Object}
     */
    buildingsMatching(term) {
        var data = require('./data.json').map((current, index, array) => {
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

        var results = index.search(term).slice(0, 10);

        return new Promise((resolve, reject) => {
            // Stubbed to create async behaviour.
            resolve(results);
        })
    }

};