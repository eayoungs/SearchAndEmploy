from django.conf.urls import include, url
from rest_framework import routers

from .api import CompanyViewSet


router = routers.DefaultRouter()
router.register('companies', CompanyViewSet)

urlpatterns = [
    url('^', include(router.urls)),
]
