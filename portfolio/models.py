from django.db import models
from django.utils import timezone

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
    video = models.URLField(blank=True, null=True, verbose_name="YouTube Video Link")
    thumbnail = models.ImageField(upload_to='project_thumbnails/', blank=True, null=True)
    github_link = models.URLField(blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    featured_order = models.IntegerField(default=0)

    def __str__(self):
        return self.title

    def get_title(self, lang='en'):
        return self.title_pt if lang == 'pt' else self.title

    def get_description(self, lang='en'):
        return self.description_pt if lang == 'pt' else self.description

    class Meta:
        ordering = ['featured_order']
