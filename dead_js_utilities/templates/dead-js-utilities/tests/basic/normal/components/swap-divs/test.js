var dead_js_utilities_test_swap_divs = {
    /**
     * Get test prefix
     */
    get_test_prefix: function() {
        return TEST_BASE_PREFIX + "-swap-divs";
    },

    /**
     * Swap
     */
    swap: function () {
        var test_prefix = this.get_test_prefix();

        var control_1_id = test_prefix + "-control-1";
        var control_1_obj = $("#" + control_1_id);

        var control_2_id = test_prefix + "-control-2";
        var control_2_obj = $("#" + control_2_id);

        if (control_2_obj.is(":visible"))
            dead_js_utilities_basic.swap_divs(
                control_2_obj,
                control_1_obj
            );
        else
            dead_js_utilities_basic.swap_divs(
                control_1_obj,
                control_2_obj
            );
    },

    /**
     * Init
     */
    init: function () {
        var _this = this;
        var test_prefix = this.get_test_prefix();
        var button_1_id = test_prefix + "-button-1";

        $("body").on("click", "#" + button_1_id, function () {
            _this.swap();
        });
    }
};

$(document).ready(function () {
    dead_js_utilities_test_swap_divs.init();
});