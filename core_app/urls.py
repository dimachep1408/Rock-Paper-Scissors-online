from django.urls import path
from .views import *

urlpatterns = [
    path("game_blue/", view= GameBlueView.as_view()),
    path("game_red/", view = GameRedView.as_view())
]