# Angular test app

steps to run the project.
1) clone the project.
2) run npm install to install dependencieis.
3)run npm start.

## user credintials
for login purpose use.

username: test

password: test

or

username: admin

password: admin

Any new user created will have authentication credintials as well. in case of new user created 

username: {first name}

password: {first name}

as backend is a mocked one, if you refresh the page all new users will be deleted. (but as the information for login user is stored in local storage so you will still stay login. just the data will not appear in user list)

## routes
we have   

/login route for login

/users for user list view.

/users/:id to view specific user.

/users/user/new to add new user


## Project file setup

pages folder have all the pages (login, user view etc)
components folder have components that are either universal such as navbar or reuseable.
_models folder have all the models needed for project (currently only users)
_helper folder have auth guard to specifiy which routes are protected and some HTTP intercepter function to mock backend
_Service folder have project services (authentication and user service) 


## project explanation.

We have a simple authentication model to login. it will be intercepted by our mock backend which is build using HTTP interceptor

After login we will have a user view to list all users, a new to get detail about specific user and a view to add new user.all these views are
bundeled together in user component.

