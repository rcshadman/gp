from django.shortcuts import render, redirect, HttpResponse, HttpResponseRedirect, get_object_or_404
from .models import Post

# Create your views here.


def list(request):
    if request.method == "GET":
        all_posts = Post.objects.all()
        print all_posts
        
        context = {
            'title': 'List',
            'post_list': all_posts
        }
        return render(request, "index.html", context)


def article(request,id):
    if request.method == "GET":
        print request
        detail = get_object_or_404(Post, id=id)
        context = {
            'title': detail.title,
            'detail': detail
        }
        return render(request, "article.html", context)
