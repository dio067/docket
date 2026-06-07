from rest_framework import serializers
from .models import Docket


class DocketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docket
        fields = ('id', 'user','title', 'description', 'completed')
        read_only_fields = ('user',)

