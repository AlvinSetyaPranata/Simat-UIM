from django.shortcuts import render
from django.http import JsonResponse
# Create your views here.

def api_temp(req):
    

    return render(req, 'index.html')


def new_(req):
    for x in req.POST:
        print(x, " : ", req.POST[x])

    return JsonResponse({'data' : '0'})