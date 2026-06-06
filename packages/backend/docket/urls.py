from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import DocketView

router = DefaultRouter()

router.register('docket', DocketView)

urlpatterns = [
    path('', include(router.urls))
]