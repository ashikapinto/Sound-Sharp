from django.shortcuts import render, HttpResponse
from rest_framework import viewsets
from .serializers import SongSerializer, CommentSerializer
from .models import Song, Comment
from .forms import LoginForm
# Create your views here.
def login(request):
    username = 'not logged in'
    if request.method == 'POST':
        MyLoginForm = LoginForm(request.POST)
        username = MyLoginForm['user']
        print(username)
        request.session['username'] = username
    else:
        MyLoginForm = LoginForm()
    return render(request, 'lists.html', {"username" : username, 'songs': Song.objects.all()})

class SongView(viewsets.ModelViewSet):
    serializer_class = SongSerializer
    queryset = Song.objects.all()
class CommentView(viewsets.ModelViewSet):
    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
def lists(request):
    return render(request, 'lists.html', {'songs': Song.objects.all()})
def detail(request, slug_text):
    q = Song.objects.filter(slug = slug_text)
    if q.exists():
        q = q.first()
    else:
        return HttpResponse('<h1>Post Not Found</h1>')
    context = {'song': q}
    return render(request, 'detail.html', context)

def formView(request):
   if request.session.has_key('username'):
       username = request.session['username']
       return render(request, 'lists.html', {"username" : username})
   else:
       return render(request, 'login.html', {})
