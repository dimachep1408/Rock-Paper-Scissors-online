from django.urls import path
from .consumers import *

websockets_urlpatterns = [
    path("game_blue/", BlueTeamConsumer.as_asgi()),
    path("game_red/", RedTeamConsumer.as_asgi())
]