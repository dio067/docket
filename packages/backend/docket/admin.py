from django.contrib import admin
from .models import Docket


class DocketAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')
# Register your models here.
admin.site.register(Docket, DocketAdmin)