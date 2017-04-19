var dead_js_utilities_basic = {
    /**
     * Clean string value
     */
    clean: function(value) {
        value = value.trim();

        return value;
    },

    /**
     * Get S4
     */
    S4: function() {
        var result;

        result = 1+Math.random();
        result = result * 0x10000;
        result = result | 0;
        result = result.toString(16);
        result = result.substring(1);

        return result;
    },

    /**
     * Get UUID
     */
    uuid: function() {
        var result;

        result = this.S4() + this.S4() + "-";
        result = result + this.S4() + "-4";
        result = result + this.S4().substr(0,3) + "-";
        result = result + this.S4() + "-";
        result = result + this.S4() + this.S4() + this.S4();
        result = result.toLowerCase();

        return result;
    },

    /**
     * Get plain UUID
     */
    plain_uuid: function() {
        var result = this.uuid();

        result = result.split("-");
        result = result.join("");

        return result;
    },

    /**
     * Bootstrap tooltips
     */
    bootstrap_tooltips: function() {
        $("[data-toggle='tooltip']").tooltip();
        $("[data-toggle='popover']").popover();
    },

    /**
     * No link
     */
    no_link: function() {
        $("body").on("click", ".no-link", function() {
            return false;
        });
    },

    /**
     * Blur elements
     */
    blur_elements: function() {
        $("body").on("click", "a, button", function() {
            $(this).blur();
        });

        $("body").on("change keyup", "select", function() {
            $(this).blur();
        });
    },

    /**
     * Disable enter key submit
     */
    disable_enter_key: function() {
        $(window).keydown(function(event){
            if(event.keyCode == 13) {
                return false;
            }
        });
    },

    /**
     * Swap divs
     */
    swap_divs: function(d1, d2) {
        d1.fadeOut("slow", function () {
            d2.show();
        });
    },

    /**
     * Go up
     */
    go_up: function () {
        $("body").on("click", ".dead-go-up", function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    },

    /**
     * Go down
     */
    go_down: function () {
        $("body").on("click", ".dead-go-down", function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        });
    },

    /**
     * Refresh
     */
    refresh: function () {
        $("body").on("click", ".dead-refresh", function () {
            location.reload(true);
        });
    },

    /**
     * Disable form submit
     */
    disable_form_submit: function () {
        $("body").on("submit", ".no-submit", function () {
            return false;
        });
    },

    /**
     * Show loader when submitting .submit-with-loader form
     */
    submit_with_loader: function() {
        $("body").on("submit", ".submit-with-loader", function () {
            dead_js_utilities_loader.show();
        });
    },

    /**
     * Parameter exists
     */
    parameter_exists: function(parameter) {
        return typeof parameter !== 'undefined' ? true : false;
    },

    /**
     * Confirm delete
     */
    confirm_delete: function () {
        $("body").on("click", ".delete-link", function(evt) {
            var url = $(this).attr("href");

            evt.preventDefault();

            var options = {
                message: "¿Confirma que desea eliminar este registro?",
            };

            dead_js_utilities_bootbox.confirm_href(url, options);

        });
    },

    /**
     * Init numbro
     */
    init_numbro: function() {
      numbro.culture('es-ES');
    },

    /**
     * After AJAX
     */
    after_ajax: function () {
        this.bootstrap_tooltips();
    },

    /**
     * Init
     */
    init: function () {
        this.bootstrap_tooltips();
        this.no_link();
        this.blur_elements();
        this.go_up();
        this.go_down();
        this.refresh();
        this.disable_form_submit();
        this.submit_with_loader();
        this.confirm_delete();
        this.init_numbro();
    }
};