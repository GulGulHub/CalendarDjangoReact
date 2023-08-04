from django.db import models

# Create your models here.

class TodoDB(models.Model):
    title = models.CharField(max_length=70)

    def __str__(self):
        return self.title
    

class AppointmentDB(models.Model):
    date = models.DateField(max_length=70, null=True) 
    time = models.CharField(max_length=70)
    event = models.CharField(max_length=70)

    def __str__(self):
        return f"time:{self.time}, event:{self.event}"