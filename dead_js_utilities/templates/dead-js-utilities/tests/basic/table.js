var dead_js_utilities_tests_clean = {
    /**
     * Init
     */
    init: function () {
        $("#dar-js-utilities-form-clean").on("submit", function () {
            var element = $("#dar-js-utilities-form-clean-control-1");
            var value = element.val();
            var value_cleaned = dead_js_utilities_basic.clean(value);

            element.val(value_cleaned);
        });
    }
};

var dead_js_utilities_tests_uuid = {
    /**
     * Init
     */
    init: function () {
        $("#dar-js-utilities-form-uuid").on("submit", function (evt, button) {
            var element = $("#dar-js-utilities-form-uuid-control-1");
            var value;

            if (button == "button-2")
                value = dead_js_utilities_basic.plain_uuid();
            else
                value = dead_js_utilities_basic.uuid();

            element.val(value);
        });

        $("#dar-js-utilities-form-uuid-button-1").on("click", function () {
            $("#dar-js-utilities-form-uuid").trigger("submit", "button-1");
        });

        $("#dar-js-utilities-form-uuid-button-2").on("click", function () {
            $("#dar-js-utilities-form-uuid").trigger("submit", "button-2");
        });
    }
};

var dead_js_utilities_tests_swap_divs = {
    /**
     * Swap
     */
    swap: function () {
        var d1 = $("#dar-js-utilities-tests-swap-divs-control-1");
        var d2 = $("#dar-js-utilities-tests-swap-divs-control-2");

        if (d2.is(":visible"))
            dead_js_utilities_basic.swap_divs(d2, d1);
        else
            dead_js_utilities_basic.swap_divs(d1, d2);
    },

    /**
     * Initial div
     */
    initial_div: function () {
        var d2 = $("#dar-js-utilities-tests-swap-divs-control-2");

        d2.hide();
    },

    /**
     * Init
     */
    init: function () {
        var _this = this;

        $("#dar-js-utilities-tests-swap-divs-button").on("click", function () {
            _this.swap();
        });

        _this.initial_div();
    }
};

var dead_js_utilities_tests = {
    /**
     * Init
      */
    init: function () {
        dead_js_utilities_tests_clean.init();
        dead_js_utilities_tests_uuid.init();
        dead_js_utilities_tests_swap_divs.init();
    }
};