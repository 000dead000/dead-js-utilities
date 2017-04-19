var dead_js_utilities_bootbox = {
    /**
     * Alert
     */
    alert: function (options) {
        var default_options = {
            callback: null,
            size: "small", // small, large
            title: "Info",
            message: "DAR",
            closeButton: true,
            buttons: {
                ok: {
                    label: 'Cerrar'
                }
            }
        };
        var settings;

        if (!dead_js_utilities_basic.parameter_exists(options)) {
            options = {};
        }

        settings = $.extend(
            default_options,
            options
        );

        bootbox.alert(settings);
    },

    /**
     * Confirm href
     */
    confirm_href: function (url, options) {
        var default_options = {
            message: "¿Confirma que desea ir a este lugar?",
            title: "Confirmación",
            size: "small",
            callback: function (result) {
                if (result) {
                    window.location = url;
                }
            },
            buttons: {
                confirm: {
                    label: 'Si',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'No',
                    className: 'btn-danger'
                }
            }
        };
        var settings;

        if (!dead_js_utilities_basic.parameter_exists(options)) {
            options = {};
        }

        settings = $.extend(
            default_options,
            options
        );

        bootbox.confirm(settings);
    }
};