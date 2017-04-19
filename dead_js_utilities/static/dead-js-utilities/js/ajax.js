var dead_js_utilities_ajax = {
    /**
     * CSRF safe method
     * these HTTP methods do not require CSRF protection
     */
    csrf_safe_method: function(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    },

    /**
     * Setup
     */
    setup: function() {
        var _this = this;

        $.ajaxSetup({
            beforeSend: function (xhr, settings) {
                var csrftoken = Cookies.get('csrftoken');

                if (!_this.csrf_safe_method(settings.type) && !this.crossDomain) {
                    xhr.setRequestHeader("X-CSRFToken", csrftoken);
                }
            }
        });
    },

    /**
     * Init
     */
    init: function () {
        this.setup();
    }
};