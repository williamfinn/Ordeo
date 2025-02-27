from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="Ordeo API",
        default_version='v1',
        description="An inventory ordering full stack app using Django Rest Framework",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)
urlpatterns = [
    path('', include('ordeo.frontend.urls')),
    path('', include('ordeo.apps.products.urls')),
    path('', include('ordeo.apps.accounts.urls')),
    path('', include('ordeo.apps.carts.urls')),
    path('api/swagger', schema_view.with_ui('swagger', cache_timeout=0)),
    path('admin/', admin.site.urls),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
