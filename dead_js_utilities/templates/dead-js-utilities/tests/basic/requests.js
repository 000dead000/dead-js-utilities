var dead_js_utilities_tests = {
    /**
     * Done function
     */
    done_function: function(data, textStatus, jqXHR) {
        var response = data.response;
        var tbody = $("#result-table tbody");
        var row;

        row = "<tr>";
        row += "<td>" + response.fecha + "</td>";
        row += "<td>" + response.hora + "</td>";
        row += "<td>" + response.metodo + "</td>";
        row += "<td>" + response.id + "</td>";
        row += "</tr>";

        tbody.append(row);
    },

    /**
     * Fail function
     */
    fail_function: function (jqXHR, textStatus, errorThrown) {
        dead_js_utilities_bootbox.alert({
            message: dead_js_utilities_requests.get_error_description(
                jqXHR,
                textStatus,
                errorThrown
            ),
            title: "Error"
        });
    },

    /**
     * Make request
     */
    make_request: function () {
        var _this = this;

        $(".request-link").on("click", function () {
            var id = $(this).attr("id");
            var options = {
                url: THIS_URL,
                done_function: _this.done_function,
                fail_function: _this.fail_function,
                params: {}
            };
            var must_request = true;

            switch (id) {
                case "request-link-get":
                    options.params = {
                        id: id
                    };
                    options.method = 'GET';

                    break;

                case "request-link-post":
                    options.params = JSON.stringify({
                        id: id
                    });

                    break;

                case "request-link-timeout":
                    options.params = JSON.stringify({
                        id: id
                    });
                    options.timeout = 500;

                    break;

                case "request-link-500":
                    options.params = JSON.stringify({
                        id: id
                    });

                    break;

                case "request-link-limpiar":
                    $("#result-table tbody").html("");
                    must_request = false;
            }

            if (must_request) {
                dead_js_utilities_requests.send(options);
            }
        });
    },

    /**
     * Init
      */
    init: function () {
        this.make_request();
    }
};