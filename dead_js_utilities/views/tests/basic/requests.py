# -*- coding: utf-8 -*-

import time
import json

from django.utils.timezone import now

from django.views.generic import TemplateView

from dead_js_utilities.mixins import AjaxResponseMixin
from dead_js_utilities.mixins import JSONResponseMixin
from dead_js_utilities.mixins import EnsureCSRFMixin


class TestsBasicRequestsCBV(EnsureCSRFMixin, JSONResponseMixin, AjaxResponseMixin, TemplateView):
    template_name = "dar-js-utilities/tests/basic/requests.html"

    def get_context_data(self, **kwargs):
        context = super(TestsBasicRequestsCBV, self).get_context_data(**kwargs)

        context['tests_tab'] = 'basic'
        context['tests_subtab'] = 'requests'

        return context

    def get_response(self, id):
        time.sleep(1)

        return {
            'fecha': now().date().strftime("%Y-%m-%d"),
            'hora': now().time().strftime("%H:%M:%S"),
            'metodo': self.request.method,
            'id': id,
        }

    def get_ajax(self, request, *args, **kwargs):
        id = request.GET.get("id")

        data = {
            'response': self.get_response(id)
        }

        return self.render_to_json_response(data)

    def post_ajax(self, request, *args, **kwargs):
        params = json.loads(request.body)
        id = params.get("id")

        if id == "request-link-500":
            raise Exception

        data = {
            'response': self.get_response(id)
        }

        return self.render_to_json_response(data)


TestsBasicRequests = TestsBasicRequestsCBV.as_view()
