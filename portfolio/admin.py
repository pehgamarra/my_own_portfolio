from django.contrib import admin
from .models import Skill, Project

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_featured']
    list_editable = ['is_featured']
    list_filter = ['is_featured']
    filter_horizontal = ('skills',)
    fieldsets = (
        (None, {
            'fields': ('title', 'title_pt', 'description', 'description_pt', 'date', 'skills', 'video', 'thumbnail', 'github_link')
        }),
    )
