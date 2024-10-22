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
<<<<<<< HEAD
    video = models.FileField(upload_to='project_videos', blank=True, null=True)
    thumbnail = models.ImageField(upload_to='project_thumbnails/', blank=True, null=True)
=======
    video = CloudinaryField('video', resource_type='video', blank=True, null=True)
    thumbnail = CloudinaryField('image', blank=True, null=True)
>>>>>>> bb7e1d0e1a1c186d18d91d18078ad97923890be3
    github_link = models.URLField(blank=True, null=True)
    featured = models.BooleanField(default=False, verbose_name="Destaque")

    def __str__(self):
        return self.title

    def get_title(self, lang='en'):
        return self.title_pt if lang == 'pt' else self.title

    def get_description(self, lang='en'):
<<<<<<< HEAD
        return self.description_pt if lang == 'pt' else self.description
=======
        return self.description_pt if lang == 'pt' else self.description

    def get_video_url(self):
        return self.video.url if self.video else None

    def get_thumbnail_url(self):
        return self.thumbnail.url if self.thumbnail else None
>>>>>>> bb7e1d0e1a1c186d18d91d18078ad97923890be3
