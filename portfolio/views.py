from django.shortcuts import render
from .models import Project, Skill

def home(request):
    featured_projects = Project.objects.filter(is_featured=True).order_by('featured_order')[:3]
    lang = request.GET.get('lang', 'en')

    featured_projects_data = []
    for project in featured_projects:
        featured_projects_data.append({
            'id': project.id,
            'title_en': project.title,
            'title_pt': project.title_pt,
            'description_en': project.description,
            'description_pt': project.description_pt,
            'thumbnail': project.thumbnail,
            'video': project.video,
            'github_link': project.github_link,
            'skills': project.skills.all(),
        })

    context = {
        'featured_projects': featured_projects_data,
        'lang': lang
    }
    return render(request, 'portfolio/home.html', context)

def projects(request):
    projects = Project.objects.all().order_by('-date')
    skills = Skill.objects.all().order_by('name')
    
    selected_skill = request.GET.get('skill')
    if selected_skill:
        projects = projects.filter(skills__name=selected_skill)

    lang = request.GET.get('lang', 'en')

    projects_data = []
    for project in projects:
        projects_data.append({
            'id': project.id,
            'title_en': project.title,
            'title_pt': project.title_pt,
            'description_en': project.description,
            'description_pt': project.description_pt,
            'thumbnail': project.thumbnail,
            'video': project.video,
            'github_link': project.github_link,
            'skills': project.skills.all(),
        })

    context = {
        'projects': projects_data,
        'skills': skills,
        'selected_skill': selected_skill,
        'lang': lang
    }
    return render(request, 'portfolio/projects.html', context)
