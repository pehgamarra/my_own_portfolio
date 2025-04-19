from django.contrib import admin
from .models import Skill, Project, Dashboard
from cloudinary.forms import CloudinaryFileField

@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'github_link', 'featured')
    list_filter = ('featured',)
    list_editable = ('featured',) 
    filter_horizontal = ('skills',)
    fieldsets = (
        (None, {
            'fields': ('title', 'title_pt', 'description', 'description_pt', 'date', 'skills', 'video', 'thumbnail', 'github_link', 'featured')
        }),
    )

    formfield_overrides = {
        CloudinaryFileField: {'widget': admin.widgets.AdminFileWidget},
    }

    def formfield_for_dbfield(self, db_field, **kwargs):
        if db_field.name in ['video', 'thumbnail']:
            kwargs['widget'] = admin.widgets.AdminFileWidget
        return super().formfield_for_dbfield(db_field, **kwargs)

@admin.register(Dashboard)
class DashboardAdmin(admin.ModelAdmin):
    list_display = ('title','description_pt', 'featured')
    search_fields = ('title', 'title_pt', 'description', 'description_pt', 'featured',)
    filter_horizontal = ()

    fieldsets = (
        (None, {
            'fields': ('title', 'title_pt', 'description', 'description_pt', 'embed_url', 'thumbnail','featured',) 
        }),
    )