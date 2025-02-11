from django.db import models
from django.contrib.auth.models import AbstractUser

class Airport(models.Model):
    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)

    def __str__(self):
        return self.name
    
class Plane(models.Model):
    STATUS_CHOICES = [
        ('operational', 'Operational'),
        ('maintenance', 'Maintenance'),
        ('grounded', 'Grounded'),
    ]

    name = models.CharField(max_length=100)
    airport = models.ForeignKey(Airport, on_delete=models.SET_NULL, null=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='operational')

    def __str__(self):
        return self.name

class CustomUser(AbstractUser):
    ROLE_CHOICES = [
        ('admin', 'Admin'),
        ('mechanic', 'Mechanic'),
        ('pilot', 'Pilot'),
    ]

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='mechanic')
