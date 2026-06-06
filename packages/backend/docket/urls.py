from rest_framework.routers import DefaultRouter
from .views import DocketView

router = DefaultRouter()

router.register('docket', DocketView)

