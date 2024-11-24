from django.shortcuts import render, redirect
from .models import CustomMessage
from .forms import CustomMessageForm


def home(request):
    if request.method == 'POST':
        form = CustomMessageForm(request.POST)
        if form.is_valid():
                form.save()
                return redirect('blog-home')
    else:
         form = CustomMessageForm
    return render(request, 'pages/home.html', {'form': form})
     
def about(request):
    return render(request, 'pages/contact.html')
