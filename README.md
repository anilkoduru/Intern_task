# Intern_task
## To Setup The Api Locally 
Step -1 : Clone the repository

Step -2 : Install all the dependencies by typing the command (npm install) which will install all the node modules.

Step -3 : Create a cluster in the mongodb and click on the connect button in the mongodb website, where you will get the link to connect to node.js. To view on how to setup mongdb cluster <b>[click here](https://www.mongodb.com/basics/clusters/mongodb-cluster-setup)</b>

step -4 : Add .env file with following Key value pairs
            PORT = "The port on which you want to run the api"
            PASSWORD = "Password to mongoose cluster"
 
Step -4 : 
npm start - To run the application 
npm run build:dev - T
npm run start:dev - To run the development mode application
npm run start:prod - To run the production mode application

After running this, go to postman which helps to build and use api. So you can test the CRUD operation in the postman.

The development and production modes are done with the help of webpack. Webpacke is a module which helps to bundle all the different modules,files into a single file which helps to reduce the load on the application and improves the performance.
So this allows the developer to work with the development mode while ensuring that the optimized output is used in production mode.

Here is the link that gives you an overview of how this CRUD operations are working in this application. 
https://documenter.getpostman.com/view/21313349/2s93eYWCob

![image](https://user-images.githubusercontent.com/88759473/236918105-e32db821-8a94-44cb-a3fe-25d48b22fdec.png)

You can view the different kind of requests made and their response.
