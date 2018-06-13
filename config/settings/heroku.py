from .base import *  # noqa

ALLOWED_HOSTS = env.list('DJANGO_ALLOWED_HOSTS', default=['mysterious-anchorage-36328.herokuapp.com', '0.0.0.0',])
