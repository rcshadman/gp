# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Posts',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('title', models.CharField(max_length=50)),
                ('author', models.CharField(max_length=50)),
                ('publication_date', models.DateTimeField(auto_now_add=True)),
                ('updated_on', models.DateTimeField(auto_now=True)),
                ('category', models.CharField(max_length=50)),
                ('bodytext', models.TextField(null=True, blank=True)),
                ('hero_image', models.CharField(max_length=256)),
                ('optional_image', models.CharField(max_length=256)),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]
