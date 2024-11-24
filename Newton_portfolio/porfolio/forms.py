from django import forms
from .models import CustomMessage

class CustomMessageForm(forms.ModelForm):
    class Meta:
        model = CustomMessage
        fields = ['name', 'email', 'message']
