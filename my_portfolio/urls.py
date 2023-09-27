from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import index,download_cv

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',index,name='index'),
    path('download_cv/', download_cv,name='download')
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)