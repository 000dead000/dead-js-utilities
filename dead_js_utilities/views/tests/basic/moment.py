# -*- coding: utf-8 -*-

from django.views.generic import TemplateView


class TestsBasicMomentCBV(TemplateView):
    template_name = "dar-js-utilities/tests/basic/moment.html"

    def get_context_data(self, **kwargs):
        context = super(TestsBasicMomentCBV, self).get_context_data(**kwargs)

        context['tests_tab'] = 'basic'
        context['tests_subtab'] = 'moment'

        return context

TestsBasicMoment = TestsBasicMomentCBV.as_view()
