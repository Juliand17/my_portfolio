from django.shortcuts import render
from django.core.mail import send_mail
from django.http.response import HttpResponse
import mimetypes
import os

def index(request):
    if request.method != 'POST':
        return render(request,'index.html',{}) 
    name = request.POST['name']
    email = request.POST['email']
    subject = request.POST['subject']
    text_area = request.POST['text__area']
    message = f"""
    Me comunico : {name} con correo de email : {email}
    para informar
    {text_area}
    """
    send_mail(
        subject,
        message,
        email,
        ['juliandevcasallas@gmail.com'],
    )
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    filename = 'CV_Julian_Casallas.pdf'
    return render(request,'index.html',{'name':name,'CV_Julian_Casallas':filename})

def download_cv(request): 
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    filename = 'CV_Julian_Casallas.pdf'
    filepath = BASE_DIR + '/files/' + filename
    path = open(filepath, 'b')
    mime_type, _ = mimetypes.guess_type(filepath)
    response = HttpResponse(path, content_type = mime_type)
    response['Content-Disposition'] = f"attachment; filename={filename}"
    return response
