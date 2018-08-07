# search_and_employ
Employment search algorithms for jobs and networking

### **Note:** The linkedin.ipynb notebook is using pyton-linked, as a short-cut
to prototype searches. This library is out of date and runs best under Python 2.
All other development should proceed under Python 3.

## Run app
-> Fork repo

`git clone`  
`cd SearchAndEmploy/`
`pip install -r requirements.txt`  

### Install PostgreSQL Database
Install PostgreSQL  
`psql -U postgres`  
```SQL
CREATE DATABASE searchandemploy_db;  
CREATE USER searchandemploy_user WITH PASSWORD 'password';  
ALTER ROLE searchandemploy_user SET client_encoding TO 'utf8';  
ALTER ROLE searchandemploy_user SET timezone TO 'UTC';  
GRANT ALL PRIVILEGES ON DATABASE searchandemploy_db TO searchandemploy_user;  
```

`cd search_and_employ/`  
`python manage.py makemigrations`  
`python manage.py migrate`
`python manage.py runserver`

`cd search_and_employ/frontend`
`npm run start`  
