var dead_js_utilities_test_clean = {
    /**
     * Get test prefix
     */
    get_test_prefix: function() {
        return TEST_BASE_PREFIX + "-clean";
    },

    /**
     * Init
     */
    init: function () {
        var test_prefix = this.get_test_prefix();

        var form_id = test_prefix + "-form";
        var form_obj = $("#" + form_id);

        var control_1_id = test_prefix + "-control-1";
        var control_1_obj = $("#" + control_1_id);

        form_obj.on("submit", function () {
            var value = control_1_obj.val();
            var value_cleaned = dead_js_utilities_basic.clean(value);

            control_1_obj.val(value_cleaned);
        });
    }
};

$(document).ready(function () {
    dead_js_utilities_test_clean.init();
});