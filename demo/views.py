from django.shortcuts import render, redirect, HttpResponse, HttpResponseRedirect, get_object_or_404
from .models import Post
from .forms import Form
# from . import urls

# Create your views here.


def list(request):
    all_posts = Post.objects.all()
    context = {
        'title': 'List',
        'post_list': all_posts
    }
    return render(request, "list.html", context)


def article(request, id):
    detail = get_object_or_404(Post, id=id)
    context = {
        'title': detail.title,
        'detail': detail
    }
    return render(request, "article.html", context)


def create(request):
    form = Form(request.POST or None)
    context = {
        'form': form,
    }
    if form.is_valid():
        new_post = form.save()
        return HttpResponseRedirect(new_post.get_abs_url())
    return render(request, "create.html", context)


def update(request, id=None):
    detail = get_object_or_404(Post, id=id)
    form = Form(request.POST or None, instance=detail)
    context = {
        'title': detail.title,
        'detail': detail,
        'form': form
    }
    if form.is_valid():
        detail = form.save()
        return HttpResponseRedirect(detail.get_abs_url())

    return render(request, "create.html", context)


def delete(request, id=None):
    detail = get_object_or_404(Post, id=id)
    detail.delete()
    return redirect("list")
