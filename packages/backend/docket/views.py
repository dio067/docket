from django.shortcuts import render
from rest_framework import viewsets
from .models import Docket
from .serializers import DocketSerializer

# Create your views here.
class DocketView(viewsets.ModelViewSet):
    serializer_class = DocketSerializer
    def get_queryset(self):
        return Docket.objects.filter(user=self.request.user)
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    def create(self, request, *args, **kwargs):
        print(request.data)
        return super().create(request, *args, **kwargs)
