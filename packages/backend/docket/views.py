from django.shortcuts import render
from .models import Docket
from .serializers import DocketSerializer

# Create your views here.
class DocketView(model.ModelViewSet):
    serializers_class = DocketSerializer
    queryset = Docket.objects.all()