# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('demo', '0002_auto_20160124_1009'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='post',
            options={'ordering': ['-publication_date', '-updated_on']},
        ),
        migrations.AlterField(
            model_name='post',
            name='bodytext',
            field=models.TextField(default=b'NONE'),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='hero_image',
            field=models.FileField(null=True, upload_to=b'', blank=True),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='post',
            name='optional_image',
            field=models.FileField(max_length=256, upload_to=b''),
            preserve_default=True,
        ),
    ]
