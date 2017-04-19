var dead_js_utilities_tests_storage = {
    /**
     * Show keys
     */
    show_keys: function () {
        var element = $("#show-keys");
        var keys = dead_js_utilities_storage.keys();
        var i;
        var k;
        var v;
        var html = "";

        for (i=0; i < keys.length; i++) {
            k = keys[i];

            v = dead_js_utilities_storage.get(k);

            html += "<div>";
            html += "<b><span class='entry-key'>" + k + "</span>:</b> ";
            html += "<span class='entry-value'>" + v + "</span> ";
            html += " ";
            html += "<a href='#' class='no-link remove-entry' title='Remove entry'>";
            html += "<i class='fa fa-trash'' aria-hidden='true'></i>";
            html += "</a>";
            html += "</div>";
        }

        element.html(html);
    },

    /**
     * Set key, value
     */
    set_key_value: function () {
        var _this = this;

        $("#dar-js-utilities-form-storage-set").on("submit", function (evt, button) {
            var key = $("#dar-js-utilities-form-storage-set-control-1").val();
            var value = $("#dar-js-utilities-form-storage-set-control-2").val();

            dead_js_utilities_storage.set(key, value);
            _this.show_keys();
        });
    },

    /**
     * Remove entry
     */
    remove_entry: function () {
        var _this = this;

        $("body").on("click", ".remove-entry", function () {
            var div = $(this).parent();
            var entry_key = div.find(".entry-key");
            var key = entry_key.html();

            dead_js_utilities_storage.remove(key);
            div.remove();

            _this.show_keys();
        });
    },

    /**
     * Get key, value
     */
    get_key_value: function () {
        $("#dar-js-utilities-form-storage-get").on("submit", function (evt, button) {
            var key = $("#dar-js-utilities-form-storage-get-control-1").val();

            $("#dar-js-utilities-form-storage-get-control-2").val(
                dead_js_utilities_storage.get(key)
            );
        });
    },

    /**
     * Init
     */
    init: function () {
        this.show_keys();
        this.set_key_value();
        this.get_key_value();
        this.remove_entry();
    }
};