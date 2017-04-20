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
        var form_obj = $("#" + form_id);

        var control_1_id = test_prefix + "-control-1";
        var control_1_obj = $("#" + control_1_id);

        var button_1_id = test_prefix + "-button-1";
        var button_1_obj = $("#" + button_1_id);

        var button_2_id = test_prefix + "-button-2";
        var button_2_obj = $("#" + button_2_id);
        
        form_obj.on("submit", function (evt, button) {
            var value;

            if (button == "button-2")
                value = dead_js_utilities_basic.plain_uuid();
            else
                value = dead_js_utilities_basic.uuid();

            control_1_obj.val(value);
        });

        button_1_obj.on("click", function () {
            form_obj.trigger("submit", "button-1");
        });

        button_2_obj.on("click", function () {
            form_obj.trigger("submit", "button-2");
        });
    }
};

$(document).ready(function () {
    dead_js_utilities_test_uuid.init();
});