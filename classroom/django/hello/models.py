from django.db import models

class Hello(models.Model):
    name = models.CharField(max_length = 100)
    age = models.IntegerField(max_length = 3)
 
