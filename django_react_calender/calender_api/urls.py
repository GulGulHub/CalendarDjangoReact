from django.urls import path
from . import views

urlpatterns = [
    path('PostTodo', views.PostTodo, name='post_todo'),
    path('PostAppointment/', views.PostAppointment, name='post_appointment'), 
    path('Todo', views.GetTodoList, name='todo_list'),
    path('Appointment', views.GetAppointmentList, name='appointment_list'),
    path('', views.index),  # This will serve the React app
]
