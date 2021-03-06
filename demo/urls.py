from django.conf.urls import url, patterns
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = patterns('',


                       url(r'^vue/api/$', views.PostRestList.as_view()),
                       url(r'^vue/api/(?P<pk>\d+)/$',
                           views.PostRestDetail.as_view()),

                       url(r'^$', views.list, name='list'),
                       url(r'^(?P<id>\d+)/$', views.article, name='article'),
                       url(r'^create/$', views.create, name='create'),
                       url(r'^(?P<id>\d+)/update/$',
                           views.update, name='update'),
                       url(r'^(?P<id>\d+)/delete/$',
                           views.delete, name='delete'),


                       url(r'^vue/$', views.vue, name='vue'),
                       


                       )

urlpatterns = format_suffix_patterns(urlpatterns)
