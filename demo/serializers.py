from rest_framework import serializers
from models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('id','title', 'author', 'category', 'bodytext',
                  "hero_image", "optional_image","publication_date")
