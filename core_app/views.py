from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.http import HttpResponse
from .consumers import players
# Create your views here.

class GameBlueView(TemplateView):
    template_name = "core/core_blue.html"
class GameRedView(TemplateView):
    template_name = "core/core_red.html"

    def get_context_data(self):
        is_enough = False
        print(len(players["red"]))
        if len(players["red"]) >= 1 and len(players["blue"]) >= 1:
            is_enough = True
        return super().get_context_data(
            is_users_enough = is_enough
            )
    

def render_choose(request):
    
    return render(request, "choose/choose.html") 