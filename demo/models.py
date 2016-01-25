from django.db import models
from django.core.urlresolvers import reverse

# Create your models here.


class Post(models.Model):
    title = models.CharField(max_length=50)
    author = models.CharField(max_length=50)
    publication_date = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    category = models.CharField(max_length=50)
    bodytext = models.TextField(default="NONE")
    hero_image = models.FileField(null=True,blank=True)
    optional_image = models.FileField(null=True,blank=True)

    def get_abs_url(self):
        return reverse('article', kwargs={'id':self.id})

    def __unicode__(self):
        return self.title

    class Meta:
        ordering = ["-publication_date","-updated_on"]