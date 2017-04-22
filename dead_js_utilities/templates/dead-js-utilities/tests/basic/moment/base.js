var dead_js_utilities_tests = {
    /**
     * Fecha actual
     */
    fecha_actual: function() {
        var fecha_actual = dead_js_utilities_moment.get_current_date();
        var fecha_actual_1 = dead_js_utilities_moment.format_datetime(fecha_actual, 1);
        var fecha_actual_2 = dead_js_utilities_moment.format_datetime(fecha_actual, 2);
        var fecha_actual_3 = dead_js_utilities_moment.format_datetime(fecha_actual, 3);
        var fecha_actual_4 = dead_js_utilities_moment.format_datetime(fecha_actual, 4);

        $("#fecha-actual-1").html(fecha_actual_1);
        $("#fecha-actual-2").html(fecha_actual_2);
        $("#fecha-actual-3").html(fecha_actual_3);
        $("#fecha-actual-4").html(fecha_actual_4);
    },

    /**
     * Fecha específica
     */
    fecha_especifica: function() {
        var fecha_nacimiento = dead_js_utilities_moment.create_date(1977, 7, 4);
        var ano = dead_js_utilities_moment.get_current_year();
        var i;
        var fecha_cumpleanos;
        var f1;
        var f2;
        var fecha_actual = dead_js_utilities_moment.get_current_date();

        $("#fecha-nacimiento").html(
            dead_js_utilities_moment.format_datetime(fecha_nacimiento, 3)
        );

        for (i=0; i <= 11; i++) {
            fecha_cumpleanos = dead_js_utilities_moment.create_date(ano + i, 7, 4);

            $("#fecha-cumpleanos").append(
                "<div>" + dead_js_utilities_moment.format_datetime(fecha_cumpleanos, 3) + " - " + dead_js_utilities_moment.age(fecha_nacimiento, fecha_cumpleanos) + "</div>"
            );
        }

        $("#semana-ano").html(
            dead_js_utilities_moment.get_week_of_the_year()
        );

        for (i=1; i <= 12; i++) {
            f1 = dead_js_utilities_moment.create_date(ano, i, 1);
            f2 = dead_js_utilities_moment.get_last_day_of_month(f1.clone());

            f1 = dead_js_utilities_moment.format_datetime(f1, 3);
            f2 = dead_js_utilities_moment.format_datetime(f2, 3);

            $("#dias-mes").append(
                "<div>" + f1 + " - " + f2 + "</div>"
            );
        }

        fecha_actual = dead_js_utilities_moment.get_first_day_of_month(fecha_actual);
        for (i=1; i <= 5; i++) {
            f1 = dead_js_utilities_moment.get_first_day_of_week(fecha_actual)
            f2 = dead_js_utilities_moment.get_last_day_of_week(f1.clone())
            f1 = dead_js_utilities_moment.format_datetime(f1, 3);
            f2 = dead_js_utilities_moment.format_datetime(f2, 3);

            $("#dias-semana").append(
                "<div>" + f1 + " - " + f2 + "</div>"
            );

            fecha_actual = fecha_actual.add(1, "week");
        }
    },

    /**
     * Init
     */
    init: function () {
        this.fecha_actual();
        this.fecha_especifica();
    }
};