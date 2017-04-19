var dead_js_utilities_moment = {
    /**
     * Get current date
     */
    get_current_date: function() {
        return moment();
    },

    /**
     * Format datetime
     */
    format_datetime: function (datetime, format) {
        var datetime_formatted = datetime;

        switch (format) {
            // YYYY-MM-DD HH:MM:SS
            case 1:
                datetime_formatted = datetime.format("YYYY-MM-DD HH:mm:ss");
                break;

            // 8 de abril de 2106
            case 2:
                datetime_formatted = datetime.format("D") + " de " + datetime.format("MMMM") + " de " + datetime.format("YYYY");
                break;

            // miercoles 8 de abril de 2106
            case 3:
                datetime_formatted = datetime.format("dddd D") + " de " + datetime.format("MMMM") + " de " + datetime.format("YYYY");
                break;

            // YYYY-MM-DD
            case 4:
                datetime_formatted = datetime.format("YYYY-MM-DD");
                break;

            // YYYY-MM
            case 5:
                datetime_formatted = datetime.format("MMMM") + " de " + datetime.format("YYYY");
                break;
        }

        return datetime_formatted;
    },


    /**
     * Create date from y,m,d
     */
    create_date: function(y, m, d) {
        m = m - 1;
        return moment([y, m, d]);
    },

    /**
     * Get year
     */
    get_year: function (datetime) {
        return datetime.year();
    },

    /**
     * Get current year
     */
    get_current_year: function() {
        return this.get_year(this.get_current_date());
    },

    /**
     * Get week of the year
     */
    get_week_of_the_year: function() {
        return moment().isoWeek();
    },

    /**
     * Get week
     */
    get_week: function (d) {
      return d.isoWeek();
    },

    /**
     * Get first day of month
     */
    get_first_day_of_month: function(datetime) {
        return datetime.startOf('month');
    },

    /**
     * Get last day of month
     */
    get_last_day_of_month: function(datetime) {
        return datetime.endOf('month');
    },

    /**
     * Get last day of week
     */
    get_last_day_of_week: function(datetime) {
        return datetime.endOf('week');
    },

    /**
     * Get first day of week
     */
    get_first_day_of_week: function(datetime) {
        return datetime.startOf('week');
    },

    /**
     * Get 18 years min date
     */
    get_18_min_date: function() {
        return this.get_current_date().subtract(18, 'years');
    },

    /**
     * Get age
     */
    age: function (d1, d2) {
        return d2.diff(d1, 'years', true);
    },

    /**
     * Init
     */
    init: function() {
        moment.locale('es');
    }
};