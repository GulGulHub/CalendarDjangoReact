from rest_framework import serializers
from .models import TodoDB, AppointmentDB


class TodoDBSerializer(serializers.ModelSerializer):
    class Meta:
        model = TodoDB
        fields = ('id', 'title',)

class AppointmentDBSerializer(serializers.ModelSerializer):
    class Meta:
        model = AppointmentDB
        fields = ('id','date', 'time','event')        