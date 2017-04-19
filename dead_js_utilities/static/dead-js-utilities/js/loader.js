var dead_js_utilities_loader = {
    /**
     * Show
     */
    show: function() {
        $('body').plainOverlay('show', {
            progress: function() {
                var message = "Cargando...";
                var icon = "<i class='fa fa-spinner fa-spin fa-5x'></i>";
                var content = "<div>" + icon + "<br>" + message + "</div>";

                return $(content);
            }
        });
    },

    /**
     * Hide
     */
    hide: function () {
        $('body').plainOverlay('hide');
    },

    /**
     * Register for AJAX
     */
    register_for_ajax: function () {
        var _this = this;

        $(document).ajaxStart(function() {
            _this.show();
        });

        $(document).ajaxStop(function() {
            _this.hide();
        });
    },

    /**
     * Init
     */
    init: function () {
        this.register_for_ajax();
    }
};
