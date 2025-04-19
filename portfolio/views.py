from django.shortcuts import render
from .models import Project, Skill, Dashboard

def home(request):
    featured_projects = Project.objects.filter(featured=True)[:3]
    featured_dashboards = Dashboard.objects.filter(featured=True)[:3]
    lang = request.GET.get('lang', 'en')
    context = {
        'projects': featured_projects,
        'dashboards': featured_dashboards,
        'lang': lang,
    }
    return render(request, 'portfolio/home.html', context)

def projects(request):
    projects = Project.objects.all().order_by('-date')
    skills = Skill.objects.all().order_by('name')
    
    selected_skill = request.GET.get('skill')
    if selected_skill:
        projects = projects.filter(skills__name=selected_skill)

    lang = request.GET.get('lang', 'en')

    context = {
        'projects': projects,
        'skills': skills,
        'selected_skill': selected_skill,
        'lang': lang
    }
    return render(request, 'portfolio/projects.html', context)

def dashboards(request):
    dashboards = Dashboard.objects.all()
    lang = request.GET.get('lang', 'en')

    context = {
        'dashboards': dashboards,
        'lang': lang,
    }

    return render(request, 'portfolio/dashboards.html', context)

