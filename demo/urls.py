from django.conf.urls import url
from . import views


urlpatterns = [

    url(r'^$', views.list, name='list'),
    url(r'^(?P<id>\d+)/$', views.article, name='article'),
    url(r'^create/$', views.create, name='create'),
    url(r'^(?P<id>\d+)/update/$', views.update, name='update'),
    url(r'^(?P<id>\d+)/delete/$', views.delete, name='delete')]
