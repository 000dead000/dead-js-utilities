var dead_js_utilities_requests = {
    /**
     * Get error description
     */
    get_error_description: function(jqXHR, textStatus, errorThrown) {
        if (jqXHR.status === 0)
            return 'Not connect: Verify Network.';

        if (jqXHR.status == 404)
            return 'Requested page not found [404]';

        if (jqXHR.status == 500)
            return 'Internal Server Error [500].';

        if (textStatus === 'parsererror')
            return 'Requested JSON parse failed.';

        if (textStatus === 'timeout')
            return 'Time out error.';

        if (textStatus === 'abort')
            return 'Ajax request aborted.';

        return 'Uncaught Error: ' + jqXHR.responseText;
    },

    /**
     * Send request
     */
    send: function(options) {
        var request;
        var _this = this;

        var default_options = {
            url: '#',
            method: 'POST',
            params: {},
            done_function: function (data, textStatus, jqXHR) {
                console.log("Request sent");
            },
            fail_function: function (jqXHR, textStatus, errorThrown) {
                console.log(_this.get_error_description(
                    jqXHR,
                    textStatus,
                    errorThrown
                ));
            },
            timeout: 60000 // 1min
        };

        var settings = $.extend(
            default_options,
            options
        );

        request = $.ajax({
            url: settings.url,
            method: settings.method,
            data: settings.params,
            dataType: "json",
            timeout: settings.timeout
        });

        request.done(function(data, textStatus, jqXHR) {
            settings.done_function(data, textStatus, jqXHR);
        });

        request.fail(function(jqXHR, textStatus, errorThrown) {
            settings.fail_function(jqXHR, textStatus, errorThrown);
        });
    },

    /**
     * Init
     */
    init: function () {
    }
};