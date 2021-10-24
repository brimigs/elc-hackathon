from django import forms
from django.contrib.auth.models import User
from . import models
from django.contrib.auth import authenticate
from django.core.exceptions import ObjectDoesNotExist

# for logging in, receive form inputs
class LoginForm(forms.Form):
    email = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput(render_value=False))
    remember_me = forms.BooleanField(required=False)

    def clean(self):
        user = self.authenticate_via_email()
        if not user:
            raise forms.ValidationError("Sorry, that login was invalid. Please try again.")
        else:
            self.user = user
        return self.cleaned_data


    def authenticate_user(self):
        return authenticate(
            username=self.user.username,
            password=self.cleaned_data['password'])

    def authenticate_via_email(self):
        """
            Authenticate user using email.
            Returns user object if authenticated else None
        """
        email = self.cleaned_data['email']
        if email:
            try:
                user = User.objects.get(email__iexact=email)
                if user.check_password(self.cleaned_data['password']):
                    return user
            except ObjectDoesNotExist:
                pass
        return None

    def process(self):
        return {'remember_me': self.cleaned_data['remember_me']}


# run the predict function under the typing tool (for both with and without the probabilities)
class SkinForm(forms.Form):
    picture = forms.CharField()

    def clean_picture(self):
        arr = self.cleaned_data['picture'].split(',')
        if (len(arr) < 2):
            raise forms.ValidationError('Not in base64/Bad format')
        return arr[1]

    def process(self):
        return self.cleaned_data['picture']