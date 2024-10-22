from django.contrib import admin
from .models import Skill, Project
from cloudinary.forms import CloudinaryFileField

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'github_link')
    filter_horizontal = ('skills',)
    fieldsets = (
        (None, {
            'fields': ('title', 'title_pt', 'description', 'description_pt', 'date', 'skills', 'video', 'thumbnail', 'github_link')
        }),
    )

    formfield_overrides = {
        CloudinaryFileField: {'widget': admin.widgets.AdminFileWidget},
    }

    def formfield_for_dbfield(self, db_field, **kwargs):
        if db_field.name in ['video', 'thumbnail']:
            kwargs['widget'] = admin.widgets.AdminFileWidget
        return super().formfield_for_dbfield(db_field, **kwargs)
