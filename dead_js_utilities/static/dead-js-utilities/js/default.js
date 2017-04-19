var dead_js_utilities = {
    /**
     * After AJAX
     */
    after_ajax: function () {
        // Basic
        dead_js_utilities_basic.after_ajax();
    },

    /**
     * Init
     */
    init: function () {
        // AJAX Setup
        dead_js_utilities_ajax.init();

        // Register loader for ajax
        dead_js_utilities_loader.init();

        // Requests
        dead_js_utilities_requests.init();

        // Basic
        dead_js_utilities_basic.init();

        // Container
        dead_js_utilities_container.init();

        // Moment
        dead_js_utilities_moment.init();
    }
};
