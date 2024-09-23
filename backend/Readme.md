# Skillwave
## A Smart India Hackathon 2024 Project
Skillwave is a comprehensive e-learning platform designed to help users learn and master various skills through engaging courses and interactive tutorials. This platform is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, ensuring scalability, performance, and a modern user experience.

## Table of Contents
* Introduction
* Features
* Technologies Used
* Installation
* Structure
* Usage
* Contributors
* License

## Introduction
Skillwave is developed to offer a seamless learning experience for users of all levels. The platform allows users to register, browse a wide range of courses, track their progress, and interact with fellow learners. Our goal is to make learning more accessible and engaging by incorporating video content, quizzes, and hands-on projects.

## Features
- User Authentication: Secure user registration and login using JWT tokens.
- Course Management: Admins can add, update, and delete courses.
- Interactive Learning: Includes videos, quizzes, and projects for an enhanced learning experience.
- Progress Tracking: Users can track their course progress and achievements.
- Responsive Design: Fully optimized for all screen sizes and devices.
## Technologies Used
- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Version Control: Git and GitHub
## Installation
To run Skillwave locally, follow these steps:

### Prerequisites
- Node.js installed
- MongoDB installed
- Git installed
### Clone the Repository
```bash
git clone https://github.com/Amitabh8876/SIH2024
cd skillwave
```
### Install Dependencies
#### For the frontend:
```bash
cd frontend
npm install
 ```
#### For the backend:
```bash
cd backend
npm install
```
#### Environment Variables
Create a ```.env``` file in the ```backend``` directory and add the following:
```bash
PORT=your_port
MONGODB_URI=your_mongodb_uri
CORS_ORIGIN=your_frontend_url
ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRE=your_accesstoken_expire_time
REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRE=your_refreshtoken_expire_time
```
## Stuructre

## Run the Application
To start backend server:
```bash
# In one terminal for the backend
cd backend
npm run dev
```
To start frontend server:
```bash
# In another terminal for the frontend
cd frontend
npm run dev
```


The app will run on ```http://localhost:5173``` for the frontend and ``` http://localhost:8000``` for the backend.

## Usage
Once the application is running:

- Register or login as a user.
- Browse available courses and enroll in any course of your choice.

## Contributors
- [Soumya Sagar Swain](https://www.linkedin.com/in/somya-sagar-swain-b9393b310/) - Developer
- [Amitabh Dutta](https://www.linkedin.com/in/dutta-amitab12345/) - Developer 
## License
This project is licensed under the [MIT](https://choosealicense.com/licenses/mit/) License - see the LICENSE file for details.
****
**Happy Coding :)**