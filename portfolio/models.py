from django.db import models
from django.utils import timezone
from cloudinary.models import CloudinaryField

class Skill(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    title_pt = models.CharField(max_length=200, blank=True, verbose_name="Título em Português")
    description = models.TextField(blank=True)
    description_pt = models.TextField(blank=True, verbose_name="Descrição em Português")
    date = models.DateField(default=timezone.now)
    skills = models.ManyToManyField(Skill, blank=True)
    video = CloudinaryField('video', resource_type='video', blank=True, null=True)
    thumbnail = CloudinaryField('image', blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    featured = models.BooleanField(default=False, verbose_name="Destaque")

    def __str__(self):
        return self.title

    def get_title(self, lang='en'):
        return self.title_pt if lang == 'pt' else self.title

    def get_description(self, lang='en'):
        return self.description_pt if lang == 'pt' else self.description

    def get_video_url(self):
        return self.video.url if self.video else None

    def get_thumbnail_url(self):
        return self.thumbnail.url if self.thumbnail else None

class Dashboard(models.Model):
    title = models.CharField(max_length=200)
    title_pt = models.CharField(max_length=200, blank=True, verbose_name="Título em Português")
    description = models.TextField(blank=True)
    description_pt = models.TextField(blank=True, verbose_name="Descrição em Português")
    embed_url = models.URLField()
    thumbnail = CloudinaryField('image', blank=True, null=True)
    featured = models.BooleanField(default=False, verbose_name="Destaque")
    
    def get_title(self):
        from django.utils.translation import get_language
        return self.title_pt if get_language() == 'pt' and self.title_pt else self.title

    def get_description(self):
        from django.utils.translation import get_language
        return self.description_pt if get_language() == 'pt' and self.description_pt else self.description

    def get_thumbnail_url(self):
        return self.thumbnail.url if self.thumbnail else None