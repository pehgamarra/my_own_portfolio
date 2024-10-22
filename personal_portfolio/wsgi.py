"""
WSGI config for personal_portfolio project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ['CLOUDINARY_CLOUD_NAME'] = 'dk7umehaa'
os.environ['CLOUDINARY_API_KEY'] = '672561228955636'
os.environ['CLOUDINARY_API_SECRET'] = 'LouWJhMYvmvQn-btLTHx7OrbaKU'
os.environ['DJANGO_SECRET_KEY'] = 'django-insecure-u$px!5h8im%opw8j-ry^qw4uui#$1c528nlzjy$p+xbo%94ztl'

# O resto do código wsgi.py continua abaixo...

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'personal_portfolio.settings')

application = get_wsgi_application()
