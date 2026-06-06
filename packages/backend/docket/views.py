from django.shortcuts import render
from rest_framework import viewsets
from .models import Docket
from .serializers import DocketSerializer

# Create your views here.
class DocketView(viewsets.ModelViewSet):
    serializer_class = DocketSerializer
    queryset = Docket.objects.all() 