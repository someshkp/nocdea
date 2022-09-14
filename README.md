# Overview

The app contain multiple pages:-
1) Sign up
2) Login
3) Home

Each page have specific role.

##Sign up
This page contain form to register user with fields name username, email, password.

##Login 
This page include userlogin form with field username, password.

##Home
In home page it show dashboard containing Welcome text for user and navbar which is created with the help of bootstrap and have link for logout at top right and company name at top right.

##Other
1)When admin logins in dashboard it shows all the details of registered users.
2) The data is stored in local storage with key user. 
3) When user login it created a key named token and value is the user's detail.
4) when logout the token is removed from local storage.
5) User login only when found token key from localstorage else shows blank white page.


**End
