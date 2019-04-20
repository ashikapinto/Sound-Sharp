from django.db import models
from django.conf import settings
from django.utils import timezone
from django.db.models.signals import pre_save
from backend.utils import unique_slug_generator
# Create your models here.

class Song(models.Model):
    title = models.CharField(max_length = 100)
    description = models.TextField()
    image = models.FileField(blank = True, null = True, upload_to = 'images/%Y/%m/%D')
    audio = models.FileField(blank = True, null = True, upload_to = 'songs/%Y/%m/%D')
    created_date = models.DateTimeField(default=timezone.now)
    slug = models.SlugField(max_length = 250, null = True, blank = True)
    def __str__(self):
        return self.title

class Comment(models.Model):
     song = models.ForeignKey(Song, on_delete=models.CASCADE)
     user = models.CharField(max_length=100)
     comment = models.TextField()
     def __str__(self):
         return self.comment

def slug_generator(sender, instance, *args, **kwargs):
    if not instance.slug:
        instance.slug = unique_slug_generator(instance)
pre_save.connect(slug_generator, sender=Song)
