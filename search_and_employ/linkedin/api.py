from rest_framework import viewsets, permissions

from .models import Company
from .serializers import CompanySerializer


class CompanyViewSet(viewsets.ModelViewSet):
    queryset = Company.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = CompanySerializer
