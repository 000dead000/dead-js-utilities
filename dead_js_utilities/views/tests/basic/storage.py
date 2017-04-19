# -*- coding: utf-8 -*-

from django.views.generic import TemplateView


class TestsBasicStorageCBV(TemplateView):
    template_name = "dar-js-utilities/tests/basic/storage.html"

    def get_context_data(self, **kwargs):
        context = super(TestsBasicStorageCBV, self).get_context_data(**kwargs)

        context['tests_tab'] = 'basic'
        context['tests_subtab'] = 'storage'

        return context

TestsBasicStorage = TestsBasicStorageCBV.as_view()
