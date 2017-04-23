# -*- coding: utf-8 -*-

from django.conf.urls import url

from .views.tests import TestsHome

from .views.tests.basic import TestsBasicNormal
from .views.tests.basic import TestsBasicAJAX
from .views.tests.basic import TestsBasicStorage
from .views.tests.basic import TestsBasicRequests
from .views.tests.basic import TestsBasicMoment

urlpatterns = [
    # home
    url(
        r'^$',
        TestsHome,
        name='tests-home'
    ),

    # No AJAX
    url(
        r'^basic$',
        TestsBasicNormal,
        name='tests-basic-normal'
    ),

    url(
        r'^tests/basic/ajax$',
        TestsBasicAJAX,
        name='tests-basic-ajax'
    ),

    url(
        r'^tests/basic/storage$',
        TestsBasicStorage,
        name='tests-basic-storage'
    ),

    url(
        r'^tests/basic/requests$',
        TestsBasicRequests,
        name='tests-basic-requests'
    ),

    url(
        r'^tests/basic/moment$',
        TestsBasicMoment,
        name='tests-basic-moment'
    ),
]