var dead_js_utilities_container = {
    /**
     * Get key
     */
    get_key: function() {
        return "dead-js-utilities-container-key";
    },

    /**
     * Get container
     */
    get_container: function() {
        return $("#dead-container");
    },

    /**
     * Change
     */
    change: function() {
        var key = this.get_key();
        var value = dead_js_utilities_storage.get(key);
        var container = this.get_container();

        if (value == "container-fluid") {
            container.removeClass("container").addClass("container-fluid");
        }
        else {
            container.removeClass("container-fluid").addClass("container");
        }
    },

    /**
     * Register event
     */
    register_event: function () {
        var _this = this;

        $("body").on("click", ".dead-container-link", function () {
            var key = _this.get_key();
            var value = dead_js_utilities_storage.get(key);

            if (value == "container")
                dead_js_utilities_storage.set(key, "container-fluid");
            else
                dead_js_utilities_storage.set(key, "container");

            _this.change();
        });
    },

    /**
     * Initial change
     */
    initial_change: function() {
        var key = this.get_key();

        if (!dead_js_utilities_storage.exists(key))
            dead_js_utilities_storage.set(key, "container");
        else
            this.change();
    },

    /**
     * Init
     */
    init: function () {
        this.initial_change();
        this.register_event();
    }
};