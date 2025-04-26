from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.http import HttpResponse
# Create your views here.

class GameBlueView(TemplateView):
    template_name = "core/core_blue.html"
class GameRedView(TemplateView):
    template_name = "core/core_red.html"

def render_choose(request):
    
    return render(request, "choose/choose.html") 