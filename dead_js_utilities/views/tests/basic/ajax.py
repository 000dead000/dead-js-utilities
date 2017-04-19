# -*- coding: utf-8 -*-

import time

from django.views.generic import TemplateView
from django.template.loader import render_to_string

from dead_js_utilities.mixins import AjaxResponseMixin
from dead_js_utilities.mixins import JSONResponseMixin
from dead_js_utilities.mixins import EnsureCSRFMixin


class TestsBasicAJAXCBV(EnsureCSRFMixin, JSONResponseMixin, AjaxResponseMixin, TemplateView):
    template_name = "dar-js-utilities/tests/basic/ajax.html"

    def get_context_data(self, **kwargs):
        context = super(TestsBasicAJAXCBV, self).get_context_data(**kwargs)

        context['tests_tab'] = 'basic'
        context['tests_subtab'] = 'ajax'

        return context

    def get_ajax(self, request, *args, **kwargs):
        template_file = "dar-js-utilities/tests/basic/table.html"
        params = {}

        html = render_to_string(
            template_name=template_file,
            context=params,
            request=request
        )

        data = {
            'html': html,
        }

        time.sleep(3)

        return self.render_to_json_response(data)

TestsBasicAJAX = TestsBasicAJAXCBV.as_view()
