var dead_js_utilities_storage = {
    /**
     * Get storage
     */
    get_storage: function () {
        // Local
        // Storages.localStorage

        // Session
        // Storages.sessionStorage

        // Cookie (only if js-cookie added)
        // Storages.cookieStorage

        return Storages.localStorage;
    },

    /**
     * Get
     * storage.get('foo') // Return storage.foo
     * storage.get('foo.foo2.foo3...') // Return storage.foo.foo2.foo3...
     * storage.get('foo','foo2','foo3'...) // Return storage.foo.foo2.foo3...
     * storage.get(['foo','foo2']) // Return {foo:storage.foo,foo2:storage.foo2}
     */
    get: function (k) {
        var storage = this.get_storage();

        return storage.get(k);
    },

    /**
     * Set
     * storage.set('foo','value') // Set storage.foo to "value"
     * storage.set('foo.foo2.foo3...','value') // Set storage.foo.foo2.foo3... to "value"
     * storage.set('foo','foo2','foo3'...,'value') // Set storage.foo.foo2.foo3... to "value"
     * storage.set({'foo':'value','foo2':'value2'}) // Set storage.foo to "value" and storage.foo2 to "value2"
     */
    set: function (k, v) {
        var storage = this.get_storage();

        storage.set(k, v);
    },

    /**
     * Keys
     */
    keys: function () {
        var storage = this.get_storage();

        return storage.keys();
    },

    /**
     * Has value
     */
    has_value: function (k) {
        var storage = this.get_storage();

        return !storage.isEmpty(k);
    },

    /**
     * Exists
     */
    exists: function (k) {
        var storage = this.get_storage();

        return storage.isSet(k);
    },

    /**
     * Remove
     */
    remove: function (k) {
        var storage = this.get_storage();

        return storage.remove(k);
    }
};
