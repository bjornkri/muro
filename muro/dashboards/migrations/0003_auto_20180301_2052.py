# Generated by Django 2.0.2 on 2018-03-01 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dashboards', '0002_muro_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='brick',
            name='name',
            field=models.CharField(max_length=128),
        ),
        migrations.AlterField(
            model_name='muro',
            name='title',
            field=models.CharField(max_length=128),
        ),
    ]
