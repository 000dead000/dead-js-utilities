# -*- coding: utf-8 -*-

from django.conf.urls import url

from .views import TestsHome

# from .views import TestsBasicNormal
# from .views import TestsBasicAJAX
# from .views import TestsBasicStorage
# from .views import TestsBasicRequests
# from .views import TestsBasicMoment

urlpatterns = [
    url(
        r'^tests$',
        TestsHome,
        name='tests-home'
    ),

    #
    # # Basic
    # url(
    #     r'^tests/basic/normal$',
    #     TestsBasicNormal,
    #     name='tests-basic-normal'
    # ),
    #
    # url(
    #     r'^tests/basic/ajax$',
    #     TestsBasicAJAX,
    #     name='tests-basic-ajax'
    # ),
    #
    # url(
    #     r'^tests/basic/storage$',
    #     TestsBasicStorage,
    #     name='tests-basic-storage'
    # ),
    #
    # url(
    #     r'^tests/basic/requests$',
    #     TestsBasicRequests,
    #     name='tests-basic-requests'
    # ),
    #
    # url(
    #     r'^tests/basic/moment$',
    #     TestsBasicMoment,
    #     name='tests-basic-moment'
    # ),
]