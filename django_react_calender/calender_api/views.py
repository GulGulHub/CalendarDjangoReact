from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TodoDBSerializer, AppointmentDBSerializer

from .models import TodoDB, AppointmentDB
from .serializers import TodoDBSerializer, AppointmentDBSerializer
# Create your views here.


@api_view(['POST'])
def PostTodo(request):
    data_todo = request.data
    todo_serializer = TodoDBSerializer(data=data_todo)
    if todo_serializer.is_valid():
        todo_instance = todo_serializer.save()
        return Response({'message': f'ToDo {todo_instance} created successfully.'}, status=status.HTTP_201_CREATED)
    else:
        return Response(todo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)  


@api_view(['POST'])
def PostAppointment(request):
    try:
        # Retrieve the data sent in the POST request from the React app
        date = request.data.get('date')
        time = request.data.get('time')
        event = request.data.get('event')

        AppointmentDB.objects.create(date=date, time=time, event=event)

        # You can also return a response to indicate the success of the POST request if needed
        return Response({'message': 'Appointment saved successfully!'})
    except Exception as e:
        # Handle any exceptions that might occur during the POST request
        return Response({'error': str(e)}, status=500)


@api_view(['GET'])
def GetTodoList(request):
    todos = TodoDB.objects.all()
    serializer = TodoDBSerializer(todos, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def GetAppointmentList(request):
    appointments = AppointmentDB.objects.all()
    serializer = AppointmentDBSerializer(appointments, many=True)
    return Response(serializer.data)



def index(request):
    return render(request, 'index.html') 