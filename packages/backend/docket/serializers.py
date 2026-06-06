from rest_framework import serializers


class DocketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docket
        fields = ('id', 'title', 'description', 'completed')
