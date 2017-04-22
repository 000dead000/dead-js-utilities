var dead_js_utilities_test_uuid = {
    /**
     * Get test prefix
     */
    get_test_prefix: function() {
        return TEST_BASE_PREFIX + "-uuid";
    },

    /**
     * Init
     */
    init: function () {
        var test_prefix = this.get_test_prefix();

        var form_id = test_prefix + "-form";

        var button_1_id = test_prefix + "-button-1";
        var button_2_id = test_prefix + "-button-2";

        $("body").on("submit", "#" + form_id, function (evt, button) {
            var control_1_id = test_prefix + "-control-1";
            var control_1_obj = $("#" + control_1_id);

            var value;

            if (button == "button-2")
                value = dead_js_utilities_basic.plain_uuid();
            else
                value = dead_js_utilities_basic.uuid();

            control_1_obj.val(value);
        });

        $("body").on("click", "#" + button_1_id, function () {
            var form_obj = $("#" + form_id);

            form_obj.trigger("submit", "button-1");
        });

        $("body").on("click", "#" + button_2_id, function () {
            var form_obj = $("#" + form_id);

            form_obj.trigger("submit", "button-2");
        });
    }
};

$(document).ready(function () {
    dead_js_utilities_test_uuid.init();
});