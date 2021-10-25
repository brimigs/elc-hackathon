from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import TemplateView
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import ensure_csrf_cookie
from django.conf import settings
from django.http import JsonResponse, HttpResponse, Http404
from backend_app.skin_tone import get_skin_tone
import backend_app.forms as forms
import base64
from PIL import Image
import cv2
import numpy as np
import io

# Take in base64 string and return cv image
def stringToRGB(base64_string):
    imgdata = base64.b64decode(str(base64_string))
    im_arr = np.frombuffer(imgdata, dtype=np.uint8)
    img = cv2.imdecode(im_arr, flags=cv2.IMREAD_COLOR)
    return img

# handle form error outputs into a dictionary
def handleError(errorForm):
    error_message = ''
    for field, errors in errorForm.errors.items():
        for error in errors:
            error_message += error
    return {'error_message': error_message}

@never_cache
@ensure_csrf_cookie
def login(request):
    return render(request, 'index.html')

@never_cache
@ensure_csrf_cookie
@login_required
def basic(request):
    '''
    Handle simple requests
    '''
    return render(request, 'index.html')

@never_cache
@ensure_csrf_cookie
@login_required
def skin_tone(request):
    '''
    Handle skin tone calculation request
    '''
    if request.method == "POST":
        skin_form = forms.SkinForm(request.POST)
        if skin_form.is_valid():
            image = stringToRGB(skin_form.process())
            try:
                hsv_vals = get_skin_tone(image)
                return JsonResponse({'hue': hsv_vals[0], 'saturation': hsv_vals[1], 'value': hsv_vals[2]})
            except:
                return JsonResponse({'error_message': 'There was an error with the image. Please try again.'}, status=500)
        else:
            data = handleError(skin_form)
            print(data)
            return JsonResponse(data, status=500)