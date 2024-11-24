from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='blog-home'),
    path('contact/', views.about, name='blog-contact'),
]
