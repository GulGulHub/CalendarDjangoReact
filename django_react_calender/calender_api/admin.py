from django.contrib import admin
from .models import TodoDB, AppointmentDB

admin.site.register(TodoDB)
admin.site.register(AppointmentDB)
