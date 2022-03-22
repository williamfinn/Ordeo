# Generated by Django 3.2.9 on 2022-03-22 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0024_auto_20220322_1508'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cart',
            name='delivery',
            field=models.CharField(blank=True, choices=[('Pick-up', 'Pick-up'), ('Normal Delivery', 'Normal Delivery'), ('Fast Delivery', 'Fast Delivery')], max_length=50),
        ),
        migrations.AlterField(
            model_name='cart',
            name='payment',
            field=models.CharField(blank=True, choices=[('Cash', 'Cash'), ('Online Payment', 'Online Payment Provider'), ('Visa', 'Visa')], max_length=50),
        ),
    ]
