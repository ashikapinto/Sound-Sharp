# Generated by Django 2.2 on 2019-04-20 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musicblog', '0009_auto_20190420_1036'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='song',
            name='slug',
        ),
        migrations.AddField(
            model_name='song',
            name='id',
            field=models.AutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]
